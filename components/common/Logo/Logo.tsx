"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logos/CloudWent-Logo.png";

export const Logo = ({ className = "", showText = true }) => {
  const pathname = usePathname();

  // ✅ Agar user dashboard par hai, toh logo /dashboard par le jayega
  const href = pathname?.startsWith("/dashboard") ? "/dashboard" : "/";

  return (
    <Link href={href} className={`flex items-center gap-2 ${className}`}>
      {showText && (
        <>
          <Image 
            src={logo} 
            alt="CloudWent Logo" 
            width={120} 
            height={30} 
            className="object-contain"
          />
        </>
      )}
    </Link>
  );
};

export default Logo;