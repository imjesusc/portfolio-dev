import { Badge } from '../atoms/badge'
import { Title } from '../atoms/title'

export const Habilities = ({ skills }) => {
  const { skills: skillList, name } = skills

  return (
    <section className="grid gap-2">
      <Title tag="h2" text={name} />
      <div className="flex gap-2 flex-wrap">
        {skillList &&
          skillList[0]?.keywords?.map((keyword) => (
            <Badge
              variant={'md'}
              key={keyword}
              text={keyword}
              aria-label={'Hability in' + keyword}
            />
          ))}
      </div>
    </section>
  )
}
