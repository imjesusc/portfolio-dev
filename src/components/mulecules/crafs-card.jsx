import { Figure } from '../atoms/figure'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '../atoms/badge'

export const CrafsCard = ({ craft }) => {
  const { name, description, link, image, languages } = craft
  return (
    <article
      className={cn(
        'h-24',
        'border grid grid-cols-[auto_1fr] gap-3',
        'rounded-xl p-2 transition-shadow shadow-lg',
        ' overflow-hidden',
      )}
    >
      <Link href={link} target="_blank" rel="noreferrer" title="View">
        <Figure
          image={image}
          name={name}
          className={'h-20 w-32 rounded-md overflow-hidden'}
        />
      </Link>
      <div className=" flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            title="View"
            className="hover:underline dark:text-white"
          >
            {name}
          </Link>
        </div>
        <p className="font-mono truncate text-xs text-foreground/60 overflow-hidden">
          {description}
        </p>
        <div className="flex gap-2 tablet:flex-wrap overflow-hidden">
          {languages?.map((highlight) => (
            <Badge key={highlight} text={highlight} />
          ))}
        </div>
      </div>
    </article>
  )
}
