import Brand from "@/components/layout/Brand";

interface NavbarInterface {
  actionOne: React.ReactNode;
  actionTwo: React.ReactNode;
  paddingY?: string;
}

const Navbar = ({
  actionOne,
  actionTwo,
  paddingY = "py-4 md:py-6",
}: NavbarInterface) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-b bg-white">
      <div className={`flex justify-between px-4 md:px-8 ${paddingY}`}>
        <Brand />
        <div className="flex gap-3 **:cursor-pointer">
          {actionOne}
          {actionTwo}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
