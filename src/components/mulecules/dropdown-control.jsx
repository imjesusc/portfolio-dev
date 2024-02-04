'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const DropdownControl = () => {
  const [viewOpenMenu, setViewOpenMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollPos = windowHeight + window.scrollY

      if (scrollPos > windowHeight) {
        setViewOpenMenu(true)
      } else {
        setViewOpenMenu(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div
      className={cn(
        'border rounded-md bg-background w-full flex items-center print:hidden gap-2 justify-center',
        'py-1 px-3 fixed bottom-0 left-0 font-mono text-sm transition-opacity duration-300',
        viewOpenMenu ? 'opacity-100' : 'opacity-0',
      )}
    >
      Press Cmd +
      <span className="pointer-events-none border bg-accent rounded-md py-0.5 px-1">
        <span className="text-xs">⌘</span>J
      </span>
      to open the command menu
    </div>
  )
}
