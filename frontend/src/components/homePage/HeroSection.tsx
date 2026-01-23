import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const UserRoundPen = Icons.UserRoundPen;
  const NotebookPen = Icons.NotebookPen;
  return (
    <div className="py-16 md:py-48 bg-blue-50">
      <div className="md:px-32 lg:px-56 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Conduct secure, time-based online exams with confidence
        </h1>
        <p className="my-6 max-w-xl m-auto text-lg leading-relaxed text-muted-foreground">
          Teachers create exams with fixed date and time. Students attempt them
          only during the allowed window. Evaluation and scoreboard are
          automatic.
        </p>
        <div className="flex flex-wrap justify-center gap-3 **:cursor-pointer">
          <Link to={"/auth/signup"}>
            <Button variant="blue" size="hero">
              <UserRoundPen className="h-5 w-5" />
              I'm a Teacher
            </Button>
          </Link>
          <Link to={"/auth/signup"}>
            <Button variant="outlineBlue" size="hero">
              {" "}
              <NotebookPen /> I'm a Student
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
