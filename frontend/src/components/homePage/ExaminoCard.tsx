import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  Icon: React.ReactNode;
  title: string;
  desc: string;
}

const ExaminoCard = ({ Icon, title, desc }: CardProps) => {
  return (
    <Card className="w-64 h-64 my-6">
      <CardHeader className="place-items-center">
        <CardTitle className="rounded-full bg-blue-600 text-white h-16 w-16 flex justify-center items-center">
          {Icon}
        </CardTitle>
        <CardTitle>{title} </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ExaminoCard;
