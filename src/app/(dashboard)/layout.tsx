import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        {/* {children} */}
      
        {/* Left */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
            <Link rel="stylesheet" href="/" className="flex items-center lg:justify-start justify-center gap-2" >
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <span className="hidden lg:block font-bold">Cool Llama</span>
            </Link>
            <Menu/>
          </div>
          
        {/* Right */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] p-4 overflow-scroll bg-[#F7F8FA]">
            <Navbar />
            {children}
          </div>
      </div>
  );
}
