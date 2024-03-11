"use client";

import { useState } from "react";

export function useSidebarExpandedState() {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded(true);
  };

  const collapse = () => {
    setIsExpanded(false);
  };

  const toggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return {
    isExpanded,
    expand,
    collapse,
    toggle,
  };
}
