import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalProviderWrapper from "@/providers/global-provider";

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
      <body className={cn("font-satoshi antialiased overflow-x-clip")}>
        <GlobalProviderWrapper>{children}</GlobalProviderWrapper>
      </body>
    </html>
  );
}
