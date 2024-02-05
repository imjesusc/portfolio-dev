import { FigureImg } from '../atoms/figure-img'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const CrafsCard = ({ craft }) => {
  return (
    <article
      className={cn(
        'h-24',
        'border grid grid-cols-3 gap-3',
        'print:shadow-none rounded-xl p-2 transition-shadow',
        'shadow-[0_0_90px_0px_rgba(0,255,255,0.2)]',
      )}
    >
      <Link href={craft.link} target="_blank" rel="noreferrer">
        <FigureImg
          image={craft.image}
          name={craft.name}
          className={'h-20 w-full'}
        />
      </Link>
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={craft.repo}
            target="_blank"
            rel="noreferrer"
            title="repo"
            className="hover:underline"
          >
            {craft.name}
          </Link>
        </div>
        <p className="font-mono text-xs text-foreground/60 h-5 overflow-hidden">
          {craft.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {craft.languages.map((highlight) => (
            <span
              key={highlight}
              className="text-xs bg-accent font-sans text-foreground/60 py-1 px-2 rounded-lg"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
