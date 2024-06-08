import React from "react";
import Image from "next/image";
import { SmallDeviceNavSectionData } from "@/constants";

const SmallDeviceNavSection = () => {
  return (
    <section className="hide-scroll-bar flex-between h-11 gap-3 overflow-x-scroll px-4 sm:hidden">
      {SmallDeviceNavSectionData.map((value) => (
        <div
          key={value.key}
          className="flex-between shrink-0 space-x-1 rounded-full px-4 py-2 shadow-md ring-1 ring-slate-100"
        >
          <Image alt={value.label} src={value.src} height={16} width={16} />
          <p className="text-[14px]">{value.label}</p>
        </div>
      ))}
    </section>
  );
};

export default SmallDeviceNavSection;
