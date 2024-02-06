import React from 'react'
import { Icons } from '../ui'
import { ProfileNav } from '../mulecules/profile-nav'

export const HeroSection = ({ basics }) => {
  const { name, location, summary } = basics
  return (
    <header className="flex gap-6 justify-between">
      <div className="w-full  flex flex-col gap-4">
        <h1 className="text-5xl tablet:text-8xl flex flex-col font-sans font-semibold print:flex-row print:gap-2">
          <span>{name.split(' ')[0]}</span>{' '}
          <span>{name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <h2 className="text-pretty font-sans text-muted-foreground/70">
          {summary}
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
