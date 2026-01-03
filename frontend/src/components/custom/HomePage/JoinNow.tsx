import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";

const JoinNow = () => {
  const UserRoundPen = Icons.UserRoundPen;
  const NotebookPen = Icons.NotebookPen;
  return (
    <div className="text-white text-center py-20 bg-blue-600">
      <div className="pb-12">
        <h2 className="text-4xl font-bold my-6">
          Start creating exams the right way
        </h2>
        <p>
          Join teachers and students using Examino for secure, time-based exams
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 [&>button]:cursor-pointer">
        <Button variant="outlineBlue" size="hero">
          <UserRoundPen className="h-5 w-5" />
          Get Started as Teacher
        </Button>
        <Button variant="blue" size="hero" className="border-2 border-white">
          {" "}
          <NotebookPen /> Join as Student
        </Button>
      </div>
    </div>
  );
};

export default JoinNow;
