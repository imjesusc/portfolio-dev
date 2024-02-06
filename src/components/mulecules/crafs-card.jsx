import { FigureImg } from '../atoms/figure-img'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const CrafsCard = ({ craft }) => {
  return (
    <article
      className={cn(
        'h-24',
        'border grid grid-cols-[auto_1fr] gap-3',
        'rounded-xl p-2 transition-shadow',
        ' overflow-hidden',
      )}
    >
      <Link href={craft.link} target="_blank" rel="noreferrer">
        <FigureImg
          image={craft.image}
          name={craft.name}
          className={'h-20 w-32'}
        />
      </Link>
      <div className=" flex flex-col justify-between overflow-hidden">
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
        <p className="font-mono truncate text-xs text-foreground/60 h-5 overflow-hidden">
          {craft.description}
        </p>
        <div className="flex gap-2 tablet:flex-wrap overflow-hidden">
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
