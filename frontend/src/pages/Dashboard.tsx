import StudentDashboard from "@/components/dashboards/StudentDashboard";
import TeacherDashboard from "@/components/dashboards/TeacherDashboard";
import EmptyState from "@/components/layout/EmptyState";
import { useUserData } from "@/contexts/UserContext";

const Dashboard = () => {
  const User = useUserData();
  if (User?.role === "teacher") return <TeacherDashboard />;
  else if (User?.role === "student") {
    return <StudentDashboard />;
  } else {
    return (
      <div className="min-h-dvh flex justify-center items-center p-3 bg-gray-50">
        <EmptyState
          title="You need to login to access dashboard."
          desc="Login to Examino to access your dashboard. Don't worry, your progress is safe at Examino."
        />
      </div>
    );
  }
};

export default Dashboard;
