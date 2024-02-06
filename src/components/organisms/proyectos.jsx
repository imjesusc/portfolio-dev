import React from 'react'
import { ProjectCard } from '../mulecules'
import { Title } from '../atoms/title'

export const Proyectos = ({ projects }) => {
  const { projects: projectList, name } = projects
  return (
    <section className="grid gap-2">
      <Title tag={'h2'}>{name}</Title>

      <div className="grid grid-col-1 tablet:grid-cols-3 print:phone:grid-cols-3 gap-4">
        {projectList?.map((project) => {
          return <ProjectCard key={project.name} project={project} />
        })}
      </div>
    </section>
  )
}
