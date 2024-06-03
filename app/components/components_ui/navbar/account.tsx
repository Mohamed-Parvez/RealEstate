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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Account = () => {
  const [Notregistered, Registered] = useState(
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="small-bold lg:body-bold border-none p-0"
        >
          REGISTER / LOGIN
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white py-10 sm:max-w-screen-xs">
        <DialogHeader className="gap-6">
          <DialogTitle className="h3-bold">REGISTER / LOGIN</DialogTitle>
          <DialogDescription>Please enter your phone number</DialogDescription>
        </DialogHeader>

        <div className="space-y-14 border-black py-[10px]">
          <Input
            id="phone_number"
            placeholder="Phone Number"
            className="col-span-3 h-12 w-[378px] rounded-[8px] border-slate-300"
          />
          <div className="space-y-2">
            <button
              type="submit"
              className="rounded-full border border-black bg-black px-[156px] py-3 text-white hover:bg-white hover:text-black"
            >
              Continue
            </button>
            <p className="text-center text-black">or</p>
            <div className="flex-center w-[378px] space-x-3 rounded-full border border-black py-3">
              <Image
                alt="google"
                height={24}
                width={24}
                src={"/assets/icons/google.svg"}
              />
              <p>Sign in with Google</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
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
