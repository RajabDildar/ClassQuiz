import Loader from "@/components/common/Loader";
import StudentDashboard from "@/components/dashboards/StudentDashboard";
import TeacherDashboard from "@/components/dashboards/TeacherDashboard";
import EmptyState from "@/components/layout/EmptyState";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { data: user, isFetching, isError } = useAuth();
  if (isFetching) {
    return <Loader />;
  }

  if (isError || !user) {
    return (
      <div className="min-h-dvh flex justify-center items-center p-3 bg-gray-50">
        <EmptyState
          title="You need to login to access dashboard."
          desc="Login to Examino to access your dashboard."
          isActionRequired={true}
        />
      </div>
    );
  }

  if (user.role === "teacher") return <TeacherDashboard />;
  if (user.role === "student") return <StudentDashboard />;

  return null;
};

export default Dashboard;
