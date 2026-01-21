import PurposeCard from "@/components/homePage/PurposeCard";
import SectionHeader from "@/components/sections/SectionHeader";
import { forTeachersInfo } from "../utils/forTeachersInfo";

const ForTeachers = () => {
  return (
    <div className="text-center py-3 my-6">
      <SectionHeader
        title="Built for Teachers"
        description="Save time. Conduct fair exams. Focus on teaching."
      />

      <div className="flex items-center py-12 px-6 gap-y-6 gap-x-3 md:gap-x-8 flex-wrap md:flex-nowrap">
        {forTeachersInfo.map((group, groupIndex) => (
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

export default ForTeachers;
