'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

export default function HomeStorytelling() {
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
    <div className=" bg-white relative flex flex-col md:flex-row w-full h-auto min-h-screen">
      {/* Left Side: Sticky Image (Only Sticky on Desktop) */}
      <div className="w-full md:w-1/2 md:h-screen sticky md:top-0 flex items-center justify-center bg-gray-100 overflow-hidden">
        <Image
          src="/images/generated/underwater-city.webp"
          alt="Storytelling Illustration"
          className="w-full h-auto md:h-full object-cover animate-zoom"
          width={2000}
          height={2000}
          ref={imageRef}
        />
      </div>

      {/* Right Side: Scrolling Text (Full View on Mobile) */}
      <div className="w-full md:w-1/2 px-6 md:px-8 py-12 md:py-16 space-y-8 flex flex-col justify-center items-center">
        <div className="max-w-[550px]">
          <h2 className="mb-6 text-center">
            Transforming Big Ideas into Magical Stories
          </h2>
          <p className="text-lg text-gray-700 mb-5 text-center">
            SeedLit transforms impactful lessons into imaginative,
            age-appropriate stories for children. These stories are designed to
            nurture curiosity, resilience, and empathy, making complex ideas
            approachable and fun for young minds.
          </p>
          {/* Key Points */}
          <div className="space-y-12 text-center mx-auto border border-slate-200 p-8 rounded-2xl shadow-gray-300 shadow-lg">
            <div>
              <h3 className="mb-5 text-tertiary">Multi-Source Inspiration</h3>
              <div>
                <ul className="list-disc pl-6 text-left">
                  <li>
                    <p>
                      <strong>Impactful Adult Literature:</strong> SeedLit
                      adapts complex ideas from carefully selected adult books
                      into imaginative stories children can relate to.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Parent Experiences:</strong> Stories inspired by
                      real-world parenting insights shared through the Parents
                      Hub.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Original Concepts:</strong> Whimsical and creative
                      tales crafted to teach timeless lessons, like kindness,
                      problem-solving, and perseverance.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-tertiary">Engaging & Relatable</h3>
              <div>
                <p>
                  Every story is written to captivate children while providing
                  discussion prompts and context for parents, helping them guide
                  meaningful conversations.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-tertiary">Playful & Accessible</h3>
              <div>
                <p>
                  Big ideas are presented in ways that resonate with children's
                  experiences, sparking their natural curiosity and sense of
                  wonder.
                </p>
              </div>
            </div>
          </div>
          <div className="text-lg font-bold text-center mt-10 bg-secondary text-white p-4 rounded-2xl w-[350px] mx-auto">
            <p>First set of stories coming soon.</p>
            <p>Stay tuned!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
