"use client";

import React, { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";
import Image from "next/image";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
            <div className="w-[400px] flex-col items-center justify-start space-y-4 p-4 lg:w-[640px] lg:space-y-8 lg:p-6">
              <p className="text-[22px] font-semibold text-black lg:text-[36px]">
                Explore Properties
              </p>
              <div className="flex-col items-center justify-start space-y-4 lg:space-y-6">
                <ul className="flex w-[360px] max-w-[600px] items-center space-x-6 lg:w-[560px] lg:space-x-10">
                  <li className="text-[10px] text-gray-500 lg:text-[14px]">
                    Buy
                  </li>
                  <li className="text-[10px] text-gray-500 lg:text-[14px]">
                    Rent
                  </li>
                  <li className="text-[10px] text-gray-500 lg:text-[14px]">
                    Commercial
                  </li>
                  <li className="text-[10px] text-gray-500 lg:text-[14px]">
                    Plot / Land
                  </li>
                </ul>
                <div
                  className="flex w-[370px] items-center justify-between rounded-md px-2 shadow-md
                   ring-1 ring-slate-100 lg:w-[580px] lg:px-4
                  "
                >
                  <NavigationMenu className="border-r">
                    <NavigationMenuList>
                      <NavigationMenuItem className="px-2">
                        <NavigationMenuTrigger className="text-[10px] lg:text-[14px]">
                          {state}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <RadioGroup
                            className=" bg-white p-4 shadow-md ring-1 ring-slate-100"
                            defaultValue="residential"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="=residential"
                                id="r1"
                                onClick={() => {
                                  setState("Residential");
                                }}
                              />
                              <p className="text-[10px] lg:text-[14px]">
                                Residential
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                onClick={() => {
                                  setState("Commercial");
                                }}
                                value="commercial"
                                id="r2"
                              />
                              <p className="text-[10px] lg:text-[14px]">
                                Commercial
                              </p>
                            </div>
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
                  <button className="rounded-[6px] bg-black px-4 py-[6px] text-[10px] font-bold text-white lg:text-[14px]">
                    Search
                  </button>
                </div>
                <div className="flex-col items-start justify-start">
                  <p className="text-[12px] lg:text-[16px]">Popular Cities</p>
                  <ul className="flex w-[380px] flex-wrap items-center space-x-2 space-y-2 py-3 lg:w-[600px] lg:space-x-6 lg:space-y-4">
                    <li className="mt-2 rounded-full px-4 py-2 text-[9px] text-gray-500 shadow-md ring-1 ring-slate-100 lg:mt-3 lg:px-5 lg:text-[14px]">
                      Chennai
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500 shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Banglore
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500  shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Hyderabad
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500 shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Mumbai
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500 shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Delhi
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500  shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Cochin
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500  shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Goa
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500 shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Rajasthan
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500  shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Mysore
                    </li>
                    <li className="rounded-full px-4 py-2 text-[9px] text-gray-500 shadow-md ring-1 ring-slate-100 lg:px-5 lg:text-[14px]">
                      Karur
                    </li>
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
