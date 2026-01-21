import DashboardCard from "./DashboardCard";
import { Icons } from "../icons/icons";

const TeacherCards = () => {
  const NotebookPen = Icons.NotebookPen;
  const Students = Icons.students;
  const Calender = Icons.upcoming;
  return (
    <div className="flex gap-3 justify-between p-3 flex-wrap">
      <DashboardCard title="Total Exams" count={12} icon={<NotebookPen />} />
      <DashboardCard title="Student Attempts" count={248} icon={<Students />} />
      <DashboardCard title="Upcoming Exams" count={3} icon={<Calender />} />
    </div>
  );
};

export default TeacherCards;
