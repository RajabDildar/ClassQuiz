import PurposeCard from "@/components/homePage/PurposeCard";
import SectionHeader from "@/components/sections/SectionHeader";

const ForStudents = () => {
  return (
    <div className="text-center py-3 my-6">
      <SectionHeader
        title="Designed for Students"
        description="Clear timing. Fair evaluation. Focused experience."
      />

      <div className="flex items-center py-12 px-6 gap-y-6 gap-x-3 md:gap-x-8 flex-wrap md:flex-nowrap">
        <div>
          <PurposeCard
            title="Clear exam timing"
            desc="Know exactly when your exam starts and ends. No confusion. No missed deadlines."
          />
          <PurposeCard
            title="Countdown before exam starts
"
            desc="See how much time is left before the exam begins. Prepare accordingly."
          />
          <PurposeCard
            title="Live timer during exam"
            desc="Always know how much time you have left. Plan your answers accordingly."
          />
        </div>
        <div>
          <PurposeCard
            title="Simple and focused exam screen"
            desc="Clean interface with no distractions. Focus entirely on your exam."
          />
          <PurposeCard
            title="Fair evaluation for everyone"
            desc="Automatic checking ensures consistent grading. Same rules apply to all students."
          />
          <PurposeCard
            title="Results visible after exam ends"
            desc="View your score and ranking immediately. See how you performed compared to others."
          />
        </div>
      </div>
    </div>
  );
};

export default ForStudents;
