import ExaminoCard from "@/components/custom/HomePage/ExaminoCard";
import { Icons } from "@/components/icons/icons";

const WhyExamino = () => {
  const Clock9 = Icons.Clock9;
  const Computer = Icons.Computer;
  const EyeOff = Icons.EyeOff;
  const BookOpenCheck = Icons.BookOpenCheck;
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold my-2">Why Examino</h2>
      <p>Built for reliability, fairness, and trust</p>
      <div className="Cards flex justify-around items-center flex-wrap py-6 px-2 gap-y-6 gap-x-3">
        <ExaminoCard
          Icon={<Clock9 />}
          title="Time-controlled exams"
          desc="Students can only access exams during the allowed time window. No early access. No late submissions beyond the deadline."
        />
        <ExaminoCard
          Icon={<Computer />}
          title="Server-verified access"
          desc="All timing is controlled by the server, not the student's device. This prevents manipulation and ensures fairness for everyone."
        />
        <ExaminoCard
          Icon={<BookOpenCheck />}
          title="Automatic and unbiased checking"
          desc="Every answer is evaluated using the same logic. No human bias. No errors. Consistent results for all students."
        />
        <ExaminoCard
          Icon={<EyeOff />}
          title="No early access to answers"
          desc="Questions are only visible during the exam window. Students cannot see questions or answers before the exam starts."
        />
      </div>
    </div>
  );
};

export default WhyExamino;
