import HeroSection from "@/components/homePage/HeroSection";
import HowItWorks from "@/components/homePage/HowItWorks";
import WhyExamino from "@/components/homePage/WhyExamino";
import ForTeachers from "@/components/homePage/ForTeachers";
import ForStudents from "@/components/homePage/ForStudents";
import JoinNow from "@/components/homePage/JoinNow";
import Footer from "@/components/layout/Footer";

const HomePage = () => {
  return (
    <div className="HomePage pt-16">
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
