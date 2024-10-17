"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <header
          className={`sticky top-0 text-4xl text-white bg-violet-700 "fixed shadow-xl ease-in-out duration-300" : "fixed w-full h-20 z-[100] ${
            isMenuOpen
              ? "fixed shadow-xl ease-in-out duration-300"
              : "fixed w-full h-30 z-[100]"
          }`}
        >
          <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href="/">
              <Image src ="/logo.png" alt="Logo" width={70} height={70} />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-700 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${isMenuOpen ? "block" : "hidden"} md:w-auto md:flex`}
            >
              <ul className="md:flex">
                <li className="ml-10 text-sm uppercase hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="ml-10 text-sm uppercase hover:underline">
                  <Link href="/about">About</Link>
                </li>
                <li className="ml-10 text-sm uppercase hover:underline">
                  <Link href="/skills">Skills</Link>
                </li>
                <li className="ml-10 text-sm uppercase hover:underline">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}