'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HomePlatform() {
  const imageRef = useRef<HTMLImageElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          imageRef.current.classList.add('in-view')
        } else {
          // imageRef.current.classList.remove('in-view')
        }
      }

      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            ref.classList.add('in-view')
          } else {
            // ref.classList.remove('in-view')
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-primary px-6 py-6 md:py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-accent rounded-2xl mx-auto lg:max-w-[1200px] py-[3.25rem] lg:py-[6.25rem] gap-10 lg:gap-2 shadow-lg px-8 md:px-10">
        <h2 className="text-center mb-6">A New Kind of Storytelling</h2>
        <p className="text-center text-lg text-gray-700 mb-5 max-w-[600px] mx-auto">
          Step into a world where stories go beyond the page—sparking curiosity,
          strengthening connections, and empowering families.
        </p>
        <p className="text-center text-lg text-gray-700 mb-[2rem] lg:mb-8 max-w-[600px] mx-auto">
          Join a community of parents and storytellers exploring narratives that
          inspire lifelong learning, meaningful conversations, and shared
          wisdom.
        </p>

        <div
          ref={imageRef}
          className="flex justify-center animate-scale mb-[3rem] md:mb-[4rem]"
        >
          <div className="relative">
            <div className="bg-secondary w-[275px] h-[275px] md:w-[400px] md:h-[400px] rounded-2xl -translate-x-[0.5rem]" />
            <Image
              src="/images/generated/fam-4.webp"
              alt="SeedLit"
              width={400}
              height={400}
              className="rounded-2xl absolute w-[275px] h-[275px] top-[15px] left-[15px] md:w-[400px] md:h-[400px] md:top-[25px] md:left-[25px] shadow-2xl -translate-x-[0.5rem]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Stories Inspired by Real Life',
            'A Community for Parents',
            'Interactive Learning',
          ].map((title, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="relative animate-scale"
            >
              {/* <div
                className={`bg-${index === 0 ? 'secondary' : index === 1 ? 'primary' : 'secondary'} w-full h-full rounded-2xl absolute top-2 left-2 shadow-xl`}
              ></div> */}
              <div className="card bg-quaternary p-6 rounded-2xl shadow-gray-300 shadow-lg text-center hover:shadow-xl transition-shadow relative h-full">
                <h3 className="mb-4 md:h-[50px] md:mt-4">{title}</h3>
                <p>
                  {index === 0
                    ? 'Our stories are drawn from impactful adult literature, real-life parenting experiences, and original concepts.'
                    : index === 1
                      ? "SeedLit's Parents Hub helps parents share experiences, gain insights, and support each other."
                      : 'Our Companion App brings stories to life with guided discussion prompts, live chat support, and personalized recommendations.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
