"use client";

import React from "react";

const PropertyType = () => {
  return (
    <div className="flex h-7 w-[360px] max-w-[600px] items-center space-x-2 lg:h-8 lg:w-[560px] lg:space-x-4">
      <button
        className="extra-small-regular lg:body-regular h-7 rounded-[4px] bg-black px-3 text-white lg:px-4"
        id="buy"
        onClick={() => {
          document.getElementById("buy").style.backgroundColor = "black";
          document.getElementById("buy").style.color = "white";
          document.getElementById("sell").style.backgroundColor = "white";
          document.getElementById("sell").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("commercial").style.backgroundColor = "white";
          document.getElementById("commercial").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("plotland").style.backgroundColor = "white";
          document.getElementById("plotland").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
        }}
      >
        Buy
      </button>
      <button
        className="extra-small-regular lg:body-regular h-7 rounded-[4px] px-3 text-gray-500 lg:px-4"
        id="sell"
        onClick={() => {
          document.getElementById("sell").style.backgroundColor = "black";
          document.getElementById("sell").style.color = "white";
          document.getElementById("buy").style.backgroundColor = "white";
          document.getElementById("buy").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("plotland").style.backgroundColor = "white";
          document.getElementById("plotland").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("commercial").style.backgroundColor = "white";
          document.getElementById("commercial").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
        }}
      >
        Sell
      </button>
      <button
        className="extra-small-regular lg:body-regular h-7 rounded-[4px] px-3 text-gray-500 lg:px-4"
        id="commercial"
        onClick={() => {
          document.getElementById("commercial").style.backgroundColor = "black";
          document.getElementById("commercial").style.color = "white";
          document.getElementById("plotland").style.backgroundColor = "white";
          document.getElementById("plotland").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("sell").style.backgroundColor = "white";
          document.getElementById("sell").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("buy").style.backgroundColor = "white";
          document.getElementById("buy").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
        }}
      >
        Commercial
      </button>
      <button
        className="extra-small-regular lg:body-regular h-7 rounded-[4px] px-3 text-gray-500 lg:px-4"
        id="plotland"
        onClick={() => {
          document.getElementById("plotland").style.backgroundColor = "black";
          document.getElementById("plotland").style.color = "white";
          document.getElementById("sell").style.backgroundColor = "white";
          document.getElementById("sell").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("commercial").style.backgroundColor = "white";
          document.getElementById("commercial").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("buy").style.backgroundColor = "white";
          document.getElementById("buy").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
        }}
      >
        Plot / Land
      </button>
    </div>
  );
};

export default PropertyType;
