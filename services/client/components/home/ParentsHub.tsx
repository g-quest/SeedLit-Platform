'use client'

import { useEffect, useRef } from 'react'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import { Button } from '../core-ui/button'
import Link from 'next/link'
export default function HomeParentsHub() {
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
      <div className="max-w-[1200px] pt-5 pb-[4rem] md:py-[4rem]">
        <h2 className="text-center mb-6">Parenting as a Community</h2>
        <p className="text-lg text-center mb-8 md:mb-8 md:w-[600px] mx-auto text-gray-700">
          The Parents Hub is a vital part of the SeedLit ecosystem, fostering a
          welcoming community where parents come together to share personal
          stories, humor, and valuable lessons from their experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Shared Wisdom', image: '/images/generated/fam-5.webp' },
            {
              title: 'Dynamic Inspiration',
              image: '/images/generated/fam-2.webp',
            },
            {
              title: 'Tailored Resources',
              image: '/images/generated/fam-1.webp',
            },
            {
              title: 'Community Engagement',
              image: '/images/generated/fam-3.webp',
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="bg-white relative animate-scale shadow-lg max-w-[350px] md:max-w-full mx-auto"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full rounded-tl-xl rounded-tr-xl"
                  width={300}
                  height={300}
                />
                <h3 className="text-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center z-10">
                  {item.title}
                </h3>
                <div className="absolute inset-0 bg-black bg-opacity-40 z-5 rounded-tl-xl rounded-tr-xl" />
              </div>
              <div className="p-6 rounded-bl-xl rounded-br-xl text-center">
                <p>
                  {index === 0
                    ? 'Contribute to a collective library of insights, fostering connection and support.'
                    : index === 1
                      ? "Inspire SeedLit's narratives, bridging parenting wisdom with storytelling."
                      : index === 2
                        ? 'Discover stories organized by themes and parenting stages, tailored for your journey.'
                        : 'Connect, share, and learn in a supportive environment, enriching the SeedLit community.'}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-10">
          <Button className="bg-tertiary" asChild>
            <Link href="/parents-hub">Explore the Hub!</Link>
          </Button>
        </div> */}
      </div>
    </Section>
  )
}
