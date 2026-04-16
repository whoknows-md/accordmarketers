import { useEffect, useState } from "react";

const VideoIntro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      {/* VIDEO (IMPORTANT: key forces reload) */}
      <video
        key={isMobile ? "mobile" : "desktop"}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={isMobile ? "/hero-mobile.mp4" : "/hero-video.mp4"}
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/50" />

      {/* TOP GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center" />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center z-10">
        <div className="animate-bounce text-white text-xl sm:text-2xl opacity-80">
          ↓
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
