"use client";

import useCurrentDateTime from "@/hooks/useCurrentDateTime";
import React, { Fragment, useEffect, useState } from "react";

export default function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const dateTime = useCurrentDateTime();
      setCurrentDateTime(dateTime);
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return isLoading ? (
    <div className="bg-primary-grey/20 h-8 w-full max-w-lg rounded-lg animate-pulse " />
  ) : (
    <div className="text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: currentDateTime }} />
  );
}
