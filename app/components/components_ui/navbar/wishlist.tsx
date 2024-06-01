import Image from "next/image";
import React from "react";

const Wishlist = () => {
  return (
    <div className="relative sm:size-[20px] md:size-[22px] lg:size-[29px]">
      <Image alt="wishlist" src={"/assets/icons/wishlist.svg"} fill />
    </div>
  );
};

export default Wishlist;
