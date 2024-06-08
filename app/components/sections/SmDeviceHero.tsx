import React from "react";
import Image from "next/image";

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
    </main>
  );
};

export default SmDeviceHero;
