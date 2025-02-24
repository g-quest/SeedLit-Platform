'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/core-ui/navigation-menu'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function NavBar() {
  const pathname = usePathname()
  const whitePaths = ['/']
  const makeWhite = whitePaths.includes(pathname)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const backgroundColor = makeWhite
    ? scrolled
      ? 'bg-white'
      : 'bg-transparent'
    : 'bg-white'
  const textColor = makeWhite
    ? scrolled
      ? 'text-black'
      : 'text-white'
    : 'text-black'

  return (
    <div
      className={`p-4 border-b border-border fixed top-0 z-50 w-full transition-all duration-300 ${backgroundColor}`}
    >
      <div className="max-w-[1200px] mx-auto flex w-full justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/wordmark.png"
              alt="SeedLit"
              width={75}
              height={75}
            />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 md:space-x-8">
            {/* <NavigationMenuItem>
              <NavigationMenuLink href="/parents-hub">
                <p className={`text-md ${textColor}`}>Parents Hub</p>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/blog">
                <p className={`text-md ${textColor}`}>Blog</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
