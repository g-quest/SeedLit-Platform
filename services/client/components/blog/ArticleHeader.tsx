'use client'

import Image from 'next/image'
export default function BlogArticleHeader(props) {
  const { image, title } = props
  const imageURL = image.fields.file.url

  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row gap-0 relative shadow-xl">
      {/* Background Image */}
      <div className="relative w-full pb-[56.25%] rounded-xl">
        <Image
          src={`https:${imageURL}`}
          alt="Article Image"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
      </div>

      {/* Title */}
      <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full z-10">
        <div className="text-center">
          <h1 className=" text-white text-4xl md:text-[4rem] lg:text-[6rem]">
            {title}
          </h1>
        </div>
      </div>

      {/* Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-25 z-5 rounded-xl" />
    </div>
  )
}
