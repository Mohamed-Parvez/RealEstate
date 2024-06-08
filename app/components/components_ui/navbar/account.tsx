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

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Account = () => {
  const [Notregistered, Registered] = useState(
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="small-medium lg:body-medium ml-[-24px] border-none"
        >
          REGISTER / LOGIN
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[340px] bg-white sm:py-6 md:max-w-screen-xs md:py-10">
        <DialogHeader className="gap-5">
          <DialogTitle className="body-bold md:paragraph-bold lg:h3-bold">
            REGISTER / LOGIN
          </DialogTitle>
          <DialogDescription className="extra-small-regular md:small-regular lg:body-regular">
            Please enter your phone number
          </DialogDescription>
        </DialogHeader>

        <div className="mt-[-8px] space-y-10 border-black sm:py-[6px] md:mt-[-10px] md:space-y-12 md:py-[10px] lg:space-y-14">
          <Input
            id="phone_number"
            placeholder="Phone Number"
            className="extra-small-regular md:small-regular lg:body-regular col-span-3 w-[290px]
             rounded-[8px] border-slate-300 text-slate-500 sm:h-10 md:h-12 md:w-[378px]"
          />
          <div className="space-y-2">
            <button
              type="submit"
              className="extra-small-regular md:small-regular lg:body-regular w-[290px] 
              rounded-full border border-black bg-black py-[11px] text-white hover:bg-white
               hover:text-black md:w-[378px] md:py-[13px]"
            >
              Continue
            </button>
            <p className="extra-small-regular md:small-regular lg:body-regular text-center text-black">
              or
            </p>
            <div
              className="flex-center w-[290px] space-x-3 rounded-full border border-black py-[6px]
             md:w-[378px] md:py-3"
            >
              <Image
                alt="google"
                height={24}
                width={24}
                src={"/assets/icons/google.svg"}
              />
              <p className="extra-small-regular md:small-regular lg:body-regular">
                Sign in with Google
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
  const [NotLogedIn, LogedIn] = useState(
    <DropdownMenuItem className="ml-2 mt-0.5 md:mt-1 lg:ml-3">
      <LogIn className="mr-2 size-3 lg:size-4" />
      <span className="vx-small md:extra-small-regular lg:small-regular">
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
        <DropdownMenuContent className="w-[150px] rounded-[10px] sm:w-[160px] lg:w-[170px]">
          <DropdownMenuLabel className="mb-1 ml-3">
            {Notregistered}
          </DropdownMenuLabel>
          <DropdownMenuGroup className="ml-2 md:ml-3">
            <DropdownMenuItem>
              <User className="mr-2 size-3 lg:size-4" />
              <span className="vx-small md:extra-small-regular lg:small-regular">
                Profile
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Heart className="mr-2 size-3 lg:size-4" />
              <span className="vx-small md:extra-small-regular lg:small-regular">
                Favourites
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 size-3 lg:size-4" />
              <span className="vx-small md:extra-small-regular lg:small-regular">
                Settings
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <div className="mt-2 w-[100px] border border-slate-100 px-4 sm:w-[130px] md:mt-3 lg:w-[140px]"></div>
          {NotLogedIn}
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
};

export default Account;
