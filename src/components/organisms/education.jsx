import React from 'react'
import { Title } from '../atoms/title'

export const Education = ({ education }) => {
  return (
    <section className="grid gap-2">
      <Title tag={'h2'}>{education.module}</Title>
      <div className="flex gap-2 flex-wrap">
        {education &&
          education.educations.map((education) => (
            <div key={education.institution}>
              <p className="text-sm font-mono">{education.institution}</p>
              <p className="text-muted-foreground text-xs">
                {education.endDate}
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}
