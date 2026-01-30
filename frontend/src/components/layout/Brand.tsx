import { Icons } from "@/components/icons/icons";
import { Link } from "react-router-dom";
interface BrandProps {
  desc?: string;
}

const Brand = ({ desc }: BrandProps) => {
  const Icon = Icons.logo;

  return (
    <div className="flex items-center gap-3">
      <div className="rounded-md bg-blue-600 p-1 text-white">
        <Link to={"/"}>
          <Icon size={28} />
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Examino</h1>
        <p className="text-neutral-400">{desc}</p>
      </div>
    </div>
  );
};

export default Brand;
