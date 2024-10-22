"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Future Frontend Developer", "Web Scraper", "Back-End Developer"],
      typeSpeed: 50, // Speed of typing in milliseconds
      backSpeed: 50, // Speed of deleting in milliseconds
      loop: true, // Loop the typing animation
    };

    if (typingRef.current) {
      const typed = new Typed(typingRef.current, options);

      return () => {
        typed.destroy(); // Cleanup when component unmounts
      };
    }
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center bg-gradient-to-r from-cyan-500 to-violet-500">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="space-y-4">
          <p className="uppercase text-sm tracking-widest text-indigo-100">
            No one can whistle a symphony. It takes an orchestra to play it.
          </p>
          <h1 className="py-4 text-indigo-100 text-5xl hover:scale-110 duration-300">
            Hi, I&apos;m Saher Rameez
          </h1>
          <h1 className="py-2 text-gray-700 text-4xl">
            An Expert{" "}
            <span ref={typingRef} className="typing-element text-[#f4f2f2]"></span>
          </h1>
          <div className="space-x-4">
            <Link
              href="./about"
              className="text-white font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300 bg-[#171d72] hover:bg-[#297437] inline-block"
            >
              Learn More About Me
              <svg
                className="ml-2 h-4 w-4 inline-block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
