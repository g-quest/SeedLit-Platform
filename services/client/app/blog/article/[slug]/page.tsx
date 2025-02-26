import BlogArticleHeader from '@/components/blog/ArticleHeader'
import BlogArticleContent from '@/components/blog/ArticleContent'
import EmailSubscribe from '@/components/EmailSubscribe'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/core-ui/breadcrumb'

import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/actions/contentful'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  // console.log('ARTICLE: ', article)

  const { title, shortDescription, image } = article.items[0].fields

  const imageURL =
    image &&
    typeof image === 'object' &&
    'fields' in image &&
    typeof image.fields === 'object' &&
    'file' in image.fields &&
    typeof image.fields.file === 'object' &&
    'url' in image.fields.file
      ? image.fields.file.url
      : ''

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
          url: `https:${imageURL}`,
        },
      ],
    },
    twitter: {
      title: `${title} | SeedLit`,
      description: shortDescription,
      site: `${title} | SeedLit`,
      images: [
        {
          url: `https:${imageURL}`,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  // console.log('ARTICLE: ', article)

  const { author, title, image, publishingDate, content } =
    article.items[0].fields

  if (article.items.length === 0) {
    notFound()
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-4">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {typeof title === 'string' ? title : JSON.stringify(title)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-8">
        <BlogArticleHeader image={image} title={title} />
      </div>
      <div className="mb-8">
        <BlogArticleContent
          author={author}
          publishingDate={publishingDate}
          content={content}
        />
      </div>
      <div className="mb-12 text-center bg-secondary p-6 rounded-lg shadow-xl">
        <h2 className="mb-4">Like what you read?</h2>
        <p className="text-lg text-gray-700 mb-5 max-w-[450px] mx-auto">
          Subscribe to our newsletter to get the latest news, stories, and
          updates from SeedLit.
        </p>
        <div className="max-w-[350px] mx-auto">
          <EmailSubscribe listId="RS59ZZ" />
        </div>
      </div>
    </div>
  )
}
