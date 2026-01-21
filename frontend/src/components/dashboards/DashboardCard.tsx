interface DashboardCardInterface {
  title: string;
  count: number;
  icon: React.ReactNode;
}
const DashboardCard = ({ title, count, icon }: DashboardCardInterface) => {
  return (
    <div className="flex w-full max-w-sm justify-between border p-6 rounded-2xl bg-white">
      <div>
        <p className="text-neutral-600">{title} </p>
        <p className="text-2xl font-bold">{count} </p>
      </div>
      <div
        className={
          "flex justify-center h-12 w-12 rounded-full items-center p-3 bg-blue-600 text-white"
        }
      >
        {icon}
      </div>
    </div>
  );
};

export default DashboardCard;
