import type { Metadata } from "next";
import "../../styles/globals.css";
import React from "react";
import NavBar from "@/components/shared/NavBar";

export const metadata: Metadata = {
  title: "RealEstate App",
  description: "RealEstate app used to Buy, Sell and Rent Properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
