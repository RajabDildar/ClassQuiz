import { Button } from "@/components/ui/button";
import Brand from "@/components/custom/HomePage/Brand";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-b bg-white">
      <div className="flex justify-between px-8 py-6">
        <Brand />
        <div className="flex gap-3 [&>button]:cursor-pointer">
          <Button variant="ghost" size="lg">
            Login
          </Button>
          <Button size="lg" variant="blue">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
