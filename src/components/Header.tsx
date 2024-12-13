"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-10">
      <div className="px-8 py-4 flex justify-between items-center w-full">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-16 w-16 mr-2" />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-10 justify-center w-full text-xl">
          <Link href="/" className="text-white hover:text-lightOrange">
            O inwestycji
          </Link>
          <Link href="/" className="text-white hover:text-lightOrange">
            Profity
          </Link>
          <Link href="/" className="text-white hover:text-lightOrange">
            Domy
          </Link>
          <Link href="/" className="text-white hover:text-lightOrange">
            Galeria
          </Link>
          <Link href="/" className="text-white hover:text-lightOrange">
            Kontakt
          </Link>
        </nav>

        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-5 py-4 bg-darkGreen shadow-md">
          <Link
            href="/"
            className="text-white hover:text-lightOrange hover:bg-darkOrange w-full flex justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            O inwestycji
          </Link>
          <Link
            href="/"
            className="text-white hover:text-lightOrange hover:bg-darkOrange w-full flex justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Profity
          </Link>
          <Link
            href="/"
            className="text-white hover:text-lightOrange hover:bg-darkOrange w-full flex justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Domy
          </Link>
          <Link
            href="/"
            className="text-white hover:text-lightOrange hover:bg-darkOrange w-full flex justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Galeria
          </Link>
          <Link
            href="/"
            className="text-white hover:text-lightOrange hover:bg-darkOrange w-full flex justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
