"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });
const hiddeNavbar = ["/sign-in", "/sign-up", "/chatting/mobile"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: [dark, neobrutalism],
        }}
      >
        <body className={cn("bg-slate-800 text-white", inter.className)}>
          {!hiddeNavbar.includes(pathname) && <Navbar />}
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
