type FeatureRowProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
};

const FeatureRow = ({
  title,
  description,
  icon,
  reverse = false,
}: FeatureRowProps) => {
  return (
    <div
      className={`flex flex-col text-center md:text-start md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
        {icon}
      </div>

      <div className="max-w-xl">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
export default FeatureRow;
