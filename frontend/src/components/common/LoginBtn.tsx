import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const LoginBtn = () => {
  return (
    <Link to={"/login"}>
      {" "}
      <Button variant="ghost" size="lg">
        Login
      </Button>
    </Link>
  );
};
export default LoginBtn;
