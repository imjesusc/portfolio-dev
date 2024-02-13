'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const DropdownControl = ({ lang, setOpen }) => {
  const [viewOpenMenu, setViewOpenMenu] = useState(false)
  const language = {
    en: 'Press ⌘ J to open the command menu',
    es: 'Presiona Ctrl + J para abrir el menu de comandos.',
  }
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
    <div>
      <div
        className={cn(
          'hidden border-t tablet:flex bg-background w-full items-center print:hidden gap-2 justify-center',
          'py-1 px-3 fixed bottom-0 left-0 font-sans text-sm transition-opacity duration-300',
          viewOpenMenu ? 'opacity-100' : 'opacity-0',
        )}
      >
        <strong className="text-muted-foreground dark:text-white">
          {language[lang]}
        </strong>
      </div>

      <button
        onClick={() => setOpen(true)}
        className={cn(
          'border-t bg-background w-full flex items-center tablet:hidden  print:hidden gap-2 justify-center',
          'py-2 px-3 fixed bottom-0 left-0 font-sans dark:text-white text-sm transition-opacity duration-300',
          viewOpenMenu ? 'opacity-100' : 'opacity-0',
        )}
      >
        <strong>Options ⌘</strong>
      </button>
    </div>
  )
}
