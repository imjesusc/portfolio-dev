import React from 'react'
import { InfoDetails } from '../atoms/info-details'
import { Title } from '../atoms/title'
import { cn } from '@/lib/utils'

export const Experiencie = ({ works, className }) => {
  const { works: worksList, module } = works
  return (
    <section className={cn('grid gap-2', className)}>
      <Title tag="h2" title={module ?? 'Experiencia'} />

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
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <Title tag="h3" title={position ?? 'Front-end'} />
                        <strong className="font-sans text-foreground/60">
                          {name ?? 'Company'}
                        </strong>
                      </div>
                      <span className="text-xs font-mono whitespace-nowrap text-muted-foreground">
                        {startDate ?? 'Today'}
                        {' - '}
                        {endDate ?? 'Present'}
                      </span>
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
