type SectionHeaderProps = {
  title: string;
  description?: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {description && (
        <p className="mt-3 text-muted-foreground">{description}</p>
      )}
    </div>
  );
};
export default SectionHeader;
