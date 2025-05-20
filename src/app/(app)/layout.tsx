import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

// const dmSans = DM_Sans({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "SilkenKnot",
  description: "HandCrafted",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${dmSans.className} antialiased`}> */}
      <body >
        <NuqsAdapter>
          {children}
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}
