import ContactUs from "@/components/ContactUs/ContactUs";
import ContentCard from "@/components/ContentCard/ContentCard";
import Gallery from "@/components/Gallery/Gallery";
import HomePage from "@/components/HomePage/HomePage";
import News from "@/components/News/News";
import ProgramCommittee from "@/components/ProgramCommittee/ProgramCommitee";
import { Ticket } from "lucide-react";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <div>
      <HomePage />
      <ContentCard />
      <Ticket />
      <News />
      <ProgramCommittee />
      <Gallery />
      <ContactUs />
    </div>
  );
};

export default MainPage;
