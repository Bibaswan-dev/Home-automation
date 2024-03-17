"use client";
import React from "react";
import fan from "../../Assets/fan.png";
import Image from "next/image";

function DashBoardComp() {
  return (
    <div>
      <div className="w-full max-w-xl bg-amber-100 border border-gray-200 rounded-lg shadow-md ">
        <div className="flex flex-col  items-center p-4 pb-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full border-2 shadow-yellow-100 shadow-md"
            src={fan}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">Fan</h5>
          <span className="text-sm text-gray-800 ">Control fan</span>
          <div className="pt-2 flex space-x-2 justify-center">
           
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultValue="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              
            </label>
            <span>Off</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardComp;
