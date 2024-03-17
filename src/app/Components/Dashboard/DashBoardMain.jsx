"use client";
import React, { useState } from "react";
import { FaFan } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { TbAirConditioning } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DashBoardMain({ data }) {
  const teamid = "nWHFpQU";
  // const getdetails = async () => {
  //   let res = await fetch(
  //     "https://kodessphere-api.vercel.app/devices/nWHFpQU",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   let data = await res.json();

  //   setfanspeed(data?.fan);
  //   setisToggled(data?.bulb == 1 ? true : false);
  //   setledcolor(data?.led || "#ffff");
  //   setNumber(data?.ac.temp);
  //   setisToggled1(data?.ac.state);
  // };

  const postfan = async () => {
    try {
      const data = {
        teamid: teamid,
        device: "fan",
        value: fanspeed,
      };
      let res = await fetch("https://kodessphere-api.vercel.app/devices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      console.log(response);
      if (response.success === true) {
        toast.success("Data updated..", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        
      }
    } catch (error) {
      toast.error("Fetch Failed.", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const postbulb = async () => {
    try {
      let v = isToggled ? 1 : 0;
      const data = {
        teamid: teamid,
        device: "bulb",
        value: v,
      };
      let res = await fetch("https://kodessphere-api.vercel.app/devices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      console.log(response);
      if (response.success === true) {
        toast.success("Data updated..", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        
      }
    } catch (error) {
      toast.error("Fetch Failed.", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const postled = async () => {
    try {
      const data = {
        teamid: teamid,
        device: "led",
        value: ledcolor,
      };
      let res = await fetch("https://kodessphere-api.vercel.app/devices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      console.log(response);
      if (response.success === true) {
        toast.success("Data updated..", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      
    } catch (error) {
      toast.error("Fetch Failed.", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const postac = async () => {
    try {
      const acdatapost = { temp: actemp, state: isToggled1 ? 1 : 0 };
      const data = {
        teamid: teamid,
        device: "ac",
        value: acdatapost,
      };
      let res = await fetch("https://kodessphere-api.vercel.app/devices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      console.log(response);
      if (response.success === true) {
        toast.success("Data updated..", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        
      } else {
        toast.error("Data updated failed..", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Fetch Failed.", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const [number, setNumber] = useState(data?.ac.temp); // Initialize state

  // Function to increment the number
  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
    postac()
    
  };

  // Function to decrement the number
  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
    postac()
  };
  const dtemp = () => {
    actemp--;
    setkey(Math.random());
  };
  const itemp = () => {
    actemp++;
    setkey(Math.random());
    console.log(actemp);
  };
  const [Actionfan, setActionfan] = useState(false);
  const [fanspeed, setfanspeed] = useState(data?.fan);
  const [Actionled, setActionled] = useState(false);

  const [ledcolor, setledcolor] = useState(data?.led || "#ffff");

  const [acstatus, setacstatus] = useState(data?.ac.state == 1 ? "ON" : "OFF");

  const [isToggled, setisToggled] = useState(data?.bulb == 1 ? true : false);

  const toggleSwitch = () => {
    postbulb();
    setisToggled(!isToggled);
    console.log(isToggled); // Switch between true and false
  };

  const [isToggled1, setisToggled1] = useState(data?.bulb == 1 ? true : false);

  const toggleSwitch1 = () => {
    postac();
    setisToggled1(!isToggled1);
    console.log(isToggled1); // Switch between true and false
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="lg:text-3xl text-xl font-sans mt-10 lg:px-2 px-4 text-white text-center font-semibold ">
        Smart Home Control Panel
      </h1>
      <hr className="lg:w-[20%] w-[70%] border-[1px] shadow-xl mx-auto mt-[2px]" />
      <div className="my-20 lg:px-32 px-4 font-sans ">
        <div className="grid grid-cols-4 lg:gap-4 gap-3 ">
          <div className="hover:scale-105 duration-700 lg:px-4 px-[1px] flex lg:justify-between justify-center  space-x-4 shadow-lg items-center bg-slate-800/80 rounded-xl h-fit py-2 lg:py-0 lg:h-20 text-white mb-4">
            <p className="text-xl ">Fan</p>
            <FaFan className="text-lg " />
          </div>
          <div className="hover:scale-105 duration-700 lg:px-4 px-[1px] flex lg:justify-between justify-center  space-x-4 shadow-lg items-center bg-slate-800/80 rounded-xl h-fit py-2 lg:py-0 lg:h-20 text-white mb-4">
            <p className="text-xl ">Bulb</p>
            <GiLightBulb className="text-xl font-bold " />
          </div>
          <div className="hover:scale-105 duration-700 lg:px-4 px-[1px] flex lg:justify-between justify-center  space-x-4 shadow-lg items-center bg-slate-800/80 rounded-xl h-fit py-2 lg:py-0 lg:h-20 text-white mb-4">
            <p className="text-xl ">Led</p>
            <FaLightbulb className={`text-lg text-[${ledcolor}]`} />
          </div>
          <div className="hover:scale-105 duration-700 lg:px-4 px-[1px] flex lg:justify-between justify-center  space-x-4 shadow-lg items-center bg-slate-800/80 rounded-xl h-fit py-2 lg:py-0 lg:h-20 text-white mb-4">
            <p className="text-xl ">Fan</p>
            <TbAirConditioning className="text-xl mt-[5px] " />
          </div>
        </div>
        <div className="w-full mt-10 bg-slate-800/80 rounded-xl py-2 px-4 text-white">
          <h1 className="text-xl font-semibold my-4">Connection Status</h1>
          <div className="grid md:grid-cols-4 gap-4 grid-cols-1 ">
            <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
              <p className="text-xl ">Fan</p>
              <p>Speed : {Math.ceil(fanspeed)}</p>
            </div>

            <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
              <p className="text-xl ">Bulb</p>
              <p>Status : {isToggled ? "ON" : "OFF"}</p>
            </div>
            <div
              style={{ backgroundColor: ledcolor }}
              className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4"
            >
              <p className="text-xl ">LED</p>
              <p>Colour : {ledcolor}</p>
            </div>

            <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
              <p className="text-xl ">AC</p>
              <p>Status : {acstatus}</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 bg-slate-800/80 rounded-xl py-2 px-4 text-white">
          <h1 className="text-xl font-semibold my-4">
            Device Details and Action
          </h1>
          <div>
            <div className="relative fan">
              <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
                <p className="text-xl ">Fan</p>
                <p>Speed : {Math.ceil(fanspeed)}</p>
              </div>
              {!Actionfan ? (
                <button
                  onClick={() => setActionfan(true)}
                  className="absolute top-5 bg-blue-500 p-2 rounded right-4"
                >
                  Adjust Speed
                </button>
              ) : (
                <button
                  onClick={() => setActionfan(false)}
                  className="absolute top-5 bg-rose-500 p-2 rounded right-4"
                >
                  close Speed
                </button>
              )}
              {Actionfan && (
                <div className="h-28 lg:w-[30%] mx-auto">
                  <div className="flex justify-center items-center mt-12 space-x-4 ">
                    <div className="w-full relative ">
                      <label
                        htmlFor="unitcharges"
                        className=" font-semibold mb-2"
                      >
                        Fan Speed
                      </label>

                      <input
                        type="range"
                        name="unitcharges"
                        value={fanspeed * 20}
                        min="5"
                        max="100"
                        onChange={(e) => {
                          setfanspeed(e.target.value / 20);
                          postfan();
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer "
                      />
                      <span className="start-[1px] absolute -bottom-[12px] text-[.7rem] ">
                        |
                      </span>
                      <span className="start-0 absolute -bottom-[29px] text-[.7rem] ">
                        0
                      </span>
                      <span className="end-[1px] absolute -bottom-[12px] text-[.7rem]">
                        |
                      </span>
                      <span className="end-0 absolute -bottom-[29px] text-center text-[.7rem] ">
                        5
                      </span>
                    </div>
                    <div className="text-center  mt-4">
                      <input
                        value={Math.floor(fanspeed)}
                        type="text"
                        readOnly={true}
                        className="p-2 w-20  rounded-md border-2 text-center  placeholder:italic border-blue-400 bg-slate-800 text-white"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative bulb">
              <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4">
                <p className="text-xl ">Bulb</p>
                <p>Status : {isToggled ? "ON" : "OFF"}</p>
              </div>

              <button className="absolute top-5  right-4">
                <div className="flex items-center justify-center ">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Toggle Line */}
                      <input
                        type="checkbox"
                        className="sr-only"
                        onChange={toggleSwitch}
                        checked={isToggled}
                      />
                      {/* Line */}
                      <div
                        className={`block ${
                          isToggled ? " bg-yellow-100" : "bg-gray-100"
                        }  w-14 h-8  rounded-full`}
                      ></div>
                      {/* Dot */}
                      <div
                        className={`dot absolute left-1 top-1 bg-slate-700 w-6 h-6 rounded-full transition ${
                          isToggled
                            ? "transform translate-x-full bg-yellow-400"
                            : "bg-gray-900"
                        }`}
                      ></div>
                    </div>
                    {/* Optional: Text indicating the state */}
                    <div className="ml-3 text-gray-400 font-medium">
                      {isToggled ? "On" : "Off"}
                    </div>
                  </label>
                </div>
              </button>
            </div>
            <div className="relative led">
              <div
                style={{ backgroundColor: ledcolor }}
                className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-20 text-white mb-4"
              >
                <p className="text-xl ">LED</p>
                <span>Colour : {ledcolor} </span>
              </div>
              {!Actionled ? (
                <button
                  onClick={() => setActionled(true)}
                  className="absolute top-5 bg-blue-500 p-2 rounded right-4"
                >
                  Adjust colour
                </button>
              ) : (
                <button
                  onClick={() => setActionled(false)}
                  className="absolute top-5 bg-rose-500 p-2 rounded right-4"
                >
                  close colour
                </button>
              )}
              {Actionled && (
                <div
                  style={{ backgroundColor: ledcolor }}
                  className={`flex justify-center items-center my-10 py-4 space-y-4 flex-col `}
                >
                  <HexColorPicker color={ledcolor} onChange={setledcolor} />
                  <HexColorInput
                    color={ledcolor}
                    className="text-white p-2 bg-black border shadow-md"
                    onChange={setledcolor}
                  />
                  <button
                    onClick={() => {
                      setActionled(false);
                      postled();
                    }}
                    className="mx-auto rounded-md bg-slate-700/70 p-2 my-4 "
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>

            <div className="relative ac">
              <div className=" px-4 py-4 justify-between shadow-lg items-center bg-slate-700/80 rounded-xl h-36 text-white mb-4">
                <p className="text-xl ">AC</p>
                <p>status : {isToggled1 ? "ON" : "OFF"}</p>
                <p>Temperature : {number}</p>
              </div>

              <button className="absolute top-2 p-2 rounded right-4">
                <div className="flex ml-10 mb-2 items-center justify-center ">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Toggle Line */}
                      <input
                        type="checkbox"
                        className="sr-only"
                        onChange={toggleSwitch1}
                        checked={isToggled1}
                      />
                      {/* Line */}
                      <div
                        className={`block ${
                          isToggled1 ? " bg-yellow-100" : "bg-gray-100"
                        }  w-14 h-8  rounded-full`}
                      ></div>
                      {/* Dot */}
                      <div
                        className={`dot absolute left-1 top-1 bg-slate-white w-6 h-6 rounded-full transition ${
                          isToggled1
                            ? "transform translate-x-full bg-yellow-400"
                            : "bg-gray-700"
                        }`}
                      ></div>
                    </div>
                    {/* Optional: Text indicating the state */}
                    <div className="ml-3 text-gray-400 font-medium">
                      {isToggled1 ? "On" : "Off"}
                    </div>
                  </label>
                </div>
                <div className="flex flex-row justify-center items-center space-x-4">
                  <span
                    className="text-red-500 text-6xl hover:scale-95"
                    onClick={() => {
                      decrement();
                    }}
                  >
                    -
                  </span>

                  <span className="text-xl bg-slate-700/80 p-4 rounded-full font-semibold">
                    {number}
                  </span>

                  <span
                    className="text-red-500 hover:scale-95 font-semibold text-4xl"
                    onClick={() => {
                      increment();
                    }}
                  >
                    +
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardMain;
