import { title } from "process";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import React from "react";

export const metadata = {
  title: 'Next.js Navbar Example',
  description: 'Simple navigation in Next.js using App Router',
};

export default function RootLayout({children} : {children: React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}