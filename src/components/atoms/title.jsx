import { cn } from '@/lib/utils'

export const Title = ({ tag, title, className, children }) => {
  const styles = {
    h1: 'text-5xl tablet:text-8xl flex flex-col font-sans font-semibold print:flex-row print:gap-2',
    h2: 'text-2xl font-sans font-semibold',
    h3: 'font-semibold text-lg font-sans h-7 overflow-hidden',
    h4: 'text-xl',
    h5: 'text-lg',
  }

  const Tag = tag
  return (
    <Tag className={cn(styles[tag], className)}>
      {title} {children}
    </Tag>
  )
}
