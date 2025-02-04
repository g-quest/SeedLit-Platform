import { Card, CardContent } from '@/components/core-ui/card'
import BlogFeatured from '@/components/blog/Featured'
export default function Blog() {
  return (
    <div className="mx-auto pt-24 px-4">
      <div className="max-w-[1200px] mx-auto mb-14">
        <BlogFeatured />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    </div>
  )
}
