import { useEffect, useRef, useState } from "react";
import useMobile from "./useMobile";

export default function useResizeSidebar() {
  const [width, setWidth] = useState(250);
  const isMobile = useMobile();
  const isResizing = useRef(false);
  useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!isResizing.current) return;

        const newWidth = Math.max(250, Math.min(400, e.clientX));
        setWidth(newWidth);
      };

      const handleMouseUp = () => {
        isResizing.current = false;
        document.body.style.cursor = "default";
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, []);

    const startResizing = () => {
      isResizing.current = true;
      document.body.style.cursor = "col-resize";
    };

    if (isMobile) return {startResizing, width : "auto"}
    return {startResizing, width}
}
