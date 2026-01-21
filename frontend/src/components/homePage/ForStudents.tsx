import PurposeCard from "@/components/homePage/PurposeCard";
import SectionHeader from "@/components/sections/SectionHeader";
import { forStudentsInfo } from "../utils/forStudentsInfo";

const ForStudents = () => {
  return (
    <div className="text-center py-3 my-6">
      <SectionHeader
        title="Designed for Students"
        description="Clear timing. Fair evaluation. Focused experience."
      />

      <div className="flex items-center py-12 px-6 gap-y-6 gap-x-3 md:gap-x-8 flex-wrap md:flex-nowrap">
        {forStudentsInfo.map((group, groupIndex) => (
          /* This div wraps each set of objects */
          <div key={groupIndex} className="purpose-group">
            {group.map((item, itemIndex) => (
              /* Individual Card Item */
              <div key={itemIndex} className="purpose-card">
                <PurposeCard title={item.title} desc={item.desc} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForStudents;
