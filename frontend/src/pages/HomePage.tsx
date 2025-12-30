import Navbar from "@/components/custom/Navbar";
import HeroSection from "@/components/custom/HeroSection";
import HowItWorks from "@/components/custom/HowItWorks";

const HomePage = () => {
  return (
    <div className="HomePage pt-16 flex flex-col gap-6">
      <Navbar />
      <HeroSection />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
