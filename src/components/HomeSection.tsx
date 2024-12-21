export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex justify-center items-center w-full h-full flex-col relative z-20"
    >
      <p className="text-3xl md:text-5xl text-grey font-bold mb-6 text-center break-words max-w-full">
        TWÓJ WYMARZONY DOM
      </p>
      <p className="text-3xl md:text-5xl text-grey font-bold text-center break-words max-w-full">
        W IDEALNEJ LOKALIZACJI.
      </p>
      <div className="flex max-md:flex-col max-md:space-y-5 max-md:w-full max-md:items-center md:space-x-10 mt-8">
        <button className="py-3 w-56 max-md:w-3/5 bg-green4 text-grey rounded-2xl hover:bg-grey hover:text-green4 transition break-words max-w-full">
          Zobacz ofertę
        </button>
        <button className="py-3 w-56 max-md:w-3/5 bg-green4 text-grey rounded-2xl hover:bg-grey hover:text-green4 transition break-words max-w-full">
          Skontaktuj się
        </button>
      </div>
    </section>
  );
}
