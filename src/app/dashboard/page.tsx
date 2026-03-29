"use client";

import useStore from "@/store/veloraStore";
import { BadgeCheck, ChevronsDown, Plus } from "lucide-react";

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-2 h-full relative">
      <GetStartedPage />
      <div className="h-full w-[0.1px] bg-primary/20 absolute left-1/2 -translate-x-1/2" />
      <ProgressSection />
    </div>
  );
}

const SectionData = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
];

function ProgressSection() {
  const { progress, setProgress } = useStore(); // max is 7
  const percentage = (progress * 100) / 7;
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="w-full h-1 bg-gray-200 rounded-xl overflow-hidden absolute top-0">
        <div
          className="h-full bg-secondary transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="space-y-8">
        {SectionData.map((el, i) => {
          return (
            <SectionTitle title={`${el}`} isCompleted={progress > i} key={i} />
          );
        })}
      </div>
    </div>
  );
}

function SectionTitle({
  title,
  isCompleted,
}: {
  title: string;
  isCompleted: boolean;
}) {
  return (
    <div className={`flex items-center gap-4 text-2xl`}>
      <BadgeCheck
        className={`size-8 flex items-center gap-4 ${isCompleted ? "text-primary" : "text-foreground/30"}`}
      />
      <p
        className={`flex items-center gap-4 ${isCompleted ? "text-primary font-bold" : "text-foreground/30"}`}
      >
        {title}
      </p>
    </div>
  );
}

function GetStartedPage() {
  const { progress } = useStore();
  const DataProgress = Math.floor((progress * 100) / 7);
  return (
    <div className=" flex flex-col items-center justify-center gap-10 h-full">
      <div className="space-y-2 text-center">
        <h2 className="text-4xl ">
          Welcome <span className="text-primary font-bold">Omar</span>
        </h2>
        <p className="text-3xl">
          to{" "}
          <span className="bg-linear-120 from-primary via-secondary to-accent bg-clip-text text-transparent">
            Velora
          </span>{" "}
        </p>
        <h2 className="text-xl ">Let's create your first portfolio</h2>
      </div>

      <div>
        <ChevronsDown className="m-auto my-4 animate-bounce" />
        <div className=" w-44 px-6 py-3 capitalize tracking-wide  rounded-xl border-primary/50 border-4 border-dotted grid place-items-center group hover:border-secondary cursor-pointer bg-surface/50">
          Start
        </div>
      </div>
    </div>
  );
}
