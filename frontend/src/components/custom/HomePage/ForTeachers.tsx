import PurposeCard from "@/components/custom/HomePage/PurposeCard";
import SectionHeader from "@/components/custom/layout/SectionHeader";

const ForTeachers = () => {
  return (
    <div className="text-center py-3 my-6">
      <SectionHeader
        title="Built for Teachers"
        description="Save time. Conduct fair exams. Focus on teaching."
      />

      <div className="flex items-center py-12 px-6 gap-y-6 gap-x-3 md:gap-x-8 flex-wrap md:flex-nowrap">
        <div>
          <PurposeCard
            title="Create exams with questions and correct answers"
            desc="Add multiple choice questions. Mark the correct option for each. Build complete exams in minutes."
          />
          <PurposeCard
            title="Set exact exam start and end time"
            desc="Define precise date and time windows. Students can only access during this period. Server-controlled timing ensures fairness."
          />
          <PurposeCard
            title="Share one link with the class"
            desc="Generate unique exam link. Share via any platform. Students use the same link to access the exam."
          />
        </div>
        <div>
          <PurposeCard
            title="Automatic checking and scoreboard"
            desc="System evaluates all submissions instantly. Scoreboard is generated automatically with rankings and scores."
          />
          <PurposeCard
            title="No manual evaluation"
            desc="Save hours of checking papers. Focus your time on teaching instead of grading."
          />
          <PurposeCard
            title="Fair and consistent results"
            desc="Every student is evaluated using the same criteria. No bias. No errors. Complete transparency."
          />
        </div>
      </div>
    </div>
  );
};

export default ForTeachers;
