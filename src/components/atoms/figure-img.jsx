import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export const FigureImg = ({ image, name, className }) => {
  return (
    <figure className={cn(className)}>
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        loading="lazy"
        className="w-full h-full"
      />
    </figure>
  )
}
