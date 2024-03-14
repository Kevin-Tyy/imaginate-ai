import { useState, useEffect } from "react";

export function useSidebarExpandedState() {
  // Retrieve the initial state from local storage if available, or default to false
  const [isExpanded, setIsExpanded] = useState(() => {
    const storedValue = localStorage.getItem("sidebarExpanded");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(isExpanded));
  }, [isExpanded]);

  const expand = () => {
    setIsExpanded(true);
  };

  const collapse = () => {
    setIsExpanded(false);
  };

  const toggle = () => {
    setIsExpanded((prev: boolean) => !prev);
  };

  return {
    isExpanded,
    expand,
    collapse,
    toggle,
  };
}
