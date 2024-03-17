"use client";
import React from "react";

function page() {
  return (
    <div className="py-4">
      <iframe
        className="w-full "
        src="https://docs.google.com/forms/d/e/1FAIpQLScI3vGpUFgQSLfaMIX7BVpLI0yaf3crra0hxQkXSmV8ZmUWPA/viewform?embedded=true"
        width={1000}
        height={640}

      >
        Loading…
      </iframe>
    </div>
  );
}

export default page;
