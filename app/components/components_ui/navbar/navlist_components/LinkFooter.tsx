import React from "react";
import Image from "next/image";

const LinkFooter = () => {
  return (
    <div className="flex-center space-x-8">
      <div className="flex-center space-x-8 md:space-x-10 lg:space-x-12">
        <div className="flex-center space-x-2">
          <div className="relative size-[14px]">
            <Image src="/assets/icons/phone.svg" alt="phone" fill />
          </div>
          <p className="vx-small md:extra-small-regular lg:small-regular text-black">
            93442 17163
          </p>
        </div>
        <div className="flex-center space-x-2">
          <div className="relative size-[16px]">
            <Image src="/assets/icons/mail.svg" alt="phone" fill />
          </div>
          <p className="vx-small md:extra-small-regular lg:small-regular">
            clash.parwesh@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkFooter;
