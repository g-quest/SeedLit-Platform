'use server'

import { createClient, Entry } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getFeaturedArticle() {
  const response = await client.getEntries({
    content_type: 'featuredPost',
  })
  return response
}

export async function getArticles(itemsPerPage: number) {
  const featuredResponse = await client.getEntries({
    content_type: 'featuredPost',
  })
  const featuredArticleId = (
    featuredResponse.items[0]?.fields.featuredPost as Entry<any>
  )?.sys.id

  const response = await client.getEntries({
    content_type: 'blogPost',
    limit: itemsPerPage,
    'sys.id[ne]': featuredArticleId,
  })

  return response
}

export async function getArticleBySlug(slug: string) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  })
  return response
}
