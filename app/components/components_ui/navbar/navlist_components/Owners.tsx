import {
  NavigationMenuItem,
  NavigationMenuContent,
  NoChevronNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import Link from "next/link";
import LinkFooter from "./LinkFooter";
import { BuyerArticles } from "./Articles";

const OwnerActions = [
  { label: "Add a Property", key: 1, href: "/" },
  { label: "Real Estate News", key: 2, href: "/" },
];

const Owners = () => {
  return (
    <NavigationMenuItem className="h-10 px-1.5 md:px-2 lg:px-[10px]">
      <NoChevronNavigationMenuTrigger className="extra-small-regular hover-underline-animation md:small-regular lg:body-regular">
        For Owners
      </NoChevronNavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="mt-2 flex size-auto max-h-[340px] max-w-[280px] flex-col items-center justify-between gap-3 space-y-2 p-4 md:mt-3 md:max-w-[330px] lg:mt-4 lg:max-w-[370px]">
          <div className="flex w-[240px] justify-between p-2 md:w-[280px] lg:w-[320px]">
            <div className="flex-column w-auto max-w-[130px] space-y-3 p-2 md:max-w-[170px] lg:max-w-[210px]">
              <div className="flex-column space-y-1">
                <p className="extra-small-medium md:body-medium lg:paragraph-medium">
                  Owner Actions
                </p>
                <div className="border-b border-b-slate-200"></div>
              </div>
              <div className="flex-column space-y-1 md:space-y-3">
                {OwnerActions.map((value) => (
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
            <BuyerArticles />
          </div>
          <div className="w-[240px] border border-slate-100 px-4 md:w-[280px] lg:w-[320px]"></div>
          <LinkFooter />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default Owners;
