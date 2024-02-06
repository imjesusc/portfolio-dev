import React from 'react'

export const Education = ({ education }) => {
  console.log(education)
  return (
    <section className="grid gap-2">
      <h2 className="text-2xl font-sans font-semibold">{education.module}</h2>
      <div className="flex gap-2 flex-wrap">
        {education &&
          education.educations.map((education) => (
            <div key={education.institution} className="space-y-2">
              <p>{education.institution}</p>
              <p className="text-muted-foreground text-xs">
                {education.endDate}
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}
