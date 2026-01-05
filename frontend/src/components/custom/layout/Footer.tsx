import { Button } from "@/components/ui/button";
import Brand from "@/components/custom/layout/Brand";
import Signup from "@/components/custom/authComponents/Signup";
import Login from "@/components/custom/authComponents/Login";

const Footer = () => {
  return (
    <div className="p-3 md:p-12 bg-black text-white">
      <div className="border-b-2 border-neutral-800 flex justify-between pb-6 gap-y-3 flex-wrap">
        <Brand
          desc="Fair and secure exams"
          // titleClr="text-white"
          descClr="text-neutral-400"
        />
        <div className="links mx-2 flex [&>button]:cursor-pointer">
          <Login button={<Button variant={"ghost"}>Login</Button>} />
          <Signup button={<Button variant={"ghost"}>Sign Up</Button>} />
          <Button variant={"ghost"}>About</Button>
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
