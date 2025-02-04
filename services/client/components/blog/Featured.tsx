import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../core-ui/button'
export default function BlogFeatured() {
  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row w-full gap-0">
      <div className="w-full md:w-1/2">
        <Image
          src="/images/generated/fam-1.webp"
          alt="Featured Post"
          className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tr-none"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center p-10 md:p-20">
        <div>
          <p className="text-gray-500 text-sm">February 4, 2025</p>
          <h2 className="text-tertiary my-2">The Power of Compounding</h2>
          <p className="text-gray-500 text-sm mb-1">Greg Cuesta</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            http://localhost:3000/_next/image?url=%2Fimages%2Fgenerated%2Ffam-1.webp&w=640&q=75
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-4">
            <Button asChild className="bg-secondary text-white">
              <Link href="/blog/post-1">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
