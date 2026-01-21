import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface StudentActionsInterface {
  status: "active" | "upcoming" | "ended";
}

const StatusConfig = {
  active: {
    icon: Icons.startExam,
    text: "Start Exam",
    href: "/exam/:id",
    className: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  upcoming: {
    icon: Icons.info,
    text: "View Details",
    href: "/exam/:id/details",
    className: "bg-gray-200 hover:bg-gray-300 text-gray-500",
  },
  ended: {
    icon: Icons.viewResult,
    text: "View Results",
    href: "/exam/:id/result",
    className: "bg-green-600 hover:bg-green-700 text-white",
  },
} as const;

const StudentActions = ({ status }: StudentActionsInterface) => {
  const StatusIcon = StatusConfig[status].icon;
  return (
    <Link to={StatusConfig[status].href}>
      <Button
        className={`cursor-pointer font-semibold tracking-tight ${StatusConfig[status].className}`}
      >
        <StatusIcon className="h-5 w-5" />
        {StatusConfig[status].text}
      </Button>
    </Link>
  );
};

export default StudentActions;
