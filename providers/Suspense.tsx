"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { InfinitySpin } from "react-loader-spinner";
export default function Suspense({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <InfinitySpin width="200" color="#5A34FF" />
      </div>
    );
  return <Fragment>{children}</Fragment>;
}
