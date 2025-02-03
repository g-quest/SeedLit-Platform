'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/core-ui/navigation-menu'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
  const pathname = usePathname()
  const whitePaths = ['/', '/about']
  const makeWhite = whitePaths.includes(pathname)

  return (
    <div className="bg-transparent p-4 border-b border-border absolute top-0 z-50 w-full">
      <div className="max-w-[1200px] mx-auto flex w-full justify-between items-center">
        <div className="logo">
          <Link href="/">
            <h4 className="text-3xl font-bold text-tertiary">SeedLit</h4>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8">
            {/* <NavigationMenuItem>
              <NavigationMenuLink href="/parents-hub">
                <p
                  className={`text-lg ${makeWhite ? 'text-white' : 'text-black'}`}
                >
                  Parents Hub
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
            {/* <NavigationMenuItem>
              <NavigationMenuLink href="/blog">
                <p
                  className={`text-lg ${makeWhite ? 'text-white' : 'text-black'}`}
                >
                  Blog
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">
                <p
                  className={`text-lg ${makeWhite ? 'text-white' : 'text-black'}`}
                >
                  About
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
