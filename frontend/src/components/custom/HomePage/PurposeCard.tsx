import { Icons } from "@/components/icons/icons";

interface PurposeCardProps {
  Icon?: React.ReactNode;
  title: string;
  desc: string;
}

const CheckMark = () => {
  const Check = Icons.Check;
  return <Check />;
};

const PurposeCard = ({
  Icon = <CheckMark />,
  title,
  desc,
}: PurposeCardProps) => {
  return (
    <div className="flex gap-x-3 text-start py-3">
      <div className="bg-blue-600 text-white rounded-full h-6 w-6 my-2">
        {Icon}
      </div>
      <div>
        <h3 className="text-2xl font-medium">{title} </h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default PurposeCard;
