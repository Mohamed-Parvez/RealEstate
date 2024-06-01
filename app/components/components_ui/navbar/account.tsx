"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  ModifiedNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const Account = () => {
  return (
    <div className="flex-center w-full max-w-20 gap-[6px] lg:gap-[12px]">
      <div className="relative size-[18px] lg:size-[24px]">
        <Image alt="user" src={"/assets/icons/user.svg"} fill />
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <ModifiedNavigationMenuTrigger></ModifiedNavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Your Account</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Account;
