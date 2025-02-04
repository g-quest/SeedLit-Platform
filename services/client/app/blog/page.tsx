import { Card, CardContent } from '@/components/core-ui/card'
import BlogFeatured from '@/components/blog/Featured'
import BlogArticleCard from '@/components/blog/ArticleCard'

const posts = [
  {
    id: 1,
    title: 'My First Post',
    description: 'This is the description of my first post. It is a long description that is a bit longer than the others.',
    slug: 'my-first-post',
    image: '/images/generated/fam-4.webp',
    author: 'Greg Cuesta',
    date: 'Feb 5, 2025',
  },
  {
    id: 2,
    title: 'My Second Post',
    description: 'This is the description of my second post',
    slug: 'my-second-post',
    image: '/images/generated/fam-4.webp',
    author: 'Greg Cuesta',
    date: 'Feb 5, 2025',
  },
  {
    id: 3,
    title: 'My Third Post',
    description: 'This is the description of my third post',
    slug: 'my-third-post',
    image: '/images/generated/fam-4.webp',
    author: 'Greg Cuesta',
    date: 'Feb 5, 2025',
  },
  {
    id: 4,
    title: 'My Fourth Post',
    description: 'This is the description of my fourth post',
    slug: 'my-fourth-post',
    image: '/images/generated/fam-4.webp',
    author: 'Greg Cuesta',
    date: 'Feb 5, 2025',
  },
  {
    id: 5,
    title: 'My Fifth Post',
    description: 'This is the description of my fifth post',
    slug: 'my-fifth-post',
    image: '/images/generated/fam-4.webp',
    author: 'Greg Cuesta',
    date: 'Feb 5, 2025',
  },
]

export default function Blog() {
  return (
    <div className="mx-auto pt-24 p-8 px-4 max-w-[1200px] mx-auto">
      <div className="mb-14">
        <BlogFeatured />
      </div>
      <div>
        <h2 className="text-center mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-6">
          {posts.map((post) => (
            <BlogArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
