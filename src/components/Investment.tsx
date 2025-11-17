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
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col w-full lg:w-4/5">
          <div className="p-6 sm:p-8 lg:w-5/6 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Komfort, przestrzeń i doskonała lokalizacja
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Kameralna inwestycja obejmuje nowoczesne mieszkania z dużymi ogródkami lub przestronnymi tarasami, 
              położone w spokojnej części Czarnochowic – tuż przy granicy z Wieliczką i Krakowem.
              To idealne miejsce dla osób szukających komfortu, prywatności oraz szybkiego dojazdu do większych miast.
            </p>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Odległości do miast
              </h3>
              <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                <li>Kraków – 12 km (do centrum), 2 km (do granic miasta)</li>
                <li>Wieliczka - około 2 km</li>
                <li>Dobry dostęp do dróg wylotowych i komunikacji podmiejskiej</li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg">
                W okolicy znajdują się sklepy, szkoły, przedszkola oraz liczne tereny spacerowe, które sprzyjają aktywnemu wypoczynkowi i relaksowi na świeżym powietrzu. 
                Wygodę codziennego przemieszczania się zapewniają także bliskie przystanki komunikacji podmiejskiej, umożliwiające szybkie połączenia z pobliskimi miejscowościami i centrum miasta. 
                Otoczenie uzupełnia spokojna zabudowa jednorodzinna, tworząca kameralny, przyjazny klimat i poczucie bezpieczeństwa.
              </p>
            </div>
            
          </div>
          <div className="pb-6 sm:pb-8 w-full text-white" data-aos="fade-right">
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
                Mieszkania zaprojektowane są tak, aby oferować maksymalną wygodę – posiadają osobne wejścia, 
                przemyślany układ pomieszczeń, przestrzeń zewnętrzną idealną do wypoczynku 
                oraz dostęp do ogrodzonego terenu z bramą sterowaną pilotem.
              </p>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Układ pomieszczeń:
              </h3>
                <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                  <li>Ustawne, dobrze doświetlone sypialnie</li>
                  <li>Duży salon z aneksem kuchennym</li>
                  <li>Funkcjonalna łazienka</li>
                  <li>Praktyczny przedpokój z wnękami na szafy</li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Dodatkowo do każdego lokalu:
              </h3>
                <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                  <li>Dla mieszkań dolnych – duży ogródek</li>
                  <li>Dla mieszkań górnych – obszerny taras i poddasze użytkowe</li>
                  <li>Miejsce postojowe w cenie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center pt-2 p-2 sm:px-10 gap-2 relative max-w-[1722px] overflow-hidden">
        <div className="bg-green2 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row w-full lg:w-4/5">
          <div className="p-6 sm:p-8 lg:w-5/6 text-white" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Wysoki standard wykonania
            </h2>
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg">
                Budynki powstają w wysokim standardzie, z wykorzystaniem trwałych, starannie dobranych materiałów oraz nowoczesnych technologii, które podnoszą zarówno komfort codziennego użytkowania, jak i bezpieczeństwo mieszkańców. 
                Całość tworzy harmonijne, funkcjonalne przestrzenie, spełniające oczekiwania współczesnych użytkowników.
              </p>
            </div>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Instalacje:
              </h3>
                <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6">
                  <li>Ogrzewanie podłogowe w całym mieszkaniu</li>
                  <li>Piec gazowy dwufunkcyjny Vissmann Vitodens 050</li>
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
                  <li>Ławy fundamentowe żelbetowe wylewane na mokro</li>
                  <li>Konstrukcja dachu krokwiowo-płatwiowa pokryta dachówką ceramiczną Creaton Simpla</li>
                  <li>Stolarka okienna 3-szybowa Okno-Plast</li>
                  <li>Ocieplenie elewacji styropianem 20 cm i wykończenie tynkiem silikonowo-silikatowym</li>
                  <li>Podjazdy wykonane z kostki brukowej</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
