import React from 'react'
import { InfoDetails } from '../atoms/info-details'
import { Title } from '../atoms/title'
import { cn } from '@/lib/utils'
import { Badge } from '../atoms/badge'

export const Experiencie = ({ works, className }) => {
  const { works: worksList, module } = works
  return (
    <section className={cn('grid gap-2', className)}>
      <Title tag="h2" text={module ?? 'Experiencia'} />

      <div>
        <ul className="grid gap-4">
          {worksList &&
            worksList.map((work) => {
              const {
                position,
                name,
                startDate,
                endDate,
                responsibilities,
                highlights,
              } = work
              return (
                <li key={name} className="flex items-start">
                  <div className="flex-1 space-y-2">
                    <div className="flex gap-1 flex-col items-start">
                      <div className="flex gap-4">
                        <Title
                          tag="h3"
                          text={position ?? 'Front-end'}
                          className={'font-sans'}
                          title="Position"
                        />
                        <Title
                          tag={'h3'}
                          className="font-sans font-black text-foreground/60  dark:text-foreground/60"
                          title="Company"
                        >
                          {name ?? 'Company'}
                        </Title>
                      </div>
                      <Badge aria-label="Date">
                        {startDate ?? 'Today'}
                        {' - '}
                        {endDate ?? 'Present'}
                      </Badge>
                    </div>
                    <div className="grid gap-2">
                      <InfoDetails
                        title={responsibilities.module}
                        details={responsibilities.responsibilities}
                      />

                      <InfoDetails
                        title={highlights.module}
                        details={highlights.highlights}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </section>
  )
}
