'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HomeHero() {
  const slides = [
    '/images/generated/castle-town.webp',
    '/images/generated/bug-village.webp',
    '/images/generated/ancient-asian-city.webp',
    '/images/generated/enchanted-forest.webp',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 2500) // Change slide every 2.5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide}')`,
              transition: 'opacity 1s ease-in-out', // Ensure transition is applied
            }}
          ></div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center min-h-[500px]">
        <h1 className="text-white text-6xl lg:text-8xl font-bold drop-shadow-lg">
          Big Ideas, Little Minds
        </h1>
        <p className="text-gray-200 text-xl lg:text-3xl max-w-[400px] lg:max-w-[600px] pt-2 md:pt-4 drop-shadow-md">
          Timeless lessons through imaginative narratives for children.
        </p>
      </div>

      {/* Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>
    </div>
  )
}
