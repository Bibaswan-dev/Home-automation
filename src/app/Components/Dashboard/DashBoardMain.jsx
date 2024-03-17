import React from "react";
import DashBoardComp from "./DashBoardComp";
import { FaFan } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

function DashBoardMain() {
  return (
    <>
      <h1 className="text-3xl font-sans mt-10 text-white text-center font-semibold ">
        Smart Home Controll Panel
      </h1>
      <hr className="w-[20%] border-[1px] shadow-xl mx-auto mt-[2px]" />
      <div className="my-20 px-32 font-sans ">
        <div className="grid md:grid-cols-4 gap-4 grid-cols-1 ">
          <div className=" px-4 flex justify-between shadow-lg items-center bg-slate-800/80 rounded-xl h-20 text-white mb-4">
            <p className="text-xl ">Fan</p>
            <FaFan />
          </div>
          <div className=" px-4 flex justify-between shadow-lg items-center bg-slate-800/80 rounded-xl h-20 text-white mb-4">
            <p className="text-xl ">Bulb</p>
            <GiLightBulb />
          </div>
          <div className=" px-4 flex justify-between shadow-lg items-center bg-slate-800/80 rounded-xl h-20 text-white mb-4">
            <p className="text-xl ">Led</p>
            <FaLightbulb />
          </div>
          <div className=" px-4 flex justify-between shadow-lg items-center bg-slate-800/80 rounded-xl h-20 text-white mb-4">
            <p className="text-xl ">Fan</p>
            <TbAirConditioning />
          </div>
        </div>
        <div className="w-full mt-10 bg-slate-800/80 rounded-xl py-2 px-4 text-white">
          <h1 className="text-xl font-semibold my-4">Connection Status</h1>
          <div className="grid md:grid-cols-4 gap-4 grid-cols-1 ">
            <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
              <p className="text-xl ">Fan</p>
              <p>Status :</p>
            </div>

            <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
              <p className="text-xl ">Fan</p>
              <p>Status :</p>
            </div>
            <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
              <p className="text-xl ">Fan</p>
              <p>Status :</p>
            </div>

            <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
              <p className="text-xl ">Fan</p>
              <p>Status :</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 bg-slate-800/80 rounded-xl py-2 px-4 text-white">
          <h1 className="text-xl font-semibold my-4">
            Device Details and Action
          </h1>
          <div>
            <div className="relative">
              <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
                <p className="text-xl ">Fan</p>
                <p>Status :</p>
              </div>
              <button className="absolute bottom-6 bg-blue-500 p-2 rounded right-4">Adjust Speed</button>
            </div>

            <div className="relative">
              <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
                <p className="text-xl ">Fan</p>
                <p>Status :</p>
              </div>
              <button className="absolute bottom-6 bg-blue-500 p-2 rounded right-4">Adjust Speed</button>
            </div><div className="relative">
              <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
                <p className="text-xl ">Fan</p>
                <p>Status :</p>
              </div>
              <button className="absolute bottom-6 bg-blue-500 p-2 rounded right-4">Adjust Speed</button>
            </div><div className="relative">
              <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
                <p className="text-xl ">Fan</p>
                <p>Status :</p>
              </div>
              <button className="absolute bottom-6 bg-blue-500 p-2 rounded right-4">Adjust Speed</button>
            </div><div className="relative">
              <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
                <p className="text-xl ">Fan</p>
                <p>Status :</p>
              </div>
              <button className="absolute bottom-6 bg-blue-500 p-2 rounded-lg right-4">Adjust Speed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardMain;
