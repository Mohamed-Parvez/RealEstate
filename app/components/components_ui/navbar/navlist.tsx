"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu-modified";
import Owners from "./navlist_components/Owners";
import Buyers from "./navlist_components/Buyers";
import Tenants from "./navlist_components/Tenants";
import Agents from "./navlist_components/Agents";

const NavList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Owners />
        <Buyers />
        <Tenants />
        <Agents />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavList;
