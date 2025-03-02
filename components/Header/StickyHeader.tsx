"use client";
import Menubar from "@/components/Menubar/Menubar";
import { SidebarSheet } from "@/components/sidebarSheet/SidebarSheet";
import logo from "@/public/logo/Logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const router = useRouter();
  return (
    <header
      className={`sticky top-0 p-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={80}
            className="bg-secondary rounded-full p-2 lg:ml-28 ml-5 "
          />
        </div>
        <div>
          <SidebarSheet />
          <Menubar />
        </div>
      </div>
    </header>
  );
}
