import { Icons } from "@/components/icons/icons";

interface ExamStatusInterface {
  status: "active" | "upcoming" | "ended";
}
const statusMap = {
  active: Icons.active,
  upcoming: Icons.upcoming,
  ended: Icons.ended,
} as const;

const colorMap = {
  active: "text-green-500 bg-green-100",
  upcoming: "text-blue-500 bg-blue-100",
  ended: "text-gray-500 bg-gray-200",
};

const ExamStatus = ({ status }: ExamStatusInterface) => {
  const StatusIcon = statusMap[status];
  return (
    <div
      className={`flex gap-1 justify-between items-center w-fit px-2 py-1 rounded-full ${colorMap[status]}`}
    >
      <div className="flex justify-center items-center">
        <StatusIcon className={"h-4"} />
      </div>
      <span className={"tracking-tight"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
};

export default ExamStatus;
