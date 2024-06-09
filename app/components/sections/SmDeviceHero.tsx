import React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import SmDrawerContent from "../components_ui/navbar/sm_dev_drawer_content";
import { Input } from "../ui/input";
import { PopularCities } from "@/constants";
import Link from "next/link";

const SmDeviceHero = () => {
  return (
    <main className="flex flex-col items-center justify-center sm:hidden">
      <div
        className="flex-center aspect-h-10 aspect-w-16 relative size-full overflow-hidden
       rounded-xl bg-cover object-cover mix-blend-overlay fs:aspect-h-9 fx:aspect-h-8 sm:hidden md:rounded-2xl lg:rounded-3xl"
      >
        <Image
          className="p-4"
          src={"/assets/images/project-bg.png"}
          alt="project"
          fill
        />
      </div>
      <Drawer>
        <DrawerTrigger>
          <div
            className="flex-between relative z-50 mt-[-40px] w-[300px] 
      overflow-hidden rounded-[8px] bg-white object-cover shadow-lg ring-1 ring-slate-200 xs:w-[340px] fo:w-[380px]
          fs:w-[400px] fx:w-[440px] ff:w-[470px]"
          >
            <div className="flex space-x-3 px-5 ">
              <Image
                alt="search"
                src={"/assets/icons/search.svg"}
                className=""
                height={20}
                width={20}
              />
              <p className="body-regular py-5 text-slate-600">
                Search City, Projects
              </p>
            </div>
            <Image
              alt="mic"
              src={"/assets/icons/mic.svg"}
              className="mr-4"
              height={24}
              width={24}
            />
          </div>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-start bg-white sm:hidden">
          <SmDrawerContent />
          <div className="mt-4 flex h-[52px] w-full items-center px-5">
            <Input
              placeholder="Search City, Projects"
              className="body-regular h-[52px] w-full rounded-[10px] border border-slate-500 px-6 text-slate-500"
            />
            <Image
              alt="mic_filled"
              height={24}
              width={24}
              src={"/assets/icons/mic_filled.svg"}
              className="ml-[-40px]"
            />
          </div>
          <div className="mx-7 mt-4 flex items-center gap-1">
            <Image
              alt="location"
              height={18}
              width={18}
              src={"/assets/icons/location.svg"}
            />
            <p className="small-regular text-slate-800">Use Your Location</p>
          </div>
          <p className="body-medium mx-4 mt-8">Popular Cities</p>
          <div className="mx-1 flex-col items-start justify-start">
            <ul className="flex w-full flex-wrap items-center justify-center space-x-2 space-y-5 py-3 lg:w-[580px] lg:space-x-6">
              <li
                id="chennai"
                className="body-regular mt-4 rounded-full px-4 py-2 text-gray-500 shadow-md ring-1 ring-slate-100 lg:mt-[14px] lg:px-5"
              >
                Chennai
              </li>
              {PopularCities.map((value) => (
                <Link key={value.key} href={value.href}>
                  <li
                    id={value.id}
                    key={value.key}
                    className="body-regular rounded-full px-4 py-2 text-gray-500 shadow-md ring-1 ring-slate-100 lg:px-5"
                  >
                    {value.city}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <DrawerClose className="mx-auto mt-20">
            <Button>
              <Image
                className="rounded-full p-4 shadow-lg ring-2 ring-slate-200"
                alt="close"
                height={60}
                width={60}
                src={"/assets/icons/close.svg"}
              />
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </main>
  );
};

export default SmDeviceHero;
