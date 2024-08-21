import { useEffect, useState } from "react";

export function useGetWindowWidth() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const w = window;
    const scrollBar = w.innerWidth - document.documentElement.clientHeight;
    setHeight(w.innerHeight - scrollBar);

    const resizeHandler = () => {
      setHeight(w.innerHeight - scrollBar);
    };
    w.addEventListener("resize", resizeHandler);
    return () => {
      w.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { height };
}
