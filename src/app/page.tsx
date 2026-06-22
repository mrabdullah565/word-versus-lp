import React from "react";
import HeroV4 from "./components/HeroV4";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Reviews from "./components/Reviews";
import Action from "./components/Action";
import Journey from "./components/JourneySection";
import CommunitySection from "./components/CommunitySection";
import FooterSection from "./components/FooterSection";
import DetailSection from "./components/DetailSection";

const page = () => {
  return (
    <>
      <HeroV4 />
      <ProblemSection />
      <HowItWorksSection />
      <Reviews />
      {/* <DetailSection /> */}
      <Action />
      <Journey />
      <CommunitySection />
      <FooterSection />
    </>
  );
};

export default page;
