import DashboardHeader from "@/components/dashboards/DashboardHeader";
import AllExamsDetails from "@/components/dashboards/examsDetails/AllExamsDetails";
import StudentCards from "@/components/dashboards/StudentCards";

const StudentDashboard = () => {
  return (
    <div className="pt-16 p-6 bg-gray-50 min-h-dvh">
      <DashboardHeader role="student" desc="View your exams and results" />
      <StudentCards />
      <AllExamsDetails role="student" />
    </div>
  );
};

export default StudentDashboard;
