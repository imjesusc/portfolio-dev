import React from 'react'
import { ProjectCard } from '../mulecules'

export const Proyectos = ({ projects }) => {
  return (
    <section className="grid gap-2">
      <h2 className="text-2xl font-sans font-semibold">Proyectos</h2>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />
        })}
      </div>
    </section>
  )
}
