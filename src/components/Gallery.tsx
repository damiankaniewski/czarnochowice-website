"use client";
import { useState } from "react";
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

  return (
    <section
      id="gallery"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div className="w-full px-10 py-10 flex justify-center items-center relative overflow-hidden ">
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
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  objectFit="cover"
                  width={1200}
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
    </section>
  );
}
