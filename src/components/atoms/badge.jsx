import { cn } from '@/lib/utils'
export const Badge = ({ variant, text, className }) => {
  const styles = {
    default:
      'text-xs bg-accent font-sans text-foreground/60 py-1 px-2 rounded-lg print:border',
    sm: 'text-xs bg-accent font-sans text-foreground/60 py-1 px-2 rounded-lg',
    md: 'bg-accent text-accent-foreground text-sm font-mono py-1 px-4 rounded-md shadow-[0_0_90px_0px_rgba(0,255,255,0.2)]  duration-500 hover:bg-muted-foreground/20',
  }
  return (
    <span className={cn(styles.default, styles[variant], className)}>
      {text}
    </span>
  )
}
