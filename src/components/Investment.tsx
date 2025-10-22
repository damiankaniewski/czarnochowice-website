"use client";
import Image from "next/image";

export default function Investment() {

  return (
    <section
      id="investment"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold text-center break-words max-w-full">
          O INWESTYCJI
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center pt-4 p-2 sm:px-10 gap-2 relative max-w-[1722px] overflow-hidden">
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5">
          <div className="p-6 sm:p-8 lg:w-5/6 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Komfort, przestrzeń i doskonała lokalizacja
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Nowoczesne, energooszczędne mieszkania w zabudowie bliźniaczej położone w spokojnej części Czarnowchowic – tuż przy granicy z Wieliczką i Krakowem.
              Inwestycja obejmuje cztery przestronne lokale o powierzchni od 67 do 117 m², z prywatnymi ogródkami lub dużymi tarasami.
              To idealne miejsce dla osób, które cenią ciszę, bliskość natury i szybki dojazd do miasta.
            </p>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Odległości do miast
              </h3>
              <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                <li>Kraków – 25 km (do centrum), 4,5 km (do granic miasta)</li>
                <li>Niepołomice - 5 km</li>
                <li>Wieliczka - 6,5 km</li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg">
                W okolicy znajdują się sklepy, szkoły, przedszkola, restauracje i tereny spacerowe, co sprawia, że inwestycja zapewnia pełną wygodę codziennego życia.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-green4 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-green1 transition"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/drDUCJEee93zpkXm7",
                    "_blank"
                  )
                }
              >
                Zobacz na mapie
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-2 sm:px-10 gap-2 relative max-w-[1722px]">
        <div className="lg:hidden relative flex justify-center items-center overflow-hidden">
          <Image
            data-aos="fade-right"
            src="/Czarnochowice-tyl-25.png"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg mb-3"
            width={533}
            height={400}
          />
        </div>

        <div className=" max-lg:hidden max-w-[450px] max-h-[413px] relative md:absolute md:w-3/10 lg:-left-0 lg:ml-32 flex justify-center items-center -mt-20 md:mt-0">
          <Image
            src="/Czarnochowice-tyl-25.png"
            alt="Modern houses"
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg w-full"
            width={533}
            height={400}
            data-aos="fade-right"
          />
        </div>
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5 justify-end ">
          <div className="p-6 sm:p-8 lg:w-3/5 text-white" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ">
              Prywatność i funkcjonalność
            </h2>
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg">
                Każde mieszkanie posiada niezależne wejście i pełną własność działki.
                Cały teren inwestycji jest ogrodzony, a wjazd odbywa się przez bramę sterowaną pilotem, co zapewnia poczucie bezpieczeństwa i prywatności.
              </p>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Układ pomieszczeń:
              </h3>
                <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                  <li>Ławy fundamentowe żelbetowe wylewane na mokro</li>
                  <li>Ściany fundamentowe murowane i zalewane betonem wodoszczelnym W8</li>
                  <li>Izolacja przeciwwilgociowa dwuskładnikowa i ocieplenie styrodurem gr. 15 cm</li>
                  <li>Ściany z pustaka ceramicznego Leier 25,12 cm</li>
                  <li>Dach krokwiowo–płatwiowy, dachówka ceramiczna Creaton Simpla (antracyt)</li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg">
                Każdemu lokalowi przynależy miejsce postojowe w cenie, z opcją dokupienia kolejnego.
                Dodatkowym atutem jest duży ogród (ok. 400 m²) lub taras, które zapewniają pełną prywatność i przestrzeń do wypoczynku.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center p-2 sm:px-10 gap-2 relative max-w-[1722px]">
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5">
          <div className="p-6 sm:p-8 lg:w-5/6 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Wysoki standard wykonania
            </h2>
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg">
                Budynki powstają w technologii tradycyjnej z użyciem ceramiki Leier 25,12 cm, co gwarantuje trwałość, energooszczędność i doskonałą izolację akustyczną.
                Inwestycja wyróżnia się solidnym wykonaniem oraz dbałością o każdy detal.
              </p>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Instalacje:
              </h3>
                <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                  <li>Ogrzewanie podłogowe w całym domu</li>
                  <li>Instalacja c.o., ciepłej i zimnej wody użytkowej z piecem gazowym Viessmann Vitodens</li>
                  <li>Instalacja elektryczna, w tym trójfazowa</li>
                  <li>Instalacje RTV, Internet, alarmowa i domofonowa</li>
                  <li>Instalacja odgromowa</li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Wykończenie:
              </h3>
                <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                  <li>Tynki gipsowe maszynowe</li>
                  <li>Wylewki cementowe</li>
                  <li>Stolarka okienna 3-szybowa Ono-Plast / Okno-Plast</li>
                  <li>Ocieplenie elewacji styropianem 20 cm, tynk Ceresit silikonowo-silikatowy</li>
                  <li>Podjazdy i dojścia z kostki brukowej</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
