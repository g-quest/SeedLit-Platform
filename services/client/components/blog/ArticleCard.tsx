import Link from 'next/link'
import Image from 'next/image'
export default function BlogArticleCard({
  post,
}: {
  post: {
    id: number
    title: string
    slug: string
    description: string
    image: string
    author: string
    date: string
  }
}) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white shadow-lg rounded-lg rounded-t-lg md:hover:scale-105 transition-all duration-300 pb-2 h-full">
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={300}
          className="w-full rounded-t-lg"
        />
        <div className="p-4">
          <div className="text-sm lg:text-xs text-gray-500 flex justify-between items-center">
            <p>{post.author}</p>
            <p>{post.date}</p>
          </div>
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="text-gray-600">{post.description}</p>
        </div>
      </div>
    </Link>
  )
}
