import LogoutBtn from "@/components/common/LogoutBtn";
import ProfileHeader from "@/components/common/ProfileHeader";
import AllExamsDetails from "@/components/dashboards/examsDetails/AllExamsDetails";
import CreateExamBtn from "@/components/dashboards/CreateExamBtn";
import DashboardHeader from "@/components/dashboards/DashboardHeader";
import TeacherCards from "@/components/dashboards/TeacherCards";
import Navbar from "@/components/layout/Navbar";
import examDetails from "@/components/utils/examDetails";
import { useUserData } from "@/contexts/UserContext";

const TeacherDashboard = () => {
  const User = useUserData();
  return (
    <div className="pt-16 p-6 bg-gray-50 min-h-dvh">
      <Navbar
        actionOne={<ProfileHeader name={User?.name} role="teacher" />}
        actionTwo={<LogoutBtn />}
        paddingY="py-2"
      />
      <DashboardHeader
        role="teacher"
        desc="Manage your exams and track student performance"
      />
      <TeacherCards />
      <div className="p-3">
        <CreateExamBtn />
      </div>
      <AllExamsDetails examData={examDetails} role="teacher" />
    </div>
  );
};

export default TeacherDashboard;
