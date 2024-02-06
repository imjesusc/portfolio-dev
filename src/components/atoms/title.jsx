import { cn } from '@/lib/utils'

export const Title = ({ tag, title, className }) => {
  const styles = {
    h1: 'text-5xl tablet:text-8xl',
    h2: 'text-2xl font-sans font-semibold',
    h3: 'text-base font-sans font-semibold',
    h4: 'text-xl',
    h5: 'text-lg',
  }

  const Tag = tag
  return <Tag className={cn(styles[tag], className)}>{title}</Tag>
}
