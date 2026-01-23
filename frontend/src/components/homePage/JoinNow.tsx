import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JoinNow = () => {
  const UserRoundPen = Icons.UserRoundPen;
  const NotebookPen = Icons.NotebookPen;
  return (
    <div className="text-white text-center py-20 bg-blue-600">
      <div className="pb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Start creating exams the right way
        </h2>
        <p className="mt-3">
          Join teachers and students using Examino for secure, time-based exams
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 **:cursor-pointer">
        <Link to={"/auth/signup"}>
          <Button variant="outlineBlue" size="hero">
            <UserRoundPen className="h-5 w-5" />
            Get Started as Teacher
          </Button>
        </Link>
        <Link to={"/auth/signup"}>
          <Button variant="blue" size="hero" className="border-2 border-white">
            {" "}
            <NotebookPen /> Join as Student
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JoinNow;
