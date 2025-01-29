'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Section from '@/components/ui/Section'

export default function Hero() {
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
    <Section>
      <div className="rounded-2xl lg:bg-white mx-auto lg:max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:justify-center py-[3.25rem] lg:py-[6.25rem] gap-10 lg:gap-0">
        <div
          ref={imageRef}
          className="mx-auto order-2 lg:order-1 relative image-scale"
        >
          <div className="bg-[var(--warm-peach)] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-2xl" />
          <Image
            src="/images/generated/fam-4.webp"
            alt="SeedLit"
            width={400}
            height={400}
            className="rounded-2xl absolute w-[300px] h-[300px] top-[15px] left-[15px] lg:w-[400px] lg:h-[400px] lg:top-[25px] lg:left-[25px] shadow-2xl "
          />
        </div>
        <div className="text-center lg:text-left mx-auto order-1 lg:order-2">
          <h2 className="mb-5 lg:mb-10">A New Kind of Storytelling</h2>
          <p className="text-xl max-w-[500px] lg:max-w-none lg:text-2xl">
            <span className="text-primary font-bold font-heading text-3xl">
              SeedLit{' '}
            </span>
            transforms big ideas into imaginative, age-appropriate narratives
            that spark meaningful conversations between parents and children.
          </p>
        </div>
      </div>
    </Section>
  )
}
