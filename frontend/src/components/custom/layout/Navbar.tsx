import { Button } from "@/components/ui/button";
import Brand from "@/components/custom/layout/Brand";
import Signup from "@/components/custom/authComponents/Signup";
import Login from "@/components/custom/authComponents/Login";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-b bg-white">
      <div className="flex justify-between px-4 md:px-8 py-4 md:py-6">
        <Brand />
        <div className="flex gap-3 [&>button]:cursor-pointer">
          <Login
            button={
              <Button variant="ghost" size="lg">
                Login
              </Button>
            }
          />
          <Signup
            button={
              <Button size="lg" variant="blue">
                Sign Up
              </Button>
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
