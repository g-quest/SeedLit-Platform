import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../core-ui/button'
export default function BlogFeatured({ featuredArticle }) {
  // console.log('FEATURED ARTICLE: ', featuredArticle)

  const { slug, image, author, publishingDate, title, shortDescription } =
    featuredArticle

  const imageURL = image.fields.file.url
  const date = new Date(publishingDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  // console.log('IMAGE URL: ', imageURL)

  return (
    <Link href={`/blog/article/${slug}`}>
      <div className="bg-white rounded-xl flex flex-col md:flex-row w-full gap-0 relative">
        <p className="absolute z-10 top-0 right-0 bg-primary text-white px-2 py-1 rounded-bl-xl rounded-tr-xl">
          Featured Article
        </p>
        <div className="relative w-full md:w-1/2 pb-[50%]">
          <Image
            src={`https:${imageURL}`}
            alt="Featured Post Image"
            className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tr-none"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-10 md:p-20">
          <div className="w-full">
            {/* <p className="text-gray-500 text-sm">{date}</p> */}
            <h2 className="my-2">{title}</h2>
            {/* <p className="text-gray-500 text-sm mb-1">{author}</p> */}
            <p className="w-full">{shortDescription}</p>
            <div className="mt-4">
              <Button className="bg-secondary text-white">View Article</Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
