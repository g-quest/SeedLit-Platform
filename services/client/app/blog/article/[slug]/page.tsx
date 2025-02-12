import BlogArticleHeader from '@/components/blog/ArticleHeader'
import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/actions/contentful'

export default async function BlogPost({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  // console.log('ARTICLE: ', article)

  if (article.items.length === 0) {
    notFound()
  }

  return (
    <div className="mt-24 max-w-[1200px] mx-auto p-4">
      <div className="mb-12">
        <BlogArticleHeader article={article} />
      </div>
    </div>
  )
}
