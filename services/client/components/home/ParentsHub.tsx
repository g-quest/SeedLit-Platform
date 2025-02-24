'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

export default function HomeParentsHub() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const slickSettings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3.15,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2.15,
          dots: true,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          dots: true,
          centerMode: true,
        },
      },
    ],
  }

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
    <div className="bg-secondary px-6 py-6 md:py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full bg-accent rounded-2xl mx-auto lg:max-w-[1200px] py-[3.25rem] lg:py-[6.25rem] gap-10 lg:gap-2 shadow-lg px-4 md:px-6">
        <h2 className="text-center mb-6">Parenting as a Community</h2>
        <p className="text-lg text-center mb-8 md:mb-8 md:w-[600px] mx-auto text-gray-700 ">
          The Parents Hub is a vital part of the SeedLit ecosystem, fostering a
          welcoming community where parents come together to share personal
          stories, humor, and valuable lessons from their experiences.
        </p>
        <Slider {...slickSettings}>
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
            <div key={index} className="px-2">
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-tl-xl rounded-tr-xl"
                  width={300}
                  height={300}
                />
                <h3 className="text-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center z-10">
                  {item.title}
                </h3>
                <div className="absolute inset-0 bg-black bg-opacity-40 z-5 rounded-tl-xl rounded-tr-xl" />
              </div>
              <div className="bg-quaternary py-4 px-2 text-center h-[130px] rounded-bl-xl rounded-br-xl">
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
        </Slider>
        {/* <div className="flex justify-center mt-10">
          <Button className="bg-tertiary" asChild>
            <Link href="/parents-hub">Explore the Hub!</Link>
          </Button>
        </div> */}
      </div>
    </div>
  )
}
