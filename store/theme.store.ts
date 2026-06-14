import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

export interface ThemeState {
  theme: Theme;
  resolvedTheme: "light" | "dark";
}

export interface ThemeActions {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLight: () => void;
  setDark: () => void;
  setSystem: () => void;
  setResolvedTheme: (resolvedTheme: "light" | "dark") => void;
}

export type ThemeStore = ThemeState & ThemeActions;

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      // Initial state
      theme: "system",
      resolvedTheme: "light",

      // Actions
      setTheme: (theme) => {
        set({ theme });
      },

      toggleTheme: () => {
        set((state) => ({
          theme: state.resolvedTheme === "dark" ? "light" : "dark",
        }));
      },

      setLight: () => {
        set({ theme: "light" });
      },

      setDark: () => {
        set({ theme: "dark" });
      },

      setSystem: () => {
        set({ theme: "system" });
      },

      setResolvedTheme: (resolvedTheme) => {
        set({ resolvedTheme });
      },
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
);
