"use client";

import { useState, useEffect, useCallback } from "react";

const images = [
  {
    type: "image",
    url: "/assets/header_banner.jpg",
    alt: "Luxury Vehicle 1",
    title: "Lincoln MKT Stretch",
    description: "Ultimate comfort and luxury for up to 8-10 passengers",
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/Td27vOsGSyU?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Frpclimo.com&widgetid=3",
    alt: "Luxury Vehicle 2",
    title: "Executive Sedan",
    description: "Perfect for business travel and airport transfers",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative w-full">
      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
        {/* Images and Videos */}
        {images.map((media, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out
              ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            {media.type === "image" ? (
              <img
                src={media.url}
                alt={media.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={media.url}
                title={media.alt}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
