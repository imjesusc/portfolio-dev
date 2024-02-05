import { CrafsCard } from '../mulecules/crafs-card'

export const Crafts = ({ crafts }) => {
  return (
    <section className="grid gap-2">
      <h2 className="text-2xl font-sans font-semibold">{crafts.name}</h2>

      <div className="grid grid-cols-1 print:grid-cols-2 tablet:grid-cols-2 gap-4">
        {crafts.crafts.map((craft) => (
          <CrafsCard key={craft.name} craft={craft} />
        ))}
      </div>
    </section>
  )
}
