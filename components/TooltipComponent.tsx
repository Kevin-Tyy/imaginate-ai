import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";
interface Props {
  tooltipContent: string | React.ReactNode;
  children: React.ReactNode;
}
export function TooltipComponent({ tooltipContent, children }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className="cursor-pointer">{children}</TooltipTrigger>
        <TooltipContent>
          <div className="text-primary-black">{tooltipContent}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
