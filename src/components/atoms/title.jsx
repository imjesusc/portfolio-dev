import { cn } from '@/lib/utils'

export const Title = ({ tag, title, className, children }) => {
  const styles = {
    h1: 'text-5xl text-[#11181c] tablet:text-8xl flex flex-col font-sans font-semibold print:flex-row print:gap-2 dark:text-white',
    h2: 'text-2xl font-sans font-semibold dark:text-white',
    h3: 'font-semibold text-lg font-sans h-7 overflow-hidden dark:text-white',
    h4: 'text-sm  dark:text-white',
    h5: 'text-lg dark:text-white',
  }

  const Tag = tag
  return (
    <Tag className={cn(styles[tag], className)}>
      {title} {children}
    </Tag>
  )
}
