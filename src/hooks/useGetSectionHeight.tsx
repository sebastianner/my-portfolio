import { useEffect, useState } from "react";

export function useGetSectionHeight(elementId: string) {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const element = document.getElementById(elementId);
    setHeight(element?.offsetHeight);

    const resizeHandler = () => {
      setHeight(element?.offsetHeight);
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [elementId]);

  return { height };
}
