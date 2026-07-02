import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { siteMetadata } from "@/utils/seo";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <Toaster position="top-center" />
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}