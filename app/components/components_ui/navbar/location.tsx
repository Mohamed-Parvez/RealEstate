"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PopularCities, LocationRadioGroup } from "@/constants";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import PropertyType from "../propertytype";

const Location = () => {
  const [state, setState] = useState("Residential");

  return (
    <NavigationMenu className="mt-[-10px] lg:mt-[-12px]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="extra-small-regular md:small-regular">
            Location ...
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[410px] flex-col items-center justify-start space-y-4 p-4 lg:w-[640px] lg:space-y-8 lg:p-6">
              <p className="h2-semibold lg:h1-semibold font-semibold text-black">
                Explore Properties
              </p>
              <div className="flex-col items-center justify-start space-y-4 lg:space-y-6">
                <PropertyType />
                <div
                  className="flex w-[370px] items-center justify-between rounded-md px-2 shadow-md
                   ring-1 ring-slate-100 lg:w-[580px] lg:px-4
                  "
                >
                  <NavigationMenu className="border-r">
                    <NavigationMenuList>
                      <NavigationMenuItem className="px-2">
                        <NavigationMenuTrigger className="extra-small-regular lg:body-regular w-[80px] md:w-[100px]">
                          {state}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <RadioGroup
                            className=" bg-white p-4 shadow-md ring-1 ring-slate-100"
                            defaultValue="residential"
                          >
                            {LocationRadioGroup.map((value) => (
                              <div
                                key={value.key}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={value.value}
                                  id={value.id}
                                  onClick={() => {
                                    setState(value.label);
                                  }}
                                />
                                <p className="extra-small-regular lg:body-regular">
                                  {value.label}
                                </p>
                              </div>
                            ))}
                          </RadioGroup>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <div className="relative ml-[14px] size-[42px] lg:ml-[24px] lg:size-[42px]">
                    <Image alt="search" src={"/assets/icons/search.svg"} fill />
                  </div>
                  <Input
                    type="search"
                    placeholder="Search City"
                    className="h-10 border-none text-[10px] text-gray-500 lg:ml-[10px] lg:h-16 lg:text-[14px]"
                  />
                  <button className="extra-small-semibold lg:body-semibold rounded-[6px] bg-black px-4 py-[6px] text-white">
                    Search
                  </button>
                </div>
                <div className="flex-col items-start justify-start">
                  <p className="small-medium lg:paragraph-medium">
                    Popular Cities
                  </p>
                  <ul className="flex w-[380px] flex-wrap items-center justify-center space-x-2 space-y-2 py-3 lg:w-[580px] lg:space-x-6 lg:space-y-4">
                    <li
                      id="chennai"
                      className="lg:body-regular vx-small mt-2 rounded-full px-4 py-2 text-gray-500 shadow-md ring-1 ring-slate-100 lg:mt-[14px] lg:px-5"
                    >
                      Chennai
                    </li>
                    {PopularCities.map((value) => (
                      <Link key={value.key} href={value.href}>
                        <li
                          id={value.id}
                          key={value.key}
                          className="lg:body-regular vx-small rounded-full px-4 py-2 text-gray-500 shadow-md ring-1 ring-slate-100 lg:px-5"
                        >
                          {value.city}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Location;
