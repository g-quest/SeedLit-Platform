import BlogArticleHeader from '@/components/blog/ArticleHeader'
import { notFound } from 'next/navigation'

// You don't need to manually get the slug - Next.js provides it automatically
interface PageProps {
  params: Promise<{
    slug: string // Will automatically contain the URL segment
  }>
}

// Function to validate if slug exists
async function validateSlug(slug: string): Promise<boolean> {
  // TODO: Replace with your actual validation logic
  // Example: check against valid slugs in your database/CMS
  const validSlugs = [
    'my-first-post',
    'my-second-post',
    'my-third-post',
    'my-fourth-post',
  ] // Replace with your data source
  return validSlugs.includes(slug)
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params // Await the promise to get the slug
  const slugExists = await validateSlug(slug)

  if (!slugExists) {
    notFound() // This will show the closest not-found.tsx page
  }

  console.log('Current slug:', slug)

  return (
    <div className="mt-24 max-w-[1200px] mx-auto p-4">
      <div className="mb-12">
        <BlogArticleHeader />
      </div>
    </div>
  )
}
