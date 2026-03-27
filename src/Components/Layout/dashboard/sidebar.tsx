'use client';

import { Button } from '@/Components/ui/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function SideBar() {
  const [width, setWidth] = useState(250);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;

      const newWidth = Math.max(250, Math.min(400, e.clientX));
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      document.body.style.cursor = 'default';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const startResizing = () => {
    isResizing.current = true;
    document.body.style.cursor = 'col-resize';
  };

  return (
    <aside
      style={{ width }}
      className="relative bg-surface h-screen flex flex-col items-left  px-4"
    >
      <div
        onMouseDown={startResizing}
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-secondary"
      />
      <SideBarHeader />
      <Separator />
    </aside>
  );
}

function Separator() {
  return <div className="w-full h-[0.1px] bg-foreground/20" />;
}

function SideBarHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center gap-3 relative my-4">
      <img
        src="https://i.pravatar.cc/300"
        className="w-10 h-10 rounded-full border-2 border-primary"
      />
      <h3 className="text-sm text-primary font-bold">Omar Ghazi</h3>
      {open ? (
        <ChevronUp className="text-foreground" onClick={() => setOpen(false)} />
      ) : (
        <ChevronDown
          className="text-foreground"
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <ul className="absolute top-full bg-primary w-full p-4 mt-2 rounded-xl shadow-xl shadow-background">
          <Button type="logout" label="log out" />
        </ul>
      )}
    </div>
  );
}

function SideBarMenu() {
  return <div></div>;
}
