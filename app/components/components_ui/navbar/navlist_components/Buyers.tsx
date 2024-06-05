import {
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NoChevronNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";

const Buyers = () => {
  return (
    <NavigationMenuItem className="px-1.5 md:px-2 lg:px-[10px]">
      <NoChevronNavigationMenuTrigger className="extra-small-regular md:small-regular lg:body-regular">
        For Buyers
      </NoChevronNavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default Buyers;
