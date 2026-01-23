import { Button } from "@/components/ui/button";
import Brand from "@/components/layout/Brand";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-3 md:p-12 bg-black text-white">
      <div className="border-b-2 border-neutral-800 flex justify-between pb-6 gap-y-3 flex-wrap">
        <Brand desc="Fair and secure exams" />
        <div className="links mx-2 flex **:cursor-pointer">
          <Link to={"/auth/login"}>
            <Button variant={"ghost"}>Login</Button>
          </Link>
          <Link to={"/auth/signup"}>
            <Button variant={"ghost"}>Sign Up</Button>
          </Link>
        </div>
      </div>
      <p className="my-6 text-center text-neutral-400">
        Built for fairness, designed for trust. Examino ensures secure and
        time-controlled exams.
      </p>
    </div>
  );
};

export default Footer;
