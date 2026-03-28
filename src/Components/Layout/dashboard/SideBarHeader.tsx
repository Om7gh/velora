"use client"
import { Button } from "@/Components/ui/Button";
import { ChevronDown, ChevronUp, LogOut } from "lucide-react";
import { useState } from "react";

export function SideBarHeader({isMobile} : {isMobile: boolean}) {
  const [open, setOpen] = useState(false);
  function handleMenu() {
    if (!isMobile) return ;
    setOpen(!open)
  }
  return (
    <div className="flex items-center gap-3 relative my-4">
      <img
        src="https://i.pravatar.cc/300"
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary`}
        onClick={handleMenu}
      />
      {!isMobile && <h3 className="text-sm text-primary font-bold">Omar Ghazi</h3>}
        {!isMobile && (open ? (
          <ChevronUp className="text-foreground" onClick={() => setOpen(false)} />
        ) : (
          <ChevronDown
          className="text-foreground"
          onClick={() => setOpen(true)}
          />
        ))}

      {open && (
        <ul className="absolute top-full bg-primary w-full p-2 mt-1 md:p-4 md:mt-2 rounded-xl shadow-xl shadow-background">
          {
           !isMobile ?
            <Button type="logout" label="log out" /> :
           <LogOut />
          }
        </ul>
      )}
    </div>
  );
}

