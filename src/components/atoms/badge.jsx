import { cn } from '@/lib/utils'
export const Badge = ({ variant, text }) => {
  const styles = {
    default:
      'text-xs bg-accent font-sans text-foreground/60 py-1 px-2 rounded-lg print:border',
    sm: 'text-xs bg-accent font-sans text-foreground/60 py-1 px-2 rounded-lg',
    md: 'bg-accent text-accent-foreground text-sm font-mono py-1 px-4 rounded-md  duration-500 hover:bg-muted-foreground/20',
  }
  return <span className={cn(styles.default, styles[variant])}>{text}</span>
}
