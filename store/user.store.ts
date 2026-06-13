import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  preferences?: {
    notifications: boolean;
    newsletter: boolean;
  };
}

export interface UserState {
  profile: UserProfile | null;
  preferences: {
    notifications: boolean;
    newsletter: boolean;
  };
}

export interface UserActions {
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  setPreferences: (preferences: UserState["preferences"]) => void;
  updatePreferences: (updates: Partial<UserState["preferences"]>) => void;
  clearUser: () => void;
}

export type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      // Initial state
      profile: null,
      preferences: {
        notifications: true,
        newsletter: true,
      },

      // Actions
      setProfile: (profile) => {
        set({ profile });
      },

      updateProfile: (updates) => {
        set((state) => ({
          profile: state.profile ? { ...state.profile, ...updates } : null,
        }));
      },

      setPreferences: (preferences) => {
        set({ preferences });
      },

      updatePreferences: (updates) => {
        set((state) => ({
          preferences: { ...state.preferences, ...updates },
        }));
      },

      clearUser: () => {
        set({
          profile: null,
          preferences: {
            notifications: true,
            newsletter: true,
          },
        });
      },
    }),
    {
      name: "user-storage",
      partialize: (state) => ({
        profile: state.profile,
        preferences: state.preferences,
      }),
    }
  )
);