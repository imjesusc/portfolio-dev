import Link from 'next/link'
import React from 'react'
import { Icons } from '../ui'
import { Badge } from '../atoms/badge'
import { Title } from '../atoms/title'

export const ProjectCard = ({ project }) => {
  const { name, url, repo, description, highlights } = project
  return (
    <article className="border rounded-xl p-4 flex flex-col  gap-2">
      <div className="flex items-center justify-between gap-2">
        <Link
          href={url}
          title="Visit page."
          target="_blank"
          rel="noreferrer"
          className="hover:underline underline-offset-2"
        >
          <Title tag={'h3'} title={name} />
        </Link>

        <Link href={repo} title="Github">
          <Icons.github className="w-4 h-4 text-muted-foreground" />
        </Link>
      </div>
      <p className="font-mono text-xs text-foreground/60 h-20 overflow-hidden">
        {description}
      </p>

      <div className="flex gap-2 flex-wrap">
        {highlights &&
          highlights?.map((highlight) => (
            <Badge key={highlight} text={highlight} />
          ))}
      </div>
    </article>
  )
}
