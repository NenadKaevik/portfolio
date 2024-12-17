import React from "react";

export const PageTitle = ({ title, description }: any) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="font-light text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};
