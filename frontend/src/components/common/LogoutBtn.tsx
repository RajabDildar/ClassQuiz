// import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Icons } from "../icons/icons";
import { useNavigate } from "react-router-dom";
import { useLogout } from "@/hooks/useLogout";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const Logout = Icons.logout;
  const useLogoutUser = useLogout();

  const logoutUser = async () => {
    useLogoutUser.mutate(undefined, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <Button onClick={logoutUser} size="lg" variant="ghost">
      <Logout className="hidden sm:block" /> Logout
    </Button>
  );
};

export default LogoutBtn;
