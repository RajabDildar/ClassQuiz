import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Icons } from "../icons/icons";

const LogoutBtn = () => {
  const Logout = Icons.logout;
  return (
    <Link to={"/logout"}>
      <Button size="lg" variant="ghost">
        <Logout className="hidden sm:block" /> Logout
      </Button>
    </Link>
  );
};

export default LogoutBtn;
