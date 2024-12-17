import { CareerCard } from "@/components/CareerCard";
import { PageTitle } from "@/components/PageTitle";
import { educationArr, jobsArr, skillsArr } from "@/content/career";
import { Chip } from "primereact/chip";
import { FiBook, FiBriefcase, FiZap } from "react-icons/fi";

export default function Career() {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <PageTitle
          title="Career"
          description="Learn more about my career path and expertise"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <FiBriefcase />
            <p>Experience</p>
          </div>
          {jobsArr.map((career, i) => (
            <CareerCard key={i} entity={career} />
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <FiBook />
            <p>Education</p>
          </div>
          {educationArr.map((education, i) => (
            <CareerCard key={i} entity={education} />
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <FiZap />
            <p>Skills</p>
          </div>
          <div className="flex gap-4 w-full flex-wrap">
            {skillsArr.map((skill, i) => (
              <Chip key={i} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
