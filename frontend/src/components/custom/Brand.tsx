import { Icons } from "@/components/icons/icons";

const Brand = () => {
  const Icon = Icons.logo;

  return (
    <div className="flex items-center gap-3 text-2xl font-bold">
      <div className="rounded-md bg-blue-600 p-1 text-white">
        <Icon size={28} />
      </div>
      <span>Examino</span>
    </div>
  );
};

export default Brand;
