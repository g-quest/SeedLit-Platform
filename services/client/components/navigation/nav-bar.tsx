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
            <h4 className="text-3xl font-bold text-tertiary">SeedLit</h4>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 md:space-x-8">
            {/* <NavigationMenuItem>
              <NavigationMenuLink href="/parents-hub">
                <p
                  className={`text-lg ${textColor}`}
                >
                  Parents Hub
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
            {/* <NavigationMenuItem>
              <NavigationMenuLink href="/blog">
                <p className={`text-lg ${textColor}`}>Blog</p>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">
                <p className={`text-lg ${textColor}`}>About</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
