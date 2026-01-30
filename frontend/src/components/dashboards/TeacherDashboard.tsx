import AllExamsDetails from "@/components/dashboards/examsDetails/AllExamsDetails";
import CreateExamBtn from "@/components/dashboards/CreateExamBtn";
import DashboardHeader from "@/components/dashboards/DashboardHeader";
import TeacherCards from "@/components/dashboards/TeacherCards";

const TeacherDashboard = () => {
  return (
    <div className="pt-16 p-6 bg-gray-50 min-h-dvh">
      <DashboardHeader
        role="teacher"
        desc="Manage your exams and track student performance"
      />
      <TeacherCards />
      <div className="p-3">
        <CreateExamBtn />
      </div>
      <AllExamsDetails role="teacher" />
    </div>
  );
};

export default TeacherDashboard;
