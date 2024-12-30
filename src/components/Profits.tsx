import {
  FaMapPin,
  FaTree,
  FaCouch,
  FaHeart,
  FaSolarPanel,
  FaLock,
} from "react-icons/fa";
import { FaTemperatureHalf, FaHouseChimneyWindow } from "react-icons/fa6";
export default function Profits() {
  return (
    <section
      id="profits"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold break-words max-w-full">
          PROFITY
        </p>
      </div>
      <div className="flex w-full h-full flex-col p-10">
        <div className="flex w-full flex-col md:flex-row justify-center items-start h-full">
          <div
            className="w-full h-full md:w-1/4 flex flex-col text-green4 justify-center items-center px-4 space-y-3"
            data-aos="fade-up"
          >
            <FaMapPin className="text-green4 text-5xl " />
            <p className="font-semibold text-lg text-center ">
              Blisko Krakowa i pełnej infrastruktury miejskiej
            </p>
            <p className="text-sm text-center ">
              Dogodna lokalizacja w pobliżu Krakowa i kluczowych miejsc, z
              łatwym dostępem do autostrady.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 flex flex-col text-green4 justify-center items-center px-4 space-y-3 pt-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaTree className="text-green4 text-5xl " />
            <p className="font-semibold text-lg text-center ">
              Spokój i natura z dala od miejskiego zgiełku
            </p>
            <p className="text-sm text-center ">
              Zielona okolica łącząca ciszę i wygodę.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 flex flex-col text-green4 justify-center items-center px-4 space-y-3 pt-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaCouch className="text-green4 text-5xl " />
            <p className="font-semibold text-lg text-center ">
              Przestronne wnętrza i nowoczesne rozwiązania architektoniczne
            </p>
            <p className="text-sm text-center ">
              Domy z przestronnymi pokojami i funkcjonalnym układem.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 flex flex-col text-green4 justify-center items-center px-4 space-y-3 pt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaHeart className="text-green4 text-5xl " />
            <p className="font-semibold text-lg text-center ">
              Prywatne, ogrodzone działki
            </p>
            <p className="text-sm text-center ">
              Działki zapewniające prywatność i przestrzeń do relaksu.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-center items-start h-full md:pt-6">
          <div
            className="w-full md:w-1/4 flex flex-col text-green4 justify-center items-center px-4 space-y-3 pt-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaSolarPanel className="text-green4 text-5xl" />
            <p className="font-semibold text-lg text-center">
              Pompa ciepła, rekuperacja, przygotowanie pod fotowoltaikę{" "}
            </p>
            <p className="text-sm text-center">
              Energooszczędne technologie redukujące koszty.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 flex flex-col text-green4 justify-center items-center px-4 space-y-3 pt-5"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FaTemperatureHalf className="text-green4 text-5xl" />
            <p className="font-semibold text-lg text-center">
              Wysoka izolacja termiczna (50 cm ściany)
            </p>
            <p className="text-sm text-center">
              Ściany o wyjątkowej izolacji gwarantujące oszczędność energii.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 flex flex-col text-green4 justify-center items-center px-4 space-y-3 pt-5"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaLock className="text-green4 text-5xl" />
            <p className="font-semibold text-lg text-center">Zamknięty teren</p>
            <p className="text-sm text-center">
              Ogrodzona przestrzeń z przesuwaną bramą wjazdową i furtką.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 flex flex-col text-green4 justify-center items-center px-4 space-y-3 pt-5"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <FaHouseChimneyWindow className="text-green4 text-5xl" />
            <p className="font-semibold text-lg text-center">
              Elektryczne rolety
            </p>
            <p className="text-sm text-center">
              Rolety podtynkowe sterowane elektrycznie dla większego
              bezpieczeństwa i wygody.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
