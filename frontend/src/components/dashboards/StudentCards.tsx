import DashboardCard from "./DashboardCard";
import { Icons } from "../icons/icons";

const StudentCards = () => {
  const NotebookPen = Icons.NotebookPen;
  const Completed = Icons.ended;
  const Calender = Icons.upcoming;
  return (
    <div className="flex gap-3 justify-between p-3 flex-wrap">
      <DashboardCard title="Total Exams" count={12} icon={<NotebookPen />} />
      <DashboardCard title="Upcoming Exams" count={3} icon={<Calender />} />
      <DashboardCard title="Completed Exams" count={248} icon={<Completed />} />
    </div>
  );
};

export default StudentCards;
