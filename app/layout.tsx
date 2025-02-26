"use client";

import StickyHeader from "@/components/Header/StickyHeader";
import "./globals.css";
import AnimatedWallpaper from "@/components/AnimatedWallpaper/AnimatedWallpaper";
import HomePage from "./page";
import ContentCard from "@/components/ContentCard/ContentCard";
import Ticket from "@/components/Ticket/Ticket";
import News from "@/components/News/News";
import ProgramCommittee from "@/components/ProgramCommittee/ProgramCommitee";
import Gallery from "@/components/Gallery/Gallery";
import SocialIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="flex flex-col relative ">
        {/* Animated Wallpaper Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedWallpaper />
        </div>
        {/* Header */}
        <StickyHeader />
        {/* Main Content */}
        <main className="flex-grow relative z-10 ">
          <HomePage />
          <ContentCard />
          <Ticket />
          <News />
          <ProgramCommittee />
          <Gallery />
          <ContactUs />
        </main>
        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center relative z-10">
          <p>کلیه حقوق این وب سایت متعلق به انجمن ایرناگ می‌باشد © 2017-2025</p>
        </footer>
      </body>
    </html>
  );
}
