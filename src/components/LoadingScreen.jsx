"use client";

import gsap from "gsap";
import { useEffect } from "react";

const LoadingScreen = ({ isLoading }) => {
  useEffect(() => {
    if (!isLoading) {
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        pointerEvents: "none",
      });
    }
  }, [isLoading]);

  return (
    <div className="loading-screen">
      <div className="flex-center w-full absolute h-full">
        <h1 style={{ fontSize: "40px" }}>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
