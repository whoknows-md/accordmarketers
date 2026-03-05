import React from "react";

const Alliances = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-xs tracking-[4px] text-gray-500 uppercase">
          BUSINESS ALLIANCES
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-16 animate-scroll whitespace-nowrap">
          <span className="text-2xl font-semibold text-blue-500">Meta</span>
          <span className="text-2xl font-semibold text-gray-700">
            Google Ads
          </span>
          <span className="text-2xl font-semibold text-blue-700">LinkedIn</span>
          <span className="text-2xl font-semibold text-black">OpenAI</span>
          <span className="text-2xl font-semibold text-orange-500">
            HubSpot
          </span>

          {/* Duplicate for smooth loop */}
          <span className="text-2xl font-semibold text-blue-500">Meta</span>
          <span className="text-2xl font-semibold text-gray-700">
            Google Ads
          </span>
          <span className="text-2xl font-semibold text-blue-700">LinkedIn</span>
          <span className="text-2xl font-semibold text-black">OpenAI</span>
          <span className="text-2xl font-semibold text-orange-500">
            HubSpot
          </span>
        </div>
      </div>
    </section>
  );
};

export default Alliances;
