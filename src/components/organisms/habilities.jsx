import { cn } from '@/lib/utils'

export const Habilities = ({ skills }) => {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-sans font-semibold">Habilidades</h2>
      <div className="flex gap-2 flex-wrap">
        {skills?.keywords?.map((keyword) => (
          <p
            key={keyword}
            className={cn(
              'bg-accent text-accent-foreground text-sm font-mono py-1 px-4',
              'rounded-md  duration-500 hover:bg-muted-foreground/20',
            )}
          >
            {keyword}
          </p>
        ))}
      </div>
    </section>
  )
}
