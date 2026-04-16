import React, { useState, useEffect } from "react";
import { supabase } from "../context/supabaseClient";
import { useTheme } from "../context/ThemeContext";
import { LogOut, Eye, EyeOff } from "lucide-react";
import Dashboard from "../pages/Dashboard";

const VALID_STATUSES = ["new", "reviewed", "contacted", "closed"];
const STATUS_OVERRIDES_KEY = "proposal_status_overrides";

const normalizeStatus = (status) => {
  const normalized = (status || "new").toString().trim().toLowerCase();
  return VALID_STATUSES.includes(normalized) ? normalized : "new";
};

const getStatusOverrides = () => {
  try {
    const stored = localStorage.getItem(STATUS_OVERRIDES_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveStatusOverrides = (overrides) => {
  localStorage.setItem(STATUS_OVERRIDES_KEY, JSON.stringify(overrides));
};

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userIn, setUserIn] = useState("");
  const [passIn, setPassIn] = useState("");
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isDark } = useTheme();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [selectedMessage, setSelectedMessage] = useState(null);

  const MASTER_USER = import.meta.env.VITE_ADMIN_USER;
  const MASTER_PASS = import.meta.env.VITE_ADMIN_PASS;

  useEffect(() => {
    if (sessionStorage.getItem("admin_access") === "true") {
      setIsAuthorized(true);
      fetchCustomers();
    }

    const channel = supabase
      .channel("realtime proposals")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "proposals" },
        () => fetchCustomers(),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchCustomers = async () => {
    const { data } = await supabase
      .from("proposals")
      .select("*")
      .order("created_at", { ascending: false });

    const overrides = getStatusOverrides();

    setCustomers(
      (data || []).map((item) => ({
        ...item,
        status: normalizeStatus(overrides[item.id] ?? item.status),
      })),
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userIn === MASTER_USER && passIn === MASTER_PASS) {
      setIsAuthorized(true);
      sessionStorage.setItem("admin_access", "true");
      fetchCustomers();
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this proposal?")) return;
    await supabase.from("proposals").delete().eq("id", id);
    setCustomers((prev) => prev.filter((c) => c.id !== id));

    const overrides = getStatusOverrides();
    if (overrides[id] !== undefined) {
      delete overrides[id];
      saveStatusOverrides(overrides);
    }
  };

  const updateStatus = async (id, status) => {
    const normalizedStatus = normalizeStatus(status);
    const overrides = getStatusOverrides();

    // Save immediately so refresh keeps the selected status,
    // even if DB policies prevent the update.
    overrides[id] = normalizedStatus;
    saveStatusOverrides(overrides);

    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: normalizedStatus } : c)),
    );

    const { data, error } = await supabase
      .from("proposals")
      .update({ status: normalizedStatus })
      .eq("id", id)
      .select("id, status");

    if (error) {
      alert("Update failed: " + error.message);
      fetchCustomers();
      return;
    }

    // If no row was updated, keep local override and notify.
    if (!data || data.length === 0) {
      alert(
        "Status saved locally, but database update was blocked. Check Supabase RLS update policy for proposals.",
      );
      return;
    }

    // DB write succeeded; remove local override for this id.
    const latestOverrides = getStatusOverrides();
    if (latestOverrides[id] !== undefined) {
      delete latestOverrides[id];
      saveStatusOverrides(latestOverrides);
    }
  };

  const filtered = customers.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase()),
  );

  const stats = {
    new: customers.filter((c) => normalizeStatus(c.status) === "new").length,
    reviewed: customers.filter((c) => normalizeStatus(c.status) === "reviewed")
      .length,
    contacted: customers.filter(
      (c) => normalizeStatus(c.status) === "contacted",
    ).length,
    closed: customers.filter((c) => normalizeStatus(c.status) === "closed")
      .length,
  };

  // 🔐 LOGIN SCREEN
  if (!isAuthorized) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <form
          onSubmit={handleLogin}
          className={`p-8 rounded-3xl shadow w-96 ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

          <input
            type="text"
            placeholder="Username"
            className={`w-full p-3 mb-4 rounded-xl border ${
              isDark
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
            onChange={(e) => setUserIn(e.target.value)}
          />

          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full p-3 pr-12 rounded-xl border ${
                isDark
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              onChange={(e) => setPassIn(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white p-3 rounded-xl">
            Login
          </button>
        </form>
      </div>
    );
  }

  // 📊 PAGINATION
  const indexOfLast = currentPage * itemsPerPage;
  const currentData = filtered.slice(indexOfLast - itemsPerPage, indexOfLast);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // 📅 DATE FORMAT
  const formatDate = (date) => {
    const d = new Date(date);
    return {
      date: d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      time: d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  // 🧠 MAIN UI
  return (
    <div
      className={`min-h-screen pt-32 px-6 pb-10 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Proposal Requests</h1>
          <button
            onClick={() => {
              sessionStorage.clear();
              location.reload();
            }}
            className="text-red-500"
          >
            <LogOut />
          </button>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search client..."
          className={`w-full p-3 mb-6 rounded-xl border ${
            isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
          }`}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🔥 DASHBOARD COMPONENT */}
        <Dashboard
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentData={currentData}
          updateStatus={updateStatus}
          handleDelete={handleDelete}
          selectedMessage={selectedMessage}
          setSelectedMessage={setSelectedMessage}
          formatDate={formatDate}
          isDark={isDark}
          stats={stats}
        />
      </div>
    </div>
  );
};

export default Admin;
