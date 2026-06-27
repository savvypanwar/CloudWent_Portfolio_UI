import { createContext, useContext, useState, useCallback, useEffect } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLight: () => void;
  setDark: () => void;
  setSystem: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme-storage");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.theme) setThemeState(parsed.theme);
      } catch {}
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    let resolved: "light" | "dark";
    if (theme === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      resolved = theme;
    }
    root.classList.add(resolved);
    setResolvedTheme(resolved);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem("theme-storage", JSON.stringify({ theme: t }));
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const current = prev === "system"
        ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : prev;
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme-storage", JSON.stringify({ theme: next }));
      return next;
    });
  }, []);

  const setLight = useCallback(() => setTheme("light"), [setTheme]);
  const setDark = useCallback(() => setTheme("dark"), [setTheme]);
  const setSystem = useCallback(() => setTheme("system"), [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme, setLight, setDark, setSystem }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeStore() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeStore must be used within ThemeProvider");
  return ctx;
}
