import { FigureImg } from '../atoms/figure-img'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '../atoms/badge'

export const CrafsCard = ({ craft }) => {
  const { name, description, link, image, repo, languages } = craft
  return (
    <article
      className={cn(
        'h-24',
        'border grid grid-cols-[auto_1fr] gap-3',
        'rounded-xl p-2 transition-shadow shadow-lg',
        ' overflow-hidden',
      )}
    >
      <Link href={link} target="_blank" rel="noreferrer">
        <FigureImg image={image} name={name} className={'h-20 w-32'} />
      </Link>
      <div className=" flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={repo}
            target="_blank"
            rel="noreferrer"
            title="repo"
            className="hover:underline dark:text-white"
          >
            {name}
          </Link>
        </div>
        <p className="font-mono truncate text-xs text-foreground/60 h-5 overflow-hidden">
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
