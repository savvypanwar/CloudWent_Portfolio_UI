"use client";

import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Dashboard page pe Navbar aur Footer ko forcefully hide karo
  useEffect(() => {
    // Navbar aur Footer ko select karo aur hide karo
    const navbar = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (navbar) navbar.style.display = "none";
    if (footer) footer.style.display = "none";

    // Cleanup: page leave karne par wapas show karo
    return () => {
      if (navbar) navbar.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return <>{children}</>;
}