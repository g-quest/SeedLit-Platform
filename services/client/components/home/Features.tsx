'use client'

import { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'

export default function HomeFeatures() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            ref.classList.add('in-view')
          } else {
            ref.classList.remove('in-view')
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
    <Section>
      <div className="lg:max-w-[1200px] px-5 lg:px-10 py-[3.25rem] lg:py-[6.25rem]">
        <h2 className="text-center mb-8 md:mb-[3.125rem]">
          More Than Stories: A Platform for Growth
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Stories Inspired by Real Life',
            'Interactive Learning',
            'A Community for Parents',
          ].map((title, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`relative animate-scale delay-${index}`}
            >
              <div
                className={`bg-${index === 0 ? 'secondary' : index === 1 ? 'primary' : 'secondary'} w-full h-full rounded-2xl absolute top-2 left-2`}
              ></div>
              <div className="card bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow relative h-full">
                <h3 className="mb-4 md:h-[50px] md:mt-4">{title}</h3>
                <p>
                  {index === 0
                    ? 'Our stories are drawn from impactful adult literature, real-life parenting experiences, and original concepts.'
                    : index === 1
                      ? 'Our Companion App brings stories to life with guided discussion prompts, live chat support, and personalized recommendations.'
                      : "SeedLit's Parent Insights Hub helps parents share experiences, gain insights, and support each other."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
