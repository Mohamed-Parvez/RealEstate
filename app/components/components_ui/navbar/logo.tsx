import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="relative h-10 w-[80px] sm:w-[70px] md:w-[90px] lg:w-[100px]">
      <Image alt="logo" src={"/assets/icons/logo.svg"} fill />
    </div>
  );
};

export default Logo;
