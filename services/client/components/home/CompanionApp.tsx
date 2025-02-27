'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function HomeCompanionApp() {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          imageRef.current.classList.add('in-view')
        } else {
          imageRef.current.classList.remove('in-view')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-white relative flex flex-col-reverse md:flex-row w-full h-auto min-h-screen">
      {/* Left Side: Scrolling Text (Full View on Mobile) */}
      <div className="w-full md:w-1/2 px-6 md:px-8 py-12 md:py-16 space-y-8 flex flex-col justify-center items-center">
        <div className="max-w-[550px]">
          <h2 className="mb-6 text-center">Turn Pages, Create Memories</h2>
          <p className="text-lg text-gray-700 mb-10 text-center">
            The Parent Companion App enriches the reading journey and empowers
            parents with tools to animate SeedLit stories alongside their
            children.
          </p>

          {/* Key Points */}
          <div className="bg-quaternary space-y-12 text-center mx-auto p-8 rounded-2xl shadow-gray-300 shadow-lg">
            <div>
              <h3 className="mb-5">Guided Reading Experience</h3>
              <div>
                <p>
                  Engage in meaningful discussions with thoughtful questions
                  during or after reading. The app provides simplified
                  explanations of key topics to help you communicate ideas
                  effectively.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5">Comprehensive Topic Coverage</h3>
              <div>
                <p>
                  The Parent Companion App breaks down big ideas like
                  perseverance and kindness, offering examples and explanations
                  tailored for children.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5">Interactive Chat Support</h3>
              <div>
                <p>
                  Use the app to inquire about stories or topics, receiving
                  real-time assistance with clarifications, examples, and
                  tailored discussion points.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5">Ease of Use</h3>
              <div>
                <p>
                  Designed for quick and easy access during or after reading
                  sessions, the app provides alerts and ideas for stimulating
                  follow-up conversations or activities inspired by the stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Sticky Image (Only Sticky on Desktop) */}
      <div className="w-full md:w-1/2 md:h-screen sticky md:top-0 flex items-center justify-center bg-gray-100 overflow-hidden">
        <Image
          src="/images/generated/robot-city.webp"
          alt="Storytelling Illustration"
          className="w-full h-auto md:h-full object-cover animate-zoom"
          width={2000}
          height={2000}
          ref={imageRef}
        />
      </div>
    </div>
  )
}
