import Brand from "@/components/layout/Brand";
import ProfileHeader from "../common/ProfileHeader";
import LogoutBtn from "../common/LogoutBtn";
import LoginBtn from "../common/LoginBtn";
import SignupBtn from "../common/SignupBtn";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { data: user, isError, isPending } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-b bg-white">
      <div className={`flex justify-between px-4 md:px-8 py-4`}>
        <Brand />
        {isPending ? null : isError || !user ? (
          <div className="flex gap-3 **:cursor-pointer">
            {" "}
            <LoginBtn /> <SignupBtn />{" "}
          </div>
        ) : (
          <div className="flex gap-3 **:cursor-pointer">
            <ProfileHeader name={user?.name} role={user.role} /> <LogoutBtn />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
