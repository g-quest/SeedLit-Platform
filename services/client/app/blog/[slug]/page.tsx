import { notFound } from 'next/navigation'

// You don't need to manually get the slug - Next.js provides it automatically
interface PageProps {
  params: {
    slug: string  // Will automatically contain the URL segment
  }
}

// Function to validate if slug exists
async function validateSlug(slug: string): Promise<boolean> {
  // TODO: Replace with your actual validation logic
  // Example: check against valid slugs in your database/CMS
  const validSlugs = ['my-first-post', 'another-post'] // Replace with your data source
  return validSlugs.includes(slug)
}

export default async function BlogPost({ params }: PageProps) {
  const slugExists = await validateSlug(params.slug)
  
  if (!slugExists) {
    notFound() // This will show the closest not-found.tsx page
  }

  // params.slug will be whatever is in the URL
  // e.g., for /blog/my-first-post, params.slug = "my-first-post"
  console.log('Current slug:', params.slug)
  
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
    </div>
  )
}
