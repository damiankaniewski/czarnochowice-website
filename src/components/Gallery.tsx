"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import galleryImages from "@/config/galleryImages";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-16"
    >
      <div className="w-full px-10 pt-10 flex justify-center items-center relative overflow-hidden ">
        <button
          onClick={goToPrevious}
          className="absolute left-2 bg-green2 text-white p-4 rounded-full shadow-lg hover:bg-green3 focus:outline-none z-10 transition-all duration-300 ease-in-out"
        >
          &lt;
        </button>

        <div className="w-full md:w-3/5 h-auto overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                } flex justify-center items-center`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  objectFit="cover"
                  width={1000}
                  height={800}
                  className="rounded-lg shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToNext}
          className="absolute right-2 bg-green2 text-white p-4 rounded-full shadow-lg hover:bg-green3 focus:outline-none z-10 transition-all duration-300 ease-in-out"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center items-center mt-3 space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-green2" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
