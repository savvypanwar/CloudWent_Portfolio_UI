// src/hooks/useTheme.ts
"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/theme.store";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const useTheme = () => {
  const { theme, resolvedTheme, setTheme, toggleTheme, setResolvedTheme } =
    useThemeStore();

  useEffect(() => {
    const applyTheme = () => {
      const legacyTheme = localStorage.getItem("theme");
      const hasStoredTheme = localStorage.getItem("theme-storage");
      let nextTheme = theme;

      if (
        theme === "system" &&
        !hasStoredTheme &&
        (legacyTheme === "dark" || legacyTheme === "light")
      ) {
        nextTheme = legacyTheme;
        setTheme(legacyTheme);
      }

      const nextResolvedTheme =
        nextTheme === "system" ? getSystemTheme() : nextTheme;

      setResolvedTheme(nextResolvedTheme);
      document.documentElement.classList.toggle(
        "dark",
        nextResolvedTheme === "dark"
      );
    };

    applyTheme();

    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [theme, setTheme, setResolvedTheme]);

  return { theme, resolvedTheme, setTheme, toggleTheme };
};
