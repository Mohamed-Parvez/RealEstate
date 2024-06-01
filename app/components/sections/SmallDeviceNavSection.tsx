import React from "react";
import Image from "next/image";

const SmallDeviceNavSection = () => {
  return (
    <section className="hide-scroll-bar flex-between h-11 gap-3 overflow-x-scroll px-4 sm:hidden">
      <div className="flex-between shrink-0 space-x-1 rounded-full px-4 py-2 shadow-md ring-1 ring-slate-100">
        <Image
          alt="Buy"
          src={"/assets/icons/SM-Dev-Nav-Icons/house.svg"}
          height={16}
          width={16}
        />
        <p className="text-[14px]">Buy</p>
      </div>
      <div className="flex-between shrink-0 space-x-1 rounded-full px-4 py-2 shadow-md ring-1 ring-slate-100">
        <Image
          alt="Sell"
          src={"/assets/icons/SM-Dev-Nav-Icons/sell.svg"}
          height={16}
          width={16}
        />
        <p className="text-[14px]">Sell</p>
      </div>
      <div className="flex-between shrink-0 space-x-1 rounded-full px-4 py-2 shadow-md ring-1 ring-slate-100">
        <Image
          alt="Rent"
          src={"/assets/icons/SM-Dev-Nav-Icons/rent.svg"}
          height={16}
          width={16}
        />
        <p className="text-[14px]">Rent</p>
      </div>
      <div className="flex-between shrink-0 space-x-1 rounded-full px-4 py-2 shadow-md ring-1 ring-slate-100">
        <Image
          alt="Plot/Land"
          src={"/assets/icons/SM-Dev-Nav-Icons/plot.svg"}
          height={16}
          width={16}
        />
        <p className="text-[14px]">Plot / Land</p>
      </div>
      <div className="flex-between shrink-0 space-x-1 rounded-full px-4 py-2 shadow-md ring-1 ring-slate-100">
        <Image
          alt="Buy Commercial"
          src={"/assets/icons/SM-Dev-Nav-Icons/shop.svg"}
          height={16}
          width={16}
        />
        <p className="text-[14px]">Buy Commercial</p>
      </div>
      <div className="flex-between shrink-0 space-x-1 rounded-full px-4 py-2 shadow-md ring-1 ring-slate-100">
        <Image
          alt="PG/Co-living"
          src={"/assets/icons/SM-Dev-Nav-Icons/co-living.svg"}
          height={16}
          width={16}
        />
        <p className="text-[14px]">PG / Co-Living</p>
      </div>
    </section>
  );
};

export default SmallDeviceNavSection;
