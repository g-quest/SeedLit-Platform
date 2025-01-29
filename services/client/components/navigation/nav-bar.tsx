'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/core-ui/navigation-menu'
import { Button } from '../core-ui/button'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <div className="bg-transparent p-4 border-b border-border absolute top-0 z-50 w-full">
      <div className="max-w-[1200px] mx-auto flex w-full justify-between items-center">
        <div className="logo">
          <h4 className="text-3xl font-bold text-primary">SeedLit</h4>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="/parents">
                <p
                  className={`text-lg ${isHomePage ? 'text-secondary' : 'text-black'}`}
                >
                  Parents
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blog">
                <p
                  className={`text-lg ${isHomePage ? 'text-secondary' : 'text-black'}`}
                >
                  Blog
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">
                <p
                  className={`text-lg ${isHomePage ? 'text-secondary' : 'text-black'}`}
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
