"use client";

import Lottie from "lottie-react";

interface LottiePlayerProps {
  animationData: object;
  className?: string;
}

export default function LottiePlayer({
  animationData,
  className = "w-full h-full",
}: LottiePlayerProps) {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
    />
  );
}