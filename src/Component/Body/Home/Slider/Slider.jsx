import React, { useState, useEffect } from 'react';
import Slider1 from './1.jpg';
import Slider2 from './2.jpg';
import Slider3 from './3.jpg';

const images = [
  { src: Slider1, text: 'First Slide Text' },
  { src: Slider2, text: 'Second Slide Text' },
  { src: Slider3, text: 'Third Slide Text' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] max-w-full mx-auto overflow-hidden animate-slideUp">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={img.src} alt={`Slide ${index}`} className="w-full h-[80vh] object-cover" />
            <div className="absolute inset-0 flex items-center justify-center animate-bounce">
              <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg animate-pulse ">{img.text}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
