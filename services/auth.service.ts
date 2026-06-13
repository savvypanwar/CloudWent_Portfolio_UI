import { api } from "./api";

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
  };
  token: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

class AuthService {
  private tokenKey = "authToken";
  private userKey = "authUser";

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/login", credentials);
    this.setSession(response);
    return response;
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/register", data);
    this.setSession(response);
    return response;
  }

  async logout(): Promise<void> {
    try {
      await api.post("/auth/logout");
    } finally {
      this.clearSession();
    }
  }

  async getProfile(): Promise<User> {
    return api.get<User>("/auth/profile");
  }

  async refreshToken(): Promise<{ token: string }> {
    return api.post<{ token: string }>("/auth/refresh");
  }

  isAuthenticated(): boolean {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem(this.tokenKey);
  }

  getUser(): User | null {
    if (typeof window === "undefined") return null;
    const userData = localStorage.getItem(this.userKey);
    if (!userData) return null;
    try {
      return JSON.parse(userData);
    } catch {
      return null;
    }
  }

  getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(this.tokenKey);
  }

  private setSession(authResponse: AuthResponse): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(this.tokenKey, authResponse.token);
    localStorage.setItem(this.userKey, JSON.stringify(authResponse.user));
  }

  private clearSession(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
}

export const authService = new AuthService();