import { SideBar } from "@/Components/Layout/dashboard/sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      <SideBar />
      <main className="overflow-hidden">{children}</main>
    </div>
  );
}
