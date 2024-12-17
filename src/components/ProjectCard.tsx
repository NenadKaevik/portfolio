import React from "react";

export const ProjectCard = () => {
  return (
    <div className="w-full h-64 p-4 overflow-hidden relative rounded-3xl bg-gray-700 cursor-pointer transition-all outline outline-transparent hover:outline-gray-400 dark:hover:outline-gray-800 hover:outline-1 hover:outline-offset-4">
      <div className="absolute inset-0">
        <img
          className="object-cover h-full w-full object-center"
          src="https://images.unsplash.com/photo-1732635150320-df39f293481b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="house"
        />
      </div>
      <div className="absolute flex flex-col bottom-0 inset-x-0 bg-gradient-to-t from-gray-950 to-transparent justify-center p-4">
        <h1 className="font-bold text-xl text-white">Project name</h1>
        <p className="font-light text-gray-400">Project description</p>
      </div>
    </div>
  );
};
