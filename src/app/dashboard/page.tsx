import { Plus } from "lucide-react";

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-2 h-full relative">
      <div className=" flex flex-col items-center justify-center gap-10 h-full">
        <div className="space-y-1">
          <h2 className="text-4xl ">Hi Omar Welcome</h2>
          <p className="text-3xl">
            to{" "}
            <span className="bg-linear-120 from-primary via-secondary to-accent bg-clip-text text-transparent">
              Velora
            </span>{" "}
          </p>
        </div>

        <div>
          <h3 className="text-sm text-center mt-5 mb-2 text-foreground/40 font-light ">
            Create Your First Portfolio
          </h3>
          <div className="w-72 h-72 rounded-xl border-primary/50 border-4 border-dotted grid place-items-center group hover:border-secondary cursor-pointer bg-surface/50">
            <Plus className="size-10 text-primary/50 group-hover:text-secondary" />
          </div>
        </div>
      </div>

      <div className="h-full w-[0.1px] bg-primary/20 absolute left-1/2 -translate-x-1/2" />
      <div className="">progress</div>
    </div>
  );
}
