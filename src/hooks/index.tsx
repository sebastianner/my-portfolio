import { CANVAS_MEDIA_QUERIES } from "@/constants";
import { useState, useEffect } from "react";

export function useRezise() {
  const [isMedium, setMedium] = useState<boolean>(false);
  const [isSmall, setSmall] = useState<boolean>(false);
  const [isExtraSmall, setExtraSmall] = useState<boolean>(false);

  useEffect(() => {
    const w = window;

    const mediumScreen = window.matchMedia(
      `(max-width:${CANVAS_MEDIA_QUERIES.medium}px)`
    );

    const smallScreen = window.matchMedia(
      `(max-width:${CANVAS_MEDIA_QUERIES.small}px)`
    );

    const extraSmallScreen = window.matchMedia(
      `(max-width:${CANVAS_MEDIA_QUERIES.extraSmall}px)`
    );

    setMedium(mediumScreen.matches);
    setSmall(smallScreen.matches);
    setExtraSmall(extraSmallScreen.matches);

    const handleMediaQueryChange = (event: any) => {
      if (event.target.outerWidth > CANVAS_MEDIA_QUERIES.medium) {
        setMedium(false);
        setSmall(false);
        setExtraSmall(false);
      }
      if (event.target.outerWidth <= CANVAS_MEDIA_QUERIES.medium) {
        setSmall(false);
        setExtraSmall(false);
        setMedium(true);
      }
      if (event.target.outerWidth <= CANVAS_MEDIA_QUERIES.small) {
        setMedium(false);
        setExtraSmall(false);
        setSmall(true);
      }
      if (event.target.outerWidth <= CANVAS_MEDIA_QUERIES.extraSmall) {
        setMedium(false);
        setSmall(false);
        setExtraSmall(true);
      }
    };

    w.addEventListener("resize", handleMediaQueryChange);

    return () => {
      w.removeEventListener("resize", handleMediaQueryChange);
    };
  }, []);

  return { isMedium, isSmall, isExtraSmall };
}
