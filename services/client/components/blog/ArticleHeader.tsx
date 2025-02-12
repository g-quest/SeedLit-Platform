import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../core-ui/button'
export default function BlogArticleHeader({ article }) {
  const { cornerTag, image, author, publishingDate, title, shortDescription } =
    article.items[0].fields

  const imageURL = image.fields.file.url
  const date = new Date(publishingDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row gap-0 relative p-6 md:p-0">
      <div className="w-full md:w-1/2 flex justify-center items-center p-0 md:p-20 mb-6 md:mb-0">
        <div className="w-full">
          <p className="text-gray-500 text-sm">{date}</p>
          <h2 className="my-2">{title}</h2>
          <p className="text-gray-500 text-sm mb-1">{author}</p>
          <p>{shortDescription}</p>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 pb-[50%]">
        <Image
          src={`https:${imageURL}`}
          alt="Article Image"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl md:rounded-tl-none md:rounded-bl-none"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
      </div>
    </div>
  )
}
