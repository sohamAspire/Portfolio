import { useState, useEffect } from "react";

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const getScreenType = (width : number) => {
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return "xs";
};

export const useBreakpoint = () => {
  const [screenType, setScreenType] = useState(() => getScreenType(window.innerWidth));

  useEffect(() => {
    if(!window) return
    const handleResize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenType };
};
