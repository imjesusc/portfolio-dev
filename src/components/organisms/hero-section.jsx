import React from 'react'
import { Icons } from '../ui'
import { ProfileNav } from '../mulecules/profile-nav'

export const HeroSection = ({ basics }) => {
  const { name, label, location } = basics
  return (
    <header className="flex gap-6 justify-between">
      <div className="w-full  flex flex-col gap-4">
        <h1 className="text-5xl tablet:text-8xl flex flex-col font-sans font-semibold print:hidden">
          <span>{name.split(' ')[0]}</span>{' '}
          <span>{name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <h2 className="hidden print:block font-sans font-semibold print:text-5xl">
          {name}
        </h2>
        <h2 className="text-pretty tablet:text-balance w-full tablet:max-w-[500px] font-sans text-foreground/70">
          {label}
        </h2>
        <div className="flex gap-2 text-muted-foreground text-sm items-center">
          <Icons.wordmap className="w-4 h-4" />
          <p>
            {location.city}, {location.country}
          </p>
        </div>

        <ProfileNav basics={basics} />
      </div>
    </header>
  )
}
