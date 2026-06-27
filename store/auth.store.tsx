import { createContext, useContext, useState, useCallback } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthContextType extends AuthState {
  login: (user: User, token: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  });

  const login = useCallback((user: User, token: string) => {
    setState({ user, token, isAuthenticated: true, isLoading: false, error: null });
  }, []);

  const logout = useCallback(() => {
    setState({ user: null, token: null, isAuthenticated: false, isLoading: false, error: null });
  }, []);

  const setUser = useCallback((user: User) => {
    setState((prev) => ({ ...prev, user }));
  }, []);

  const setToken = useCallback((token: string) => {
    setState((prev) => ({ ...prev, token }));
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({ ...prev, error }));
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setState((prev) => ({
      ...prev,
      user: prev.user ? { ...prev.user, ...updates } : null,
    }));
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, login, logout, setUser, setToken, setLoading, setError, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthStore() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthStore must be used within AuthProvider");
  return ctx;
}
