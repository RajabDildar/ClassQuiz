import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Icons } from "../icons/icons";

const CreateExamBtn = () => {
  const CreateExam = Icons.createExam;
  return (
    <Link to={"/exam/create"}>
      <Button
        className="cursor-pointer font-semibold tracking-tight"
        variant="blue"
        size="hero"
      >
        <CreateExam className="h-5 w-5" />
        Create New Exam
      </Button>
    </Link>
  );
};

export default CreateExamBtn;
