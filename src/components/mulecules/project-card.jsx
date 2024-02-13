'use client'

import Link from 'next/link'
import React from 'react'
import { Icons } from '../ui'
import { Badge } from '../atoms/badge'
import { Title } from '../atoms/title'
import { cn } from '@/lib/utils'

export const ProjectCard = ({ project }) => {
  const { name, url, repo, description, highlights } = project

  const pressAnimate = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const replies = document.createElement('span')
    replies.style.left = x + 'px'
    replies.style.top = y + 'px'

    replies.classList.add(
      'absolute',
      'bg-gray-500',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'pointer-events-none',
      'rounded-full',
      'animate-press',
    )
    event.currentTarget.appendChild(replies)

    setTimeout(() => {
      replies.remove()
    }, 500)
  }

  return (
    <article
      onClick={pressAnimate}
      className={cn(
        'border-transparent dark:border dark:border-accent print:border print:border-accent  rounded-xl flex flex-col overflow-hidden',
        'shadow-medium print:shadow-none  cursor-pointer',
      )}
    >
      <section className="print:hidden">
        <Link
          href={repo}
          title="Github"
          target="_blank"
          className="absolute top-4 right-4 bg-secondary/80 dark:bg-foreground/20 hover:opacity-55 z-20 p-1 flex items-center justify-center border rounded-full"
        >
          <Icons.fillGithub className="w-5 h-5 text-muted-foreground text-pink-400" />
        </Link>

        <Link
          href={url}
          title="Visit website"
          target="_blank"
          className="absolute top-4 right-14 bg-blue-200/80 dark:bg-foreground/20 hover:opacity-55 z-20 p-1 flex items-center justify-center border rounded-full"
        >
          <Icons.link className="w-5 h-5  text-blue-500" />
        </Link>
      </section>

      <section className="flex flex-col gap-2 p-4">
        <header className="flex items-center justify-between gap-2">
          <Title
            tag={'h3'}
            text={name}
            className={'line-clamp-1 max-w-[18ch]'}
          />
        </header>
        <p className="font-sans text-sm text-foreground/60 line-clamp-3 mb-4 overflow-hidden">
          {description}
        </p>

        <footer className="flex gap-2 flex-wrap">
          {highlights &&
            highlights?.map((highlight) => (
              <Badge key={highlight} text={highlight} />
            ))}
        </footer>
      </section>
    </article>
  )
}
