import { Input } from '@/components/core-ui/input'
import { Button } from '@/components/core-ui/button'
import { Separator } from '@/components/core-ui/separator'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About and Navigation */}
        <div>
          <h3 className="text-xl font-semibold">🌱 SeedLit</h3>
          <p className="text-gray-400 mt-2">
            Transforming big ideas into imaginative stories that inspire
            lifelong learning and meaningful family conversations.
          </p>
          <div className="mt-4 space-y-0">
            <Button
              variant="link"
              className="block text-gray-300 hover:cursor-default hover:no-underline"
            >
              Explore Stories (Coming Soon)
            </Button>
            <Button
              variant="link"
              className="block text-gray-300 hover:text-white"
              asChild
            >
              <Link href="/parent-hub">Parent Hub</Link>
            </Button>
            <Button
              variant="link"
              className="block text-gray-300 hover:text-white"
              asChild
            >
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="link" className="block text-gray-300 asChild">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>

        {/* Newsletter & Contact */}
        <div className="flex flex-col gap-8 md:justify-between">
          <div>
            <h3 className="text-xl font-semibold"> 📥 Stay Connected</h3>
            <p className="text-gray-400 mt-2">
              Join our newsletter for new stories, parenting insights, and
              updates.
            </p>
            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="name@email.com"
                className="bg-white text-gray-900 rounded-l-lg"
              />
              <Button className="bg-tertiary rounded-r-lg">Subscribe</Button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold">✉️ Contact</h3>
            <p className="text-gray-400 mt-2">
              Have questions or feedback? Reach out to us at:
            </p>
            <a
              href="mailto:contact@seedlit.co"
              className="block text-gray-300 hover:text-white"
            >
              contact@seedlit.co
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <Separator className="bg-gray-700 my-8" />
      <p className="text-center text-gray-500 text-sm mb-4">For Cora ❤️</p>
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SeedLit, a subsidiary of Questa
        Interactive, LLC.
      </p>
      <p className="text-center text-gray-500 text-sm">All rights reserved.</p>
    </footer>
  )
}

export default Footer
