"use client";

import React, { useState } from "react";

import Image from "next/image";

import {
  ChevronDown,
  Heart,
  LogIn,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Account = () => {
  const [Notregistered, Registered] = useState(
    <div className="flex items-center gap-1">
      <span className="small-bold lg:body-bold">REGISTER</span>
      <span className="small-bold lg:body-bold"> / </span>
      <span className="small-bold lg:body-bold">LOGIN</span>
    </div>
  );
  const [NotLogedIn, LogedIn] = useState(
    <DropdownMenuItem>
      <LogIn className="mr-2 size-4" />
      <span className="extra-small-regular md:small-regular lg:body-regular">
        Log In
      </span>
    </DropdownMenuItem>
  );
  return (
    <main>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex-center w-full max-w-20">
            <div className="relative size-[18px] lg:size-[24px]">
              <Image alt="user" src={"/assets/icons/user.svg"} fill />
            </div>
            <div className="mt-[-2px]">
              <ChevronDown
                className="relative sm:size-3 md:ml-[2px] md:size-4"
                aria-hidden="true"
              />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel className="mb-1 ml-3">
            {Notregistered}
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              <span className="extra-small-regular md:small-regular lg:body-regular">
                Profile
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Heart className="mr-2 size-4" />
              <span className="extra-small-regular md:small-regular lg:body-regular">
                Favourites
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 size-4" />
              <span className="extra-small-regular md:small-regular lg:body-regular">
                Settings
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {NotLogedIn}
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
};

export default Account;
