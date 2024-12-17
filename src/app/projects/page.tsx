import { PageTitle } from "@/components/PageTitle";
import { ProjectCard } from "@/components/ProjectCard";
import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <PageTitle
          title="Projects"
          description="List of projects both completed and ongoing"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
