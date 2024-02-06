import Link from 'next/link'
import React from 'react'
import { Icons } from '../ui'

export const ProjectCard = ({ project }) => {
  return (
    <article
      key={project.name}
      className="border rounded-xl p-4 flex flex-col  gap-2"
    >
      <div className="flex items-center gap-2">
        <Link
          href={project.url}
          title="Visit page."
          target="_blank"
          rel="noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h3 className="font-semibold text-lg font-sans h-7 overflow-hidden">
            {project.name}
          </h3>
        </Link>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#50e3c2]"></span>

        <Link href={project.repo} title="Repositorio">
          <Icons.github className="w-4 h-4 text-muted-foreground" />
        </Link>
      </div>
      <p className="font-mono text-xs text-foreground/60 h-20 overflow-hidden">
        {project.description}
      </p>

      <div className="flex gap-2 flex-wrap">
        {project.highlights &&
          project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="text-xs bg-accent font-sans text-foreground/60 py-1 px-2 rounded-lg"
            >
              {highlight}
            </span>
          ))}
      </div>
    </article>
  )
}
