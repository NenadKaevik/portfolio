import React from "react";
import { FiMapPin } from "react-icons/fi";

export const CareerCard = ({ entity }: any) => {
  const { entityName, entityPosition, entityLocation, entityDates } = entity;
  return (
    <div className="p-4 rounded-3xl border border-gray-300 dark:border-gray-800 flex flex-col space-y-2">
      <div className="font-bold text-xl text-blue-500">{entityName}</div>
      <div className="font-semibold">{entityPosition}</div>
      <div className="flex items-center font-light text-gray-500 dark:text-gray-400 text-sm">
        <FiMapPin className="mr-2" /> {entityLocation}
      </div>
      <div className="text-sm">{entityDates}</div>
    </div>
  );
};
