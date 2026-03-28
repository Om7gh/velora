"use client"
import { useEffect, useState } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobileScreen = 700

  function checkMobile() {
    if (window.innerWidth <= mobileScreen)
      setIsMobile(true)
    else setIsMobile(false)
  }
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
