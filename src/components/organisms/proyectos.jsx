import React from 'react'
import { ProjectCard } from '../mulecules'

export const Proyectos = ({ projects, lang }) => {
  const languages = {
    es: 'Proyectos',
    en: 'Projects',
  }
  console.log(projects)
  return (
    <section className="grid gap-2">
      <h2 className="text-2xl font-sans font-semibold">{languages[lang]}</h2>

      <div className="grid grid-col-1 tablet:grid-cols-3 print:phone:grid-cols-3 gap-4">
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />
        })}
      </div>
    </section>
  )
}
