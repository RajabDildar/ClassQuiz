import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface profileHeaderInterface {
  name: string;
  role: "teacher" | "student";
}

const ProfileHeader = ({ name, role }: profileHeaderInterface) => {
  return (
    <div className="flex gap-3 text-end">
      <div className="hidden sm:block">
        <h1 className="font-semibold text-sm">{name.toUpperCase()}</h1>
        <p className="text-neutral-400 text-sm">
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </p>
      </div>
      <Avatar className="font-semibold h-10 w-10 text-white">
        <AvatarFallback className="bg-blue-600">
          {name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfileHeader;
