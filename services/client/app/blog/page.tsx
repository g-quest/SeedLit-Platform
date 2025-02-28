import { Card, CardContent } from '@/components/core-ui/card'
import BlogFeatured from '@/components/blog/Featured'
import BlogArticleCard from '@/components/blog/ArticleCard'
import { Button } from '@/components/core-ui/button'
import { Separator } from '@/components/core-ui/separator'

import { getArticles, getFeaturedArticle } from '@/actions/contentful'

export default async function Blog() {
  const featuredArticleResponse = await getFeaturedArticle()
  const featuredPost = featuredArticleResponse?.items[0]?.fields?.featuredPost

  const featuredArticle =
    typeof featuredPost === 'object' && 'fields' in featuredPost
      ? featuredPost.fields
      : null

  console.log('FEATURED ARTICLE: ', featuredArticle)

  const articlesResponse = await getArticles(6)
  const articles = articlesResponse.items

  console.log('ARTICLES: ', articles)

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      {featuredArticle && (
        <div>
          <BlogFeatured featuredArticle={featuredArticle} />
        </div>
      )}
      <Separator className="bg-gray-300 mt-12 mb-6" />
      <div>
        <h2 className="text-center mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-6">
          {articles?.map((article, index) => {
            return <BlogArticleCard key={index} article={article} />
          })}
        </div>
      </div>
      {/* <div className="flex justify-center mt-8">
        <Button className="bg-tertiary">View All</Button>
      </div> */}
    </div>
  )
}
