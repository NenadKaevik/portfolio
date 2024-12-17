import { PageTitle } from "@/components/PageTitle";
import { Photo } from "@/components/Photo";
import { photos } from "@/content/photos";
import { Dropdown } from "primereact/dropdown";

export default function Photography() {
  const categories = [
    {
      value: "street",
      label: "Street",
    },
    {
      value: "nature",
      label: "Nature",
    },
    {
      value: "auto",
      label: "Automotive",
    },
    {
      value: "portraits",
      label: "Portraits",
    },
    {
      value: "astro",
      label: "Astro",
    },
    {
      value: "travel",
      label: "Travel",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <PageTitle
          title="Photography"
          description="List of all of my professional photography I've taken throughout the
            years."
        />
        <Dropdown placeholder="Select category" options={categories} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
        {photos.map((photo, i) => (
          <Photo key={i} src={photo.src} />
        ))}
      </div>
    </div>
  );
}
