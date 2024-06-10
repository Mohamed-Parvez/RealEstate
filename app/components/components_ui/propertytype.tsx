"use client";

import React from "react";

const PropertyType = () => {
  return (
    <div className="flex h-6 w-[360px] max-w-[600px] items-center space-x-2 lg:h-8 lg:w-[560px] lg:space-x-4">
      <button
        className="extra-small-regular lg:body-regular h-6 rounded-[4px] bg-black px-3 text-white lg:h-8 lg:px-4"
        id="buy"
        onClick={() => {
          document.getElementById("buy").style.backgroundColor = "black";
          document.getElementById("buy").style.color = "white";
          document.getElementById("rentlease").style.backgroundColor = "white";
          document.getElementById("rentlease").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("pgcoliving").style.backgroundColor = "white";
          document.getElementById("pgcoliving").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("plotland").style.backgroundColor = "white";
          document.getElementById("plotland").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
        }}
      >
        Buy
      </button>
      <button
        className="extra-small-regular lg:body-regular h-6 rounded-[4px] px-3 text-gray-500 lg:h-8 lg:px-4"
        id="rentlease"
        onClick={() => {
          document.getElementById("rentlease").style.backgroundColor = "black";
          document.getElementById("rentlease").style.color = "white";
          document.getElementById("buy").style.backgroundColor = "white";
          document.getElementById("buy").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("plotland").style.backgroundColor = "white";
          document.getElementById("plotland").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("pgcoliving").style.backgroundColor = "white";
          document.getElementById("pgcoliving").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
        }}
      >
        Rent / Lease
      </button>
      <button
        className="extra-small-regular lg:body-regular h-6 rounded-[4px] px-3 text-gray-500 lg:h-8 lg:px-4"
        id="pgcoliving"
        onClick={() => {
          document.getElementById("pgcoliving").style.backgroundColor = "black";
          document.getElementById("pgcoliving").style.color = "white";
          document.getElementById("plotland").style.backgroundColor = "white";
          document.getElementById("plotland").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("rentlease").style.backgroundColor = "white";
          document.getElementById("rentlease").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("buy").style.backgroundColor = "white";
          document.getElementById("buy").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
        }}
      >
        PG / Co-living
      </button>
      <button
        className="extra-small-regular lg:body-regular h-6 rounded-[4px] px-3 text-gray-500 lg:h-8 lg:px-4"
        id="plotland"
        onClick={() => {
          document.getElementById("plotland").style.backgroundColor = "black";
          document.getElementById("plotland").style.color = "white";
          document.getElementById("rentlease").style.backgroundColor = "white";
          document.getElementById("rentlease").style.color =
            "rgb(107 114 128 / var(--tw-text-opacity))";
          document.getElementById("pgcoliving").style.backgroundColor = "white";
          document.getElementById("pgcoliving").style.color =
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
