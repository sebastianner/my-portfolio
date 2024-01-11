import { useEffect, useState } from "react";

export function useGetWindowWidth() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const w = window;
    setWidth(w.innerWidth);

    const resizeHandler = () => {
      setWidth(w.innerWidth);
    };
    w.addEventListener("resize", resizeHandler);
    return () => {
      w.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { width };
}
