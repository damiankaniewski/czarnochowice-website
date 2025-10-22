import {
  FaHammer,
  FaLeaf,
  FaTree,
  FaCar,
  FaSolarPanel,
  FaLock,
  FaMapMarkerAlt,
  FaMicrochip,
} from "react-icons/fa";
export default function Profits() {
  const profitItems = [
    {
      icon: <FaHammer className="text-green4 text-5xl" />,
      title: "Wysoka jakość wykonania",
      description: "Ceramiczne ściany Leier, dachówka Creaton Simpla oraz solidne ocieplenie zapewniają trwałość i komfort przez lata.",
      delay: 0,
    },
    {
      icon: <FaLeaf className="text-green4 text-5xl" />,
      title: "Zielona, spokojna okolica",
      description: "Cicha część Czarnochowic, blisko natury i z szybkim dojazdem do Wieliczki oraz Krakowa.",
      delay: 100,
    },
    {
      icon: <FaTree className="text-green4 text-5xl" />,
      title: "Prywatne ogródki i duże tarasy",
      description: "Każde mieszkanie posiada prywatny ogródek lub przestronny taras — idealny do relaksu i spotkań.",
      delay: 200,
    },
    {
      icon: <FaSolarPanel className="text-green4 text-5xl" />,
      title: "Przygotowanie pod fotowoltaikę",
      description: "Instalacja przystosowana do montażu paneli fotowoltaicznych — energooszczędność w standardzie.",
      delay: 300,
    },
    {
      icon: <FaLock className="text-green4 text-5xl" />,
      title: "Ogrodzona przestrzeń i prywatność",
      description: "Zamknięty teren z bramą na pilota i ogrodzeniem zapewnia poczucie bezpieczeństwa.",
      delay: 400,
    },
    {
      icon: <FaCar className="text-green4 text-5xl" />,
      title: "Własne miejsca postojowe",
      description:
        "Do każdego mieszkania przypisane jest prywatne miejsce postojowe, z możliwością dodatkowego.",
      delay: 500,
    },
    {
      icon: <FaMicrochip className="text-green4 text-5xl" />,
      title: "Nowoczesne technologie",
      description: "W standardzie: piec gazowy Viessmann, instalacje teletechniczne, alarmowe i domofonowe.",
      delay: 600,
    },
    {
      icon: <FaMapMarkerAlt className="text-green4 text-5xl" />,
      title: "Doskonała lokalizacja",
      description:
        "Świetny dojazd do Krakowa i Wieliczki, w otoczeniu terenów zielonych, sklepów i szkół.",
      delay: 700,
    },
  ];
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profitItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col text-green4 justify-center items-center px-4 space-y-3 max-md:pt-5"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="max-md:h-full h-20 flex justify-center items-center">
                {item.icon}
              </div>
              <div className="max-md:h-full h-12 lg:h-24  xl:h-16 flex justify-center items-center">
                <p className="font-semibold text-lg xl:text-xl text-center">
                  {item.title}
                </p>
              </div>
              <div className="max-md:h-full h-16 lg:h-28 xl:h-24 flex justify-center items-center">
                <p className=" text-base xl:text-lg text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
