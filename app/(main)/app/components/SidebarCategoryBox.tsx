import { TooltipComponent } from "@/components/TooltipComponent";
import { useSidebarExpandedState as useExpandedState } from "@/hooks/useSidebarExpandedState";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function SidebarCategoryBox({ category, isExpanded }: { category: SidebarCategoryType; isExpanded: boolean }) {
  const { categoryName, alternateCategoryName, links } = category;
  const pathname = usePathname();

  if (!categoryName)
    return (
      <div className={clsx("bg-white rounded-[20px]", !isExpanded && "hover:bg-[#78748615] !rounded-xl mx-1.5 ")}>
        <div>
          {links.map(({ alternateIcon, icon, link, title }, index) => (
            <TooltipComponent tooltipContent={title} key={index}>
              <Link href={link}>
                <div
                  className={clsx(
                    "flex gap-x-3 px-7 py-[18px] rounded-[20px] cursor-pointer transition-all duration-500",
                    !isExpanded && "!px-[18px] rounded-xl",
                    pathname === link && "bg-gradient-to-r from-primary-purple to-primary-blue text-white"
                  )}>
                  <Image src={pathname === link ? alternateIcon : icon} alt={title} width={24} height={24} className="min-w-[24px]" />
                  <h1 className={clsx("whitespace-nowrap transition-all duration-500", !isExpanded && "!opacity-0")}>{title}</h1>
                </div>
              </Link>
            </TooltipComponent>
          ))}
        </div>
      </div>
    );
  return (
    <div>
      <div className={clsx("bg-white px-2 pt-6 pb-3 border-b-[2px] border-b-transparent rounded-[20px] transition-all duration-500")}>
        {categoryName && (
          <div className="relative">
            <h2
              className={clsx(
                "font-semibold px-3 whitespace-nowrap uppercase transition-all duration-500 absolute text-sm opacity-0",
                isExpanded && "!opacity-100"
              )}>
              {categoryName}
            </h2>
            <h2
              className={clsx(
                "font-semibold px-0 whitespace-nowrap uppercase transition-all duration-500 absolute text-sm opacity-100",
                isExpanded && "!opacity-0"
              )}>
              {alternateCategoryName}
            </h2>
          </div>
        )}
        <div className={clsx(links.length > 1 && "mt-8 flex flex-col space-y-1")}>
          {links.map(({ alternateIcon, icon, link, title }, index) => (
            <TooltipComponent tooltipContent={title} key={index}>
              <Link href={link}>
                <div
                  className={clsx(
                    "flex gap-x-4 p-4 hover:bg-[#78748615] rounded-xl cursor-pointer transition duration-300",
                    pathname === link && "bg-gradient-to-r from-primary-purple to-primary-blue text-white"
                  )}>
                  <Image src={pathname === link ? alternateIcon : icon} alt={title} width={24} height={24} className="min-w-[24px]" />
                  <h1 className={clsx("whitespace-nowrap transition-all duration-500", !isExpanded && "!opacity-0")}>{title}</h1>
                </div>
              </Link>
            </TooltipComponent>
          ))}
        </div>
      </div>
      <div
        className={clsx("w-full h-[2px] max-h-[2px] !bg-[#dbdbdbd0] opacity-0 transition duration-500 max-w-[40px] mx-auto", !isExpanded && "!opacity-100")}
      />
    </div>
  );
}
