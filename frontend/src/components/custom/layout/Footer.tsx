import { Button } from "@/components/ui/button";
import Brand from "@/components/custom/layout/Brand";

const Footer = () => {
  return (
    <div className="p-3 md:p-12 bg-black text-white">
      <div className="border-b-2 border-neutral-800 flex justify-between pb-6 gap-y-3 flex-wrap">
        <Brand desc="Fair and secure exams" />
        <div className="links mx-2 flex [&>button]:cursor-pointer">
          <Button variant={"ghost"}>Login</Button>
          <Button variant={"ghost"}>Sign Up</Button>
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
