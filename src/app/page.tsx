import HeroV4 from "./components/HeroV4";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FoundersNote from "./components/FoundersNote";
import Action from "./components/Action";
import Journey from "./components/JourneySection";
import FinalCTA from "./components/FinalCTA";
import FooterSection from "./components/FooterSection";

const page = () => {
  return (
    <>
      <HeroV4 />
      <ProblemSection />
      <HowItWorksSection />
      <FoundersNote />
      <Action />
      <FinalCTA />
      <FooterSection />
    </>
  );
};

export default page;
