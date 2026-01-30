import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const RoleProtectedRoute = ({ role }: { role: "teacher" | "student" }) => {
  const { data: user, isLoading } = useAuth();

  if (isLoading) return null;
  if (!user || user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default RoleProtectedRoute;
