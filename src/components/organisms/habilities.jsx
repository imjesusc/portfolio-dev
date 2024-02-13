'use client'

import { pressAnimate } from '@/lib/press-animate'
import { Badge } from '../atoms/badge'
import { Title } from '../atoms/title'
import { Icons } from '../ui'

export const Habilities = ({ skills }) => {
  const { skills: skillList, name } = skills

  const icons = {
    javascript: <Icons.javascript />,
    html: <Icons.html />,
    css: <Icons.css />,
    tailwind: <Icons.tailwind />,
    react: <Icons.react />,
    'next.js': <Icons.nextjs />,
    git: <Icons.git />,
    typescript: <Icons.typescript />,
  }

  return (
    <section className="grid gap-2">
      <Title tag="h2" text={name} />
      <div className="flex print:hidden gap-2 flex-wrap">
        {skillList &&
          skillList[0]?.keywords?.map((keyword) => (
            <Badge
              onClick={pressAnimate}
              variant={'md'}
              className={
                'overflow-hidden flex gap-2 items-center justify-center'
              }
              key={keyword}
              aria-label={'Hability in' + keyword}
            >
              {icons[keyword.toLowerCase()]}
              {keyword}
            </Badge>
          ))}
      </div>

      <ul className="list-disc hidden print:flex list-inside flex-col gap-1">
        {skillList &&
          skillList[0]?.keywords.map((keyword) => (
            <li className="text-sm text-muted-foreground" key={keyword}>
              {keyword}
            </li>
          ))}
      </ul>
    </section>
  )
}
