import React from "react";
import NavList from "../components_ui/navbar/navlist";
import Location from "../components_ui/navbar/location";
import Account from "../components_ui/navbar/account";
import Logo from "../components_ui/navbar/logo";
import Wishlist from "../components_ui/navbar/wishlist";
import Addproperty from "../components_ui/navbar/addproperty";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <main>
      <nav
        className="flex-between mx-auto h-16 max-w-screen-2xl
        px-4 py-9 sm:px-2 md:px-3 lg:px-6"
      >
        <div className="flex-between gap-2">
          <Link href={"/"}>
            <Logo />
          </Link>
          <div className="hidden sm:block">
            <Location />
          </div>
        </div>
        <div>
          <div className="flex-center mt-[-8px] h-10 w-full max-w-[740px] gap-3 lg:mt-[-12px] lg:gap-5">
            <div className="hidden sm:block">
              <NavList />
            </div>
            <div className="flex-between max-w-[290px] gap-3 md:gap-3 lg:gap-5">
              <div className="hidden sm:block">
                <Addproperty />
              </div>
              <div className="hidden w-full max-w-[24px] sm:block">
                <Wishlist />
              </div>
              <div className="hidden sm:block">
                <Account />
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <Addproperty />
        </div>
      </nav>

      {/* Small Devices */}
      <nav
        className="flex-between fixed bottom-0 h-[40px] w-full
      max-w-screen-sm rounded-t-3xl px-10  py-8 ring-4 ring-slate-100 xs:px-14 sm:hidden"
      >
        <Link href={"/"}>
          <Image
            alt="Home"
            src={"/assets/icons/home.svg"}
            height={24}
            width={24}
          />
        </Link>
        <Link href={"/"}>
          <Image
            alt="Search"
            src={"/assets/icons/search.svg"}
            height={24}
            width={24}
          />
        </Link>
        <Link href={"/"}>
          <Image
            alt="Add"
            src={"/assets/icons/add.svg"}
            height={28}
            width={28}
          />
        </Link>
        <Link href={"/"}>
          <Image
            alt="Wishlist"
            src={"/assets/icons/wishlist.svg"}
            height={24}
            width={24}
          />
        </Link>
        <Link href={"/"}>
          <Image
            alt="Home"
            src={"/assets/icons/user.svg"}
            height={24}
            width={24}
          />
        </Link>
      </nav>
    </main>
  );
};

export default NavBar;
