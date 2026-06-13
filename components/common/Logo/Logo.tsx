"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/CloudWent-Logo.png";

export const Logo = ({ className = "", showText = true }) => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {showText && (
        <>
          {/* Corrected with alt attribute */}
          <Image 
            src={logo} 
            alt="CloudWent Logo" 
            width={120} 
            height={30} 
            className="object-contain dark:invert"
          />
        </>
      )}
    </Link>
  );
};

export default Logo;