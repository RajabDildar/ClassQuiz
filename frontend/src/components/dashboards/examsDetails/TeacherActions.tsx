import { Icons } from "@/components/icons/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TeacherActions = () => {
  const CopyLink = Icons.copyLink;
  const Scoreboard = Icons.scoreboard;
  const EditExam = Icons.editExam;
  return (
    <div className="flex gap-2 **:cursor-pointer **:h-4">
      <Tooltip>
        <TooltipTrigger>
          <EditExam />
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit Exam</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <CopyLink />{" "}
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy Link</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Scoreboard />
        </TooltipTrigger>
        <TooltipContent>
          <p>See Scorebaord</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default TeacherActions;
