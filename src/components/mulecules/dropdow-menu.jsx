'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import { Icons } from '../ui'

export const DropdownMenu = ({ basics, lang }) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  const languages = {
    es: {
      actions: 'Acciones',
      links: 'Enlaces',
      print: 'Imprimir',
    },
    en: {
      actions: 'Actions',
      links: 'Links',
      print: 'Print',
    },
  }

  const handleKeyDown = (e) => {
    if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((prevOpen) => !prevOpen)
    }
  }

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <>
      <div
        ref={menuRef}
        className={cn(
          'bg-background border transition-opacity duration-300 flex flex-col gap-2 rounded-xl p-10 overflow-hidden',
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full tablet:w-auto tablet:min-w-[30%] opacity-0 -z-20 border',
          open ? 'opacity-100 z-50' : '',
        )}
      >
        <div className="flex justify-between items-center">
          <h4 className="font-sans font-semibold text-xl">
            {languages[lang].actions}
          </h4>
          <button onClick={() => setOpen(false)}>
            <Icons.close />
          </button>
        </div>
        <button
          onClick={() => {
            setOpen(false)
            setTimeout(() => globalThis.print(), 100)
          }}
          className="hover:bg-foreground/5 px-2 py-2 rounded-md font-mono text-start text-sm transition-colors -mx-2"
        >
          {languages[lang].print}
        </button>

        <h4 className="font-sans font-semibold text-xl">
          {languages[lang].links}
        </h4>

        <div className="flex flex-col">
          {basics?.profiles?.map((profile) => (
            <button
              onClick={() => {
                setOpen(false)
                globalThis.open(profile.url)
              }}
              key={profile.network}
              className="hover:bg-foreground/5 px-2 py-2 rounded-md font-mono text-start text-sm transition-colors -mx-2"
            >
              {profile.network}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
