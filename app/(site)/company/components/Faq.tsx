"use client";

import React, { useState } from "react";
import { faqData } from "./constants/data";
import Card from "./Card";

export default function Faq() {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpen(index);
    if (open === index) {
      setOpen(null);
    }
    setExpanded(true);
  };
  return (
    <div className="flex max-w-[1428px] mx-auto gap-8 mt-10">
      <div className="w-full flex flex-col gap-8">
        {faqData.slice(0, 3).map(({ answer, question, id }) => {
          return <Card description={answer} title={question} expanded={open === id && expanded} toggle={toggle} key={id} index={id} />;
        })}
      </div>
      <div className="w-full flex flex-col gap-8">
        {faqData.slice(3).map(({ answer, question, id }) => {
          return <Card description={answer} title={question} expanded={open === id && expanded} toggle={toggle} key={id} index={id} />;
        })}
      </div>
    </div>
  );
}
