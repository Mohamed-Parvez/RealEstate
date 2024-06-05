import {
  NavigationMenuItem,
  NavigationMenuContent,
  NoChevronNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import { OwnerArticles } from "@/constants";
import Link from "next/link";
import LinkFooter from "./LinkFooter";

const OwnerActions = [
  { label: "Add a Property", key: 1, href: "/" },
  { label: "Real Estate News", key: 2, href: "/" },
];

const Owners = () => {
  return (
    <NavigationMenuItem className="h-10 px-1.5 md:px-2 lg:px-[10px]">
      <NoChevronNavigationMenuTrigger className="extra-small-regular md:small-regular lg:body-regular">
        For Owners
      </NoChevronNavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="flex h-auto max-h-[340px] w-[340px] flex-col items-center justify-between gap-3 space-y-2 p-4 md:w-[440px] lg:w-[540px]">
          <div className="flex w-[280px] justify-between md:w-[380px] lg:w-[480px]">
            <div className="flex-column w-[120px] space-y-3 p-2 md:w-[160px] lg:w-[170px]">
              <div className="flex-column space-y-1">
                <p className="small-medium md:body-medium lg:paragraph-medium">
                  Owner Actions
                </p>
                <div className="border-b border-b-slate-200"></div>
              </div>
              <div className="flex-column space-y-1 md:space-y-3">
                {OwnerActions.map((value) => (
                  <div key={value.key}>
                    <Link
                      href={value.href}
                      className="extra-small-regular md:small-regular lg:body-regular"
                    >
                      {value.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-column w-[120px] space-y-3 p-2 md:w-[160px] lg:w-[170px]">
              <div className="flex-column space-y-1">
                <p className="small-medium md:body-medium lg:paragraph-medium">
                  Articles
                </p>
                <div className="border-b border-b-slate-200"></div>
              </div>
              <div className="flex-column space-y-1 md:space-y-3">
                {OwnerArticles.map((value) => (
                  <div key={value.key}>
                    <Link
                      href={value.href}
                      className="extra-small-regular md:small-regular lg:body-regular"
                    >
                      {value.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[280px] border border-slate-100 px-4 md:w-[380px] lg:w-[480px]"></div>
          <LinkFooter />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default Owners;
