import FeatureRow from "@/components/custom/HomePage/FeatureRow";
import { Icons } from "@/components/icons/icons";
import SectionHeader from "@/components/custom/layout/SectionHeader";

const WhyExamino = () => {
  const ShieldCheck = Icons.ShieldCheck;
  const BarChart = Icons.BarChart;
  const Clock9 = Icons.Clock9;
  return (
    <section className="my-6 py-3 px-6 space-y-16">
      <SectionHeader
        title="Why choose Examino"
        description="Built to support real exams with clarity, fairness, and ease of use."
      />

      <div className="space-y-20">
        <FeatureRow
          title="Secure exam environment"
          description="Students can only attempt exams during the allowed time window. Answers stay protected on the server."
          icon={<ShieldCheck />}
        />

        <FeatureRow
          title="Time-bound exams that feel real"
          description="Automatic timers and backend checks make every exam controlled and fair."
          icon={<Clock9 />}
          reverse
        />

        <FeatureRow
          title="Instant results for teachers"
          description="Automatic evaluation and scoreboards save hours of manual checking."
          icon={<BarChart />}
        />
      </div>
    </section>
  );
};

export default WhyExamino;
