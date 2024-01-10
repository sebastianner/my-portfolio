import { useEffect, useState } from "react";

export function useGetSectionHeight(elementId: string) {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const element = document.getElementById(elementId);
    setHeight(element?.offsetHeight);
  }, [elementId]);

  return { height };
}
