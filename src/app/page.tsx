"use client";
import moment from "moment";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { useMemo } from "react";

export default function HomePage() {
  const router = useRouter();

  const companyExperience = useMemo(() => {
    return moment().diff("2019-05-01", "years");
  }, []);

  const workExperience = useMemo(() => {
    return moment().diff("2014-01-01", "years");
  }, []);

  return (
    <div className="flex flex-col items-start sm:items-center sm:flex-row w-full space-y-8 sm:space-y-0 space-x-0 sm:space-x-8 fade-in">
      <div className="h-64 w-full sm:h-full sm:w-1/4 overflow-hidden rounded-3xl shrink-0">
        <img
          src="/pp.jpg"
          alt="Profile picture"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col space-y-8">
        <h1 className="text-6xl sm:text-8xl font-semibold">Hello.</h1>
        <h2 className="text-3xl sm:text-4xl">
          I&apos;m <span className="font-semibold">Nenad Kaevik</span>
        </h2>
        <p className="font-light leading-7 text-gray-600 dark:text-gray-400">
          I am an experienced web developer with over {workExperience} years of
          expertise, specializing in crafting visually stunning and highly
          functional digital solutions. For the past {companyExperience} years,
          I&apos;ve been contributing my skills to Endava, where I combine
          technical proficiency with a strong focus on aesthetics and meticulous
          attention to detail. My background also includes UI/UX design and logo
          design, where I bring brands to life through compelling visuals.
          Outside of coding, I channel my creativity through photography,
          capturing moments that tell stories and reflect my keen eye for detail
          and artistry.
        </p>
        <div className="space-x-4">
          <Button
            rounded
            outlined
            severity="secondary"
            label="Get in touch"
            icon="pi pi-envelope"
            onClick={() => router.push("mailto:nenadkaevik@gmail.com")}
          />
          <Button
            rounded
            outlined
            label="Grab my resume"
            icon="pi pi-file"
            onClick={() =>
              router.push(
                "https://docs.google.com/document/d/1NqePv88QWuSDe25HWW-ccBIH9vr7e8zMgJOwLm1JiEE/export?format=pdf"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
