import { BuyerArticlesData, OwnerArticlesData } from "@/constants";
import React from "react";
import Link from "next/link";

export const OwnerArticles = () => {
  return (
    <div className="flex-column w-auto max-w-[130px] space-y-3 p-2 md:max-w-[170px] lg:max-w-[210px]">
      <div className="flex-column space-y-1">
        <p className="extra-small-medium md:body-medium lg:paragraph-medium">
          Articles
        </p>
        <div className="border-b border-b-slate-200"></div>
      </div>
      <div className="flex-column space-y-1 md:space-y-3">
        {OwnerArticlesData.map((value) => (
          <div key={value.key}>
            <Link
              href={value.href}
              className="vx-small md:extra-small-regular lg:small-regular"
            >
              {value.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BuyerArticles = () => {
  return (
    <div className="flex-column w-auto max-w-[130px] space-y-3 p-2 md:max-w-[170px] lg:max-w-[210px]">
      <div className="flex-column space-y-1">
        <p className="extra-small-medium md:body-medium lg:paragraph-medium">
          Articles
        </p>
        <div className="border-b border-b-slate-200"></div>
      </div>
      <div className="flex-column space-y-1 md:space-y-3">
        {BuyerArticlesData.map((value) => (
          <div key={value.key}>
            <Link
              href={value.href}
              className="vx-extra-small md:vx-small lg:extra-small-regular"
            >
              {value.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
