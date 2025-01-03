"use client";
import Image from "next/image";
import houseOffer from "@/config/houseOffer";
import { FaDownload } from "react-icons/fa6";
import { useRef } from "react";

export default function Houses() {
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = (id: string) => {
    const container = listRef.current;
    const targetElement = document.getElementById(id);

    if (container && targetElement) {
      const containerTop = container.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top;

      const offset = targetTop - containerTop + container.scrollTop;
      container.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="houses"
      className="w-full flex flex-col items-center justify-between bg-grey relative scroll-mt-20"
    >
      <div className="w-full text-center pt-10 lg:py-10">
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 font-bold break-words max-w-full">
          DOMY
        </p>
      </div>

      <div className="w-full px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start gap-10 md:h-auto">
        <div className="max-md:hidden w-full md:w-1/2 flex justify-center md:justify-start items-start relative">
          <div className="w-11/12 relative">
            <Image
              src="/renderZGory.jpg"
              alt="Estate"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              width={533}
              height={400}
              data-aos="fade-down"
            />
            {houseOffer.map((house, index) => (
              <button
                key={index}
                onClick={() => scrollToOffer(`house-${house.numer}`)}
                className="absolute flex justify-center items-center text-white bg-green2 rounded-full text-sm font-bold hover:bg-green3 transition-all duration-200"
                style={{
                  top: `${house.y}%`,
                  left: `${house.x}%`,
                  width: "35px",
                  height: "35px",
                  transform: "translate(-50%, -50%)",
                }}
                data-aos="fade-down"
                data-aos-delay={`${200 + index * 100}`}
              >
                {house.numer}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={listRef}
          className="w-full md:w-1/2 flex justify-center items-start overflow-y-auto md:max-h-[70vh]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-full">
            {houseOffer.map((house, index) => (
              <div
                key={index}
                id={`house-${house.numer}`}
                className="flex flex-col bg-white p-4 rounded-lg shadow-md space-y-4"
              >
                <div>
                  <p className="text-green4 text-xl font-semibold">
                    Dom nr {house.numer}
                  </p>
                  <p className="text-gray-600">
                    Status:{" "}
                    <span
                      className={`${
                        house.status === "Dostępny"
                          ? "text-green-500"
                          : "text-red-500"
                      } font-semibold`}
                    >
                      {house.status}
                    </span>
                  </p>
                  <p className="text-gray-600">Metraż: {house.metraz} m²</p>
                  <p className="text-gray-600">Pokoje: {house.pokoje}</p>
                  <p className="text-gray-600">Poziom: {house.poziom}</p>
                  <p className="text-gray-600">Ogródek: {house.ogrodek} m²</p>
                  <p className="text-gray-600 font-bold">
                    Cena: {house.cena} zł
                  </p>
                </div>

                <div className="mt-4">
                  <a
                    className="w-full bg-green2 p-4 rounded-xl text-white flex justify-center items-center gap-2 hover:bg-green3 transition-all duration-200"
                    href={house.linkDoOferty}
                  >
                    <FaDownload className="w-5 h-5" />
                    <span className="text-base">Szczegóły oferty</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
