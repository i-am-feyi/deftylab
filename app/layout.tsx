import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased bg-[#03030A]")}
      >
        {children}
      </body>
    </html>
  );
}
