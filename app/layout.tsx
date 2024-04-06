import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "subhamportfolio.dev",
  description: "Created By Subham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarCanvas/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
