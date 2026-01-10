import ExaminoCard from "@/components/homePage/ExaminoCard";
import { Icons } from "@/components/icons/icons";
import SectionHeader from "@/components/sections/SectionHeader";

const HowItWorks = () => {
  const Question = Icons.question;
  const ArrowRight = Icons.ArrowRight;
  const MonitorUp = Icons.MonitorUp;
  const BookOpenCheck = Icons.BookOpenCheck;
  const NotebookPen = Icons.NotebookPen;
  return (
    <div className="text-center py-3 my-6">
      <SectionHeader
        title="How It Works"
        description="Simple, secure, and straightforward"
      />
      <div className="Cards flex justify-around items-center flex-wrap py-6 px-2 gap-y-6 gap-x-3">
        <ExaminoCard
          Icon={<Question />}
          title="Teacher Creates an Exam"
          desc="Set exam title, questions, date, and time window for students to
            attempt"
        />
        <ArrowRight className="hidden md:block" />
        <ExaminoCard
          Icon={<MonitorUp />}
          title="Teacher shares the exam link with students"
          desc="Teacher shares the unique exam link with students via email or messaging"
        />
        <ArrowRight className="hidden md:block" />
        <ExaminoCard
          Icon={<NotebookPen />}
          title="Students attempt exam during allowed time"
          desc="Students attempt during time window. After time ends, submission is automatic."
        />
        <ArrowRight className="hidden md:block" />
        <ExaminoCard
          Icon={<BookOpenCheck />}
          title="Automatic Evaluation"
          desc="System automatically evaluates correct answers and shows Scoreboard. No manual checking needed."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
