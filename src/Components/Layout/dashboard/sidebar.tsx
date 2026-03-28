"use client";

import SideBarMenu from "./SideBarMenu";
import Separator from "@/Components/shared/Separator";
import { SideBarHeader } from "./SideBarHeader";
import useResizeSidebar from "@/hooks/useResizeSidebar";
import useMobile from "@/hooks/useMobile";

export function SideBar() {
  const isMobile = useMobile()
 const {width, startResizing} = useResizeSidebar();
  return (
    <aside
      style={{ width }}
      className="relative bg-surface h-screen flex flex-col items-left  px-2 md:px-4"
    >
      <div
        onMouseDown={startResizing}
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-secondary"
      />
      <SideBarHeader isMobile={isMobile} />
      <Separator />
      <SideBarMenu isMobile={isMobile} />
    </aside>
  );
}
