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
    darkMode?: boolean;
  };
}

export interface UserPreferences {
  notifications: boolean;
  newsletter: boolean;
  darkMode?: boolean;
  language?: string;
  timezone?: string;
}

export interface UpdateProfileData {
  name?: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface UpdatePreferencesData {
  notifications?: boolean;
  newsletter?: boolean;
  darkMode?: boolean;
  language?: string;
  timezone?: string;
}

export interface UserActivity {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId?: string;
  timestamp: string;
  details?: Record<string, any>;
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface UserSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  newsletterSubscribed: boolean;
  themePreference: "light" | "dark" | "system";
  language: string;
}

export interface PasswordChangeData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}