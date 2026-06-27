import { createContext, useContext, useState, useCallback } from "react";

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

type UserPreferences = UserState["preferences"];

interface UserContextType extends UserState {
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  setPreferences: (preferences: UserPreferences) => void;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<UserState>({
    profile: null,
    preferences: { notifications: true, newsletter: true },
  });

  const setProfile = useCallback((profile: UserProfile) => {
    setState((prev) => ({ ...prev, profile }));
  }, []);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setState((prev) => ({
      ...prev,
      profile: prev.profile ? { ...prev.profile, ...updates } : null,
    }));
  }, []);

  const setPreferences = useCallback((preferences: UserPreferences) => {
    setState((prev) => ({ ...prev, preferences }));
  }, []);

  const updatePreferences = useCallback((updates: Partial<UserPreferences>) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, ...updates },
    }));
  }, []);

  const clearUser = useCallback(() => {
    setState({ profile: null, preferences: { notifications: true, newsletter: true } });
  }, []);

  return (
    <UserContext.Provider
      value={{ ...state, setProfile, updateProfile, setPreferences, updatePreferences, clearUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserStore() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUserStore must be used within UserProvider");
  return ctx;
}
