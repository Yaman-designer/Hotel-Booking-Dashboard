"use client";

import { Cairo, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const [open, setopen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} ${poppins.variable} antialiased bg-gray-50`}
      >
        <div className="flex min-h-screen">
          <Sidebar open setopen />

          <div className="flex-1 flex flex-col">
            <Navbar
              onMenuClick={() => {
                setopen(true);
              }}
            />

            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
