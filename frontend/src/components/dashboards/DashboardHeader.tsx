interface DashboardHeaderInterface {
  role: "teacher" | "student";
  desc: string;
}
const DashboardHeader = ({ role, desc }: DashboardHeaderInterface) => {
  return (
    <div className="py-4 md:py-6 p-3">
      <h3 className="text-3xl font-bold">
        {" "}
        {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard{" "}
      </h3>
      <p className="text-neutral-600">{desc} </p>
    </div>
  );
};

export default DashboardHeader;
