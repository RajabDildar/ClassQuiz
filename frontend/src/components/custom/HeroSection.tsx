import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const UserRoundPen = Icons.UserRoundPen;
  const NotebookPen = Icons.NotebookPen;
  return (
    <div className="py-16 md:py-24 bg-blue-50">
      <div className="md:px-32 lg:px-56 text-center">
        <h1 className="text-6xl font-bold ">
          Conduct secure, time-based online exams with confidence
        </h1>
        <p className="py-12 text-lg">
          Teachers create exams with fixed date and time. Students attempt them
          only during the allowed window. Evaluation and scoreboard are
          automatic.
        </p>
        <div className="flex justify-center gap-3 [&>button]:cursor-pointer">
          <Button variant="blue" size="hero">
            <UserRoundPen className="h-5 w-5" />
            I'm a Teacher
          </Button>
          <Button variant="outlineBlue" size="hero">
            {" "}
            <NotebookPen /> I'm a Student
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
