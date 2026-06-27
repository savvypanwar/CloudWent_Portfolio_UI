"use client";

import { ThemeProvider } from "@/store/theme.store";
import { AuthProvider } from "@/store/auth.store";
import { UserProvider } from "@/store/user.store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
