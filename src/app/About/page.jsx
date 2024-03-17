"use client";
import React from "react";
import { BsInstagram,BsLinkedin } from "react-icons/bs";
import img from "../images/IMG_20221229_220623.jpg";
import Image from "next/image";
import img2 from "../images/prof1.jpg";

function page() {
  return (
    <div className="pb-10 ">
      <div className="2xl:container  2xl:mx-auto kjgciuguig lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-full flex flex-col justify-center">
            <div className="w-fit mx-auto">
              <h1 className="animate-pulse delay-100 px-2 text-2xl pt-4 lg:text-5xl font-semibold leading-9 text-center bg-gradient-to-r from-blue-500 to-indigo-700 bg-clip-text text-transparent pb-4">
                Welcome to Suich
              </h1>
              <hr className="w-full" />
            </div>
            <h1 className="text-xl pt-10 lg:text-3xl font-sans font-semibold leading-9 text-center text-white  pb-4">
              Home Automation made Easyyy
            </h1>
            <p className="font-normal text-base py-2 font-sans lg:text-xl leading-6 text-center px-20  text-white ">
            We are dedicated to providing innovative solutions for home automation, allowing users like you to effortlessly control your fan, bulb, LED lights, and AC from anywhere. Our user-friendly interface puts the power in your hands, enabling you to create the perfect ambiance and enhance energy efficiency with just a few clicks. Join us on our journey to revolutionize the way you interact with your home environment.
            </p>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default page;
