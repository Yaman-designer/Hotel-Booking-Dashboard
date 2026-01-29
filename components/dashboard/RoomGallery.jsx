"use client";

import { useState } from "react";

export default function RoomGallery({ room }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < room.images.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-[1000px] overflow-hidden">
      {/* Slider */}
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${index * 288}px)`,
        }}
      >
        {room.images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Room ${i}`}
            className="w-72 rounded-lg shadow-md flex-shrink-0"
          />
        ))}
      </div>
      {/* buttons */}
      <div className=" flex  items-center justify-end mt-4 gap-2">
        {/* Prev */}
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className="
                   bg-primary text-white w-9 h-9 rounded-full
                   flex items-center justify-center shadow-md
                   disabled:opacity-40"
        >
          ←
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          disabled={index === room.images.length - 1}
          className="
                   bg-primary text-white w-9 h-9 rounded-full
                   flex items-center justify-center shadow-md
                   disabled:opacity-40"
        >
          →
        </button>
      </div>
    </div>
  );
}
