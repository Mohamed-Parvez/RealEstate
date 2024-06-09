"use client";
import React from "react";

const SmDrawerContent = () => {
  return (
    <div className="flex-between mx-3 h-16 w-[320px] space-x-2 rounded-[10px] px-2 xs:mx-8">
      <button
        onClick={() => {
          document.getElementById("buy_btn").style.backgroundColor = "black";
          document.getElementById("buy_btn").style.borderWidth = "1px";
          document.getElementById("buy_btn").style.borderColor = "black";
          document.getElementById("rnt_btn").style.borderWidth = "0px";
          document.getElementById("rnt_btn").style.borderColor = "none";
          document.getElementById("com_btn").style.borderWidth = "0px";
          document.getElementById("com_btn").style.borderColor = "none";
          document.getElementById("rnt_btn").style.backgroundColor = "white";
          document.getElementById("com_btn").style.backgroundColor = "white";
          document.getElementById("buy_btn").style.color = "white";
          document.getElementById("rnt_btn").style.color = "black";
        }}
        className="body-regular w-20 rounded-[10px] border border-black bg-black px-4 py-2 text-white"
        id="buy_btn"
      >
        Buy
      </button>
      <button
        onClick={() => {
          document.getElementById("rnt_btn").style.backgroundColor = "black";
          document.getElementById("rnt_btn").style.borderWidth = "1px";
          document.getElementById("rnt_btn").style.borderColor = "black";
          document.getElementById("buy_btn").style.borderWidth = "0px";
          document.getElementById("buy_btn").style.borderColor = "none";
          document.getElementById("com_btn").style.borderWidth = "0px";
          document.getElementById("com_btn").style.borderColor = "none";
          document.getElementById("buy_btn").style.backgroundColor = "white";
          document.getElementById("buy_btn").style.color = "black";
          document.getElementById("com_btn").style.backgroundColor = "white";
          document.getElementById("rnt_btn").style.color = "white";
          document.getElementById("com_btn").style.color = "black";
        }}
        className="body-regular w-20 rounded-[10px] px-4 py-2"
        id="rnt_btn"
      >
        Rent/PG
      </button>
      <button
        onClick={() => {
          document.getElementById("com_btn").style.backgroundColor = "black";
          document.getElementById("com_btn").style.borderWidth = "1px";
          document.getElementById("com_btn").style.borderColor = "black";
          document.getElementById("rnt_btn").style.borderWidth = "0px";
          document.getElementById("rnt_btn").style.borderColor = "none";
          document.getElementById("buy_btn").style.borderWidth = "0px";
          document.getElementById("buy_btn").style.borderColor = "none";
          document.getElementById("buy_btn").style.backgroundColor = "white";
          document.getElementById("buy_btn").style.color = "black";
          document.getElementById("rnt_btn").style.backgroundColor = "white";
          document.getElementById("com_btn").style.color = "white";
          document.getElementById("rnt_btn").style.color = "black";
        }}
        className="body-regular w-28 rounded-[10px] px-4 py-2"
        id="com_btn"
      >
        Commercial
      </button>
    </div>
  );
};

export default SmDrawerContent;
