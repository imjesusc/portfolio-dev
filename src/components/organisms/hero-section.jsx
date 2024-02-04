import React from 'react'
import { Icons } from '../ui'
import { ProfileNav } from '../mulecules/profile-nav'
import { FigureImg } from '../atoms/figure-img'

export const HeroSection = ({ basics }) => {
  const { name, label, image, location, profiles } = basics
  return (
    <header className="flex gap-6 justify-between">
      <div className="max-w-[55%] flex flex-col gap-4">
        <h1 className="text-8xl font-sans font-semibold">{name}</h1>
        <h2 className="text-balance font-sans text-foreground/70">{label}</h2>
        <div className="flex gap-2 text-muted-foreground text-sm items-center">
          <Icons.wordmap className="w-4 h-4" />
          <p>
            {location.city}, {location.country}
          </p>
        </div>

        <ProfileNav basics={basics} profiles={profiles} />
      </div>

      <FigureImg
        className={
          'shadow-[0_0_60px_30px_rgba(0,0,0,0.2)] rounded-xl w-40 h-40 overflow-hidden grayscale'
        }
        image={image}
        name={name}
      />
    </header>
  )
}
