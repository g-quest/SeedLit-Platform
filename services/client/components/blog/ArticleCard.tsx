'use client'

import Link from 'next/link'
import Image, { ImageLoader, ImageLoaderProps } from 'next/image'
import { usePathname } from 'next/navigation'

export default function BlogArticleCard({ article }) {
  // console.log('ARTICLE: ', article.fields)

  const {
    slug,
    cornerTag,
    image,
    author,
    publishingDate,
    title,
    shortDescription,
  } = article.fields

  const imageURL = image.fields.file.url

  const contentfulImageLoader: ImageLoader = ({ src }: ImageLoaderProps) => {
    return `${src}`
  }

  const date = new Date(publishingDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const pathname = usePathname()
  const showCornerTag = cornerTag && pathname === '/blog'

  return (
    <Link href={`/blog/article/${slug}`}>
      <div className="bg-white shadow-lg rounded-lg rounded-t-lg md:hover:scale-105 transition-all duration-300 pb-2 h-full relative">
        {showCornerTag && (
          <p className="absolute top-0 right-0 bg-primary text-white px-2 py-1 rounded-bl-lg rounded-tr-lg">
            {cornerTag}
          </p>
        )}
        <Image
          loader={contentfulImageLoader}
          src={`https:${imageURL}`}
          alt={title}
          width={500}
          height={500}
          className="w-full rounded-t-lg"
        />
        <div className="p-4">
          <div className="text-sm lg:text-xs text-gray-500 flex justify-between items-center">
            <p>{author}</p>
            <p>{date}</p>
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{shortDescription}</p>
        </div>
      </div>
    </Link>
  )
}
