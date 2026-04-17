import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle; // Restore on unmount (optional)
    };
  }, [title]);
};

export default usePageTitle;
