import { Icons } from "@/components/icons/icons";
interface BrandProps {
  desc?: string;
  descClr?: string;
}

const Brand = ({ desc, descClr }: BrandProps) => {
  const Icon = Icons.logo;

  return (
    <div className="flex items-center gap-3">
      <div className="rounded-md bg-blue-600 p-1 text-white">
        <Icon size={28} />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Examino</h1>
        <p className={descClr}>{desc}</p>
      </div>
    </div>
  );
};

export default Brand;
