import React from "react";
import Image from "next/image";

const SmDeviceHero = () => {
  return (
    <main
      className="flex-center aspect-h-10 aspect-w-16 relative size-full overflow-hidden
       rounded-xl bg-cover object-cover fs:aspect-h-9 fx:aspect-h-8 sm:hidden md:rounded-2xl lg:rounded-3xl"
    >
      <Image
        className="p-4"
        src={"/assets/images/project-bg.png"}
        alt="project"
        fill
      />
    </main>
  );
};

export default SmDeviceHero;
