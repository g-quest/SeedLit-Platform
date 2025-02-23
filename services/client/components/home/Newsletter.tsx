'use client'

import Section from '@/components/ui/Section'
import EmailSubscribe from '../EmailSubscribe'
import { useEffect, useRef } from 'react'

export default function HomeNewsletter() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
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
    <Section>
      <div className="lg:max-w-[1200px] px-5 lg:px-10 text-center">
        <div className="bg-tertiary py-8 px-6 rounded-lg shadow-xl mb-[3rem]">
          <h2 className="text-white">Release Timeline</h2>
          <p className="text-white text-lg mt-3 mb-5 max-w-[500px] mx-auto">
            Exciting features are on the horizon, set to launch in the upcoming
            quarters!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-6">
            {['Parent Hub', 'First Story Series', 'Companion App'].map(
              (title, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  className={`relative animate-scale`}
                >
                  <div className="bg-white p-4 rounded-2xl shadow-lg ">
                    <h3>{title}</h3>
                    <p>
                      {index === 0
                        ? 'Coming Soon!'
                        : index === 1
                          ? 'Q3 2025'
                          : 'Q4 2025'}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="bg-white py-8 px-6 rounded-lg shadow-xl">
          <h2>Join Our Newsletter</h2>
          <p className="text-lg text-gray-700 mt-3 mb-5 max-w-[500px] mx-auto">
            Subscribe to our newsletter to get the latest news, stories, and
            updates from SeedLit.
          </p>
          <div className="max-w-[350px] mx-auto">
            <EmailSubscribe listId="RS59ZZ" />
          </div>
        </div>
      </div>
    </Section>
  )
}
