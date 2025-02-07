import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../core-ui/button'
export default function BlogArticleHeader() {
  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row gap-0 relative p-6 md:p-0">
      <div className="w-full md:w-1/2 flex justify-center items-center p-0 md:p-20 mb-6 md:mb-0">
        <div>
          <p className="text-gray-500 text-sm">February 4, 2025</p>
          <h2 className="my-2">The Power of Compounding</h2>
          <p className="text-gray-500 text-sm mb-1">Greg Cuesta</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            doeiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Image
        src="/images/generated/fam-4.webp"
        alt="Featured Post"
        className="md:p-0 w-full rounded-xl md:rounded-tl-none md:rounded-bl-none md:w-1/2"
        width={500}
        height={500}
      />
    </div>
  )
}
