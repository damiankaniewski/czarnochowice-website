"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else if (scrollPosition === 0) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 ${
        isScrolled ? "bg-green2" : "bg-transparent"
      }  transition-colors duration-300`}
    >
      <div
        className={`md:px-8 py-4 flex justify-between items-center w-full ${
          isMenuOpen ? "bg-green2" : ""
        }`}
      >
        <div className="flex items-center w-56">
          <Link href="#home">
            <img src="/logo.png" alt="Logo" className="h-16 w-16 mr-2" />
          </Link>
        </div>

        <nav className="hidden md:flex justify-center space-x-14 text-xl w-dvw">
          <Link
            href="#investment"
            className="block text-white hover:text-green1"
          >
            O inwestycji
          </Link>
          <Link href="/" className="block text-white hover:text-green1">
            Profity
          </Link>
          <Link href="/" className="block text-white hover:text-green1">
            Domy
          </Link>
          <Link href="/" className="block text-white hover:text-green1">
            Galeria
          </Link>
        </nav>
        <div className="w-1/6 flex justify-end">
          <nav
            className={`max-md:hidden text-xl bg-green2 p-3 rounded-2xl w-40 text-center hover:bg-green4 ${
              isScrolled ? "bg-green4" : ""
            }`}
          >
            <Link href="/" className={"block text-white w-full"}>
              Kontakt
            </Link>
          </nav>
        </div>

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
        <div className="fixed inset-0 flex flex-col items-center top-24 pt-4 bg-green2  shadow-md z-30 w-screen h-3/5">
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green4 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O inwestycji</p>
          </Link>
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green4 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Profity</p>
          </Link>
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green4 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Domy</p>
          </Link>
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green4 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Galeria</p>
          </Link>
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-green4 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Kontakt</p>
          </Link>
        </div>
      )}
    </header>
  );
}
