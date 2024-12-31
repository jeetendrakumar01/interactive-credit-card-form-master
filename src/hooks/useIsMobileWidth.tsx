import { useEffect, useState } from "react";

const mobileBreakpoint = 480;

const useIsMobileWidth = () => {
  const [isMobileWidth, setIsMobileWidth] = useState<boolean>(
    window.innerWidth <= mobileBreakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsMobileWidth(window.innerWidth <= mobileBreakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileWidth;
};

export default useIsMobileWidth;
