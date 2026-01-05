import Navbar from "@/components/custom/layout/Navbar";
import HeroSection from "@/components/custom/HomePage/HeroSection";
import HowItWorks from "@/components/custom/HomePage/HowItWorks";
import WhyExamino from "@/components/custom/HomePage/WhyExamino";
import ForTeachers from "@/components/custom/HomePage/ForTeachers";
import ForStudents from "@/components/custom/HomePage/ForStudents";
import JoinNow from "@/components/custom/HomePage/JoinNow";
import Footer from "@/components/custom/layout/Footer";

const HomePage = () => {
  return (
    <div className="HomePage pt-16">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ForTeachers />
      <ForStudents />
      <WhyExamino />
      <JoinNow />
      <Footer />
    </div>
  );
};

export default HomePage;
