import { cn } from '@/lib/utils'
import React from 'react'

export const Figure = ({ image, name, className }) => {
  return (
    <figure className={cn(className)}>
      <video autoPlay loop muted aria-label={name}>
        <source src={image} type="video/mp4" />
      </video>
    </figure>
  )
}
