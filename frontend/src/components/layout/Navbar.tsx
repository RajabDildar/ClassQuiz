import { Button } from "@/components/ui/button";
import Brand from "@/components/layout/Brand";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-b bg-white">
      <div className="flex justify-between px-4 md:px-8 py-4 md:py-6">
        <Brand />
        <div className="flex gap-3 **:cursor-pointer">
          <Link to={"/login"}>
            {" "}
            <Button variant="ghost" size="lg">
              Login
            </Button>
          </Link>
          <Link to={"/signup"}>
            <Button size="lg" variant="blue">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
