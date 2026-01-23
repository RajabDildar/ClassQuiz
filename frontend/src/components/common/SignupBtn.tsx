import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const SignupBtn = () => {
  return (
    <Link to={"/auth/signup"}>
      <Button size="lg" variant="blue">
        Sign Up
      </Button>
    </Link>
  );
};

export default SignupBtn;
