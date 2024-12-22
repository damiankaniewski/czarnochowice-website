import Image from "next/image";
import houseOffer from "@/config/houseOffer";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
export default function Houses() {
  return (
    <section
      id="houses"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div>
        <p className="text-6xl text-green4 pt-10 font-bold break-words max-w-full">
          DOMY
        </p>
      </div>
      <div className="w-full px-10 pt-10 flex flex-row ">
        <div className="w-3/4 flex justify-end items-start">
          <div className="w-10/12">
            <Image
              src="/renderZGory.jpg"
              alt="Estate"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg shadow-lg w-1/2"
              width={533}
              height={400}
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-start">
          <div className="w-3/4 flex flex-col justify-start items-center space-y-4 h-3/4 overflow-y-auto">
            {houseOffer.map((house, index) => (
              <div className="flex flex-row w-full bg-white p-4 rounded-lg shadow-md space-y-2">
                <div key={index} className="w-3/5 ">
                  {" "}
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
                    Cena: {house.cena} PLN
                  </p>
                </div>
                <div>
                  <Link
                    className=" w-full bg-green2 p-4 rounded-xl text-white flex justify-center items-center flex-col "
                    href={house.linkDoOferty}
                  >
                    <FaDownload className="size-4" />
                    <p className="text-base">Szczegóły oferty</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
