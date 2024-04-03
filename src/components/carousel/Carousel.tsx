import React, { useEffect, useState } from "react";

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambio de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [current]); // El efecto se ejecuta cuando current cambia

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-hidden relative ">
      <div
        className={`md:h-[396px] xl:h-[579px] flex transition ease-out duration-1000`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`slide-${index}`} />
        ))}
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            key={`circle-${i}`}
            onClick={() => {
              setCurrent(i);
            }}
            className={`rounded-full w-2 h-2 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
