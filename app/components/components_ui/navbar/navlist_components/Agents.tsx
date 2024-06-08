import {
  NavigationMenuItem,
  NavigationMenuContent,
  NoChevronNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import LinkFooter from "./LinkFooter";
import Link from "next/link";
import { AgentArticles } from "./Articles";

const location = "karur";

export const AgentActivities = [
  { label: "Post Property", key: 1, href: "/" },
  { label: `Property Prices in ${location}`, key: 2, href: "/" },
  { label: `View Property Prices in ${location}`, key: 3, href: "/" },
  { label: "View Responses", key: 3, href: "/" },
];

const Agents = () => {
  return (
    <NavigationMenuItem className="px-1.5 md:px-2 lg:px-[10px]">
      <NoChevronNavigationMenuTrigger className="extra-small-regular hover-underline-animation md:small-regular lg:body-regular">
        For Agents
      </NoChevronNavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="mt-2 flex size-auto max-h-[340px] max-w-[280px] flex-col items-center justify-between gap-3 space-y-2 p-4 md:mt-3 md:max-w-[330px] lg:mt-4 lg:max-w-[370px]">
          <div className="flex w-[240px] justify-between p-2 md:w-[280px] lg:w-[320px]">
            <div className="flex-column w-auto max-w-[130px] space-y-3 p-2 md:max-w-[170px] lg:max-w-[210px]">
              <div className="flex-column space-y-1">
                <p className="extra-small-medium md:body-medium lg:paragraph-medium">
                  Agent Activities
                </p>
                <div className="border-b border-b-slate-200"></div>
              </div>
              <div className="flex-column space-y-1 md:space-y-3">
                {AgentActivities.map((value) => (
                  <div key={value.key}>
                    <Link
                      href={value.href}
                      className="vx-extra-small md:vx-small lg:extra-small-regular"
                    >
                      {value.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <AgentArticles />
          </div>
          <div className="w-[240px] border border-slate-100 px-4 md:w-[280px] lg:w-[320px]"></div>
          <LinkFooter />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default Agents;
