import { Title } from '../atoms/title'
import { CrafsCard } from '../mulecules/crafs-card'

export const Crafts = ({ crafts }) => {
  const { name, crafts: craftList } = crafts
  return (
    <section className="grid gap-2">
      <Title tag="h2">{name}</Title>

      <div className="grid grid-cols-1 print:grid-cols-2 tablet:grid-cols-2 gap-4">
        {craftList?.map((craft) => (
          <CrafsCard key={craft.name} craft={craft} />
        ))}
      </div>
    </section>
  )
}
