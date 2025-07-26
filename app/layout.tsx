import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "DeftyLab",
  description:
    "DeftyLab is a Growth Developing agency for serviced based businesses looking to scale up their business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/deftylab-icon.svg" type="image/svg+xml" />
      <body className={cn("font-satoshi antialiased overflow-x-clip")}>{children}</body>
    </html>
  );
}
