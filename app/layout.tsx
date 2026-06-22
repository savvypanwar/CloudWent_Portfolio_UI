import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "CloudWent",
  description: "Building scalable digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ... head scripts ... */}
      </head>
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
