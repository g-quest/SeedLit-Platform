import BlogArticleHeader from '@/components/blog/ArticleHeader'
import BlogArticleContent from '@/components/blog/ArticleContent'
import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/actions/contentful'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  // console.log('ARTICLE: ', article)

  const { title, shortDescription, image } = article.items[0].fields

  return {
    title: `${title} | SeedLit`,
    description: shortDescription,
    openGraph: {
      type: 'website',
      title: `${title} | SeedLit`,
      description: shortDescription,
      siteName: `${title} | SeedLit`,
      images: [
        {
          url: `https://${image.fields.file.url}`,
        },
      ],
    },
    twitter: {
      title: `${title} | SeedLit`,
      description: shortDescription,
      site: `${title} | SeedLit`,
      images: [
        {
          url: `https://${image.fields.file.url}`,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  // console.log('ARTICLE: ', article)

  if (article.items.length === 0) {
    notFound()
  }

  return (
    <div className="mt-24 max-w-[62.5rem] mx-auto p-4">
      <div className="mb-6">
        <BlogArticleHeader article={article} />
      </div>
      <div className="mb-12">
        <BlogArticleContent article={article} />
      </div>
    </div>
  )
}
