"use client";

import { useEffect, useState } from "react";
import { authService, User } from "@/services/auth.service";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          const userData = authService.getUser();
          if (userData) {
            setUser(userData);
            setIsAuthenticated(true);
          } else {
            // Token exists but user data doesn't, try to fetch profile
            const profile = await authService.getProfile();
            setUser(profile);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        authService.logout();
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string, rememberMe?: boolean) => {
    const response = await authService.login({ email, password, rememberMe });
    setUser(response.user);
    setIsAuthenticated(true);
    return response;
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await authService.register({ name, email, password, confirmPassword: password });
    setUser(response.user);
    setIsAuthenticated(true);
    return response;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const refresh = async () => {
    try {
      const profile = await authService.getProfile();
      setUser(profile);
      setIsAuthenticated(true);
      return profile;
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
      throw error;
    }
  };

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    refresh,
  };
};