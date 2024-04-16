import { useEffect, useState } from "react";
//detecting a scroll to implement a specific functionality
export function useDetectScroll(topOffset = 50) {
  const [isReached, setIsReached] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= topOffset) {
        setIsReached(true);
      } else {
        setIsReached(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [topOffset]);

  return { isReached };
}
