import LogoutBtn from "@/components/common/LogoutBtn";
import ProfileHeader from "@/components/common/ProfileHeader";
import DashboardHeader from "@/components/dashboards/DashboardHeader";
import AllExamsDetails from "@/components/dashboards/examsDetails/AllExamsDetails";
import StudentCards from "@/components/dashboards/StudentCards";
import Navbar from "@/components/layout/Navbar";
import examDetails from "@/components/utils/examDetails";

const StudentDashboard = () => {
  return (
    <div className="pt-16 p-6 bg-gray-50 min-h-dvh">
      <Navbar
        actionOne={<ProfileHeader name="Rajab Ali" role="teacher" />}
        actionTwo={<LogoutBtn />}
        paddingY="py-2"
      />
      <DashboardHeader role="student" desc="View your exams and results" />
      <StudentCards />
      <AllExamsDetails examData={examDetails} role="student" />
    </div>
  );
};

export default StudentDashboard;
