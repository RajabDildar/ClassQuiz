import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = () => {
  const { data: user, isLoading, isError } = useAuth();

  if (isLoading) return null;
  if (isError || !user) return <Navigate to="/auth/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
