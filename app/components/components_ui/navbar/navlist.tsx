"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NoChevronNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="h-10 px-1.5 md:px-2 lg:px-[10px]">
          <NoChevronNavigationMenuTrigger className="extra-small-regular md:small-regular lg:body-regular">
            For Owners
          </NoChevronNavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-1.5 md:px-2 lg:px-[10px]">
          <NoChevronNavigationMenuTrigger className="extra-small-regular md:small-regular lg:body-regular">
            For Buyers
          </NoChevronNavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-1.5 md:px-2 lg:px-[10px]">
          <NoChevronNavigationMenuTrigger className="extra-small-regular md:small-regular lg:body-regular">
            For Tenants
          </NoChevronNavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-1.5 md:px-2 lg:px-[10px]">
          <NoChevronNavigationMenuTrigger className="extra-small-regular md:small-regular lg:body-regular">
            For Agents
          </NoChevronNavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavList;
