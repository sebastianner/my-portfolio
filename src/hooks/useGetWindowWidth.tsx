import { useEffect, useState } from "react";

export function useGetWindowWidth() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const w = window;
    const scrollBar = w.innerWidth - document.documentElement.clientWidth;
    setWidth(w.innerWidth - scrollBar);

    const resizeHandler = () => {
      setWidth(w.innerWidth - scrollBar);
    };
    w.addEventListener("resize", resizeHandler);
    return () => {
      w.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { width };
}
