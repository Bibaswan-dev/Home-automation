import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#070911] shadow-inner shadow-slate-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center mx-auto justify-center ">
      <span className="text-sm text-[#7abdff] sm:text-center">
        © 2024{" "}
        <a href="/" className="hover:underline hover:text-white">
          BDP Home Automation
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </div>
</footer>


  )
}

export default Footer