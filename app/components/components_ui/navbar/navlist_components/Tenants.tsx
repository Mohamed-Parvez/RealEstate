import {
  NavigationMenuItem,
  NavigationMenuContent,
  NoChevronNavigationMenuTrigger,
} from "@/components/ui/navigation-menu-modified";
import React from "react";
import { RentHouse, CommercialRent } from "@/constants";
import Link from "next/link";
import LinkFooter from "./LinkFooter";

const location = "Karur";

export const PgColiving = [
  { label: `PG for girls in ${location}`, key: 1, href: "/" },
  { label: `PG for boys in ${location}`, key: 1, href: "/" },
  { label: `Single room PG in ${location}`, key: 1, href: "/" },
  { label: `Double sharing PG in ${location}`, key: 1, href: "/" },
  { label: `Triple sharing PG in ${location}`, key: 1, href: "/" },
  { label: `Four sharing PG in ${location}`, key: 1, href: "/" },
  { label: `All PG in ${location}`, key: 1, href: "/" },
];

export const PopularAreas = [
  { label: `Property in ${location}`, key: 1, href: "/" },
  { label: `Property in ${location}`, key: 1, href: "/" },
  { label: `Property ${location}`, key: 1, href: "/" },
  { label: `Property in ${location}`, key: 1, href: "/" },
];

const Tenants = () => {
  return (
    <NavigationMenuItem className="px-1.5 md:px-2 lg:px-[10px]">
      <NoChevronNavigationMenuTrigger className="extra-small-regular hover-underline-animation md:small-regular lg:body-regular">
        For Tenants
      </NoChevronNavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="mt-2 flex size-auto max-h-[580px] w-auto max-w-screen-sm flex-col items-center justify-between gap-3 space-y-2 p-4 md:mt-3 md:max-w-[720px] lg:mt-4 lg:max-w-[890px]">
          <div className="flex w-[580px] justify-between p-2 md:w-[690px] lg:w-[830px]">
            <div className="flex-column w-[80px] space-y-3 p-2 md:w-[120px] lg:w-[140px]">
              <div className="flex-column space-y-1">
                <p className="extra-small-medium md:body-medium lg:paragraph-medium">
                  Rent a House
                </p>
                <div className="border-b border-b-slate-200"></div>
              </div>
              <div className="flex-column space-y-1 md:space-y-3">
                {RentHouse.map((value) => (
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
            <div className="flex-column w-[160px] space-y-3 p-2 md:w-[180px] lg:w-[220px]">
              <div className="flex-column space-y-1">
                <p className="extra-small-medium md:body-medium lg:paragraph-medium">
                  PG / Co-living
                </p>
                <div className="border-b border-b-slate-200"></div>
              </div>
              <div className="flex-column space-y-1 md:space-y-3">
                {PgColiving.map((value) => (
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
            <div className="flex-column w-[120px] space-y-3 p-2 md:w-[140px] lg:w-[180px]">
              <div className="flex-column space-y-1">
                <p className="extra-small-medium md:body-medium lg:paragraph-medium">
                  Commercial
                </p>
                <div className="border-b border-b-slate-200"></div>
              </div>
              <div className="flex-column space-y-1 md:space-y-3">
                {CommercialRent.map((value) => (
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
            <div className="flex-column w-[150px] space-y-3 p-2 md:w-[170px] lg:w-[210px]">
              <div className="flex-column space-y-1">
                <p className="extra-small-medium md:body-medium lg:paragraph-medium">
                  Popular Areas
                </p>
                <div className="border-b border-b-slate-200"></div>
              </div>
              <div className="flex-column space-y-1 md:space-y-3">
                {PopularAreas.map((value) => (
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
          </div>
          <div className="w-[560px] border border-slate-100 px-4 md:w-[650px] lg:w-[810px]"></div>
          <LinkFooter />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default Tenants;
