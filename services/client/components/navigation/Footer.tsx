import { Linkedin, Instagram, Mail } from 'lucide-react'

import { Button } from '@/components/core-ui/button'
import { Separator } from '@/components/core-ui/separator'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-[800px] mx-auto px-6 md:flex gap-[2rem] items-center justify-center w-full">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/images/wordmark.png"
              alt="SeedLit"
              width={100}
              height={100}
            />
          </Link>
          <p className="text-gray-400 mt-4 mb-4 md:mb-0 max-w-[450px] mx-auto md:max-w-none text-center md:text-left">
            Transforming big ideas into imaginative stories that inspire
            lifelong learning and meaningful family conversations.
          </p>
        </div>

        <div>
          <div className="flex gap-4 mb-4 justify-center md:justify-start">
            <a
              href="https://linkedin.com/company/seedlit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/seedlit.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@seedlit.co"
              className="block text-gray-300 hover:text-white"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <Button variant="link" className="text-gray-300 p-0" asChild>
              <Link href="/about">About Us</Link>
            </Button>
            <Button variant="link" className="text-gray-300 p-0" asChild>
              <Link href="/terms">Terms</Link>
            </Button>
            <Button variant="link" className="text-gray-300 p-0" asChild>
              <Link href="/privacy">Privacy</Link>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700 my-8" />
      <div className="px-4">
        <p className="text-center text-gray-500 text-sm mb-4">For Cora ❤️</p>
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SeedLit, a subsidiary of Questa
          Interactive, LLC.
        </p>
        <p className="text-center text-gray-500 text-sm">
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
