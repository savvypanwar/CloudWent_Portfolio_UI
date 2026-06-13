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
        set((state) => {
          const themes: Theme[] = ["light", "dark", "system"];
          const currentIndex = themes.indexOf(state.theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          return { theme: themes[nextIndex] };
        });
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