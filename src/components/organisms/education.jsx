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
              <strong className="text-base text-foreground/70 font-sans dark:text-white">
                {education.institution}
              </strong>
              <p className="text-muted-foreground text-sm">
                {education.endDate}
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}
