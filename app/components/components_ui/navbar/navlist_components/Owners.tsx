import {
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NoChevronNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";

const Owners = () => {
  return (
    <NavigationMenuItem className="h-10 px-1.5 md:px-2 lg:px-[10px]">
      <NoChevronNavigationMenuTrigger className="extra-small-regular md:small-regular lg:body-regular">
        For Owners
      </NoChevronNavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default Owners;
