import { Image } from "primereact/image";
import React from "react";

export const Photo = ({ src, name }: any) => {
  return (
    <Image
      className="rounded-3xl overflow-hidden"
      src={src}
      alt={name}
      preview
    />
  );
};
