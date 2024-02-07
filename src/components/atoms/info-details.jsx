import { Title } from './title'

export const InfoDetails = ({ title, details }) => {
  return (
    <div className="flex flex-col gap-1">
      <Title tag={'h4'}>{title}</Title>
      {details &&
        details.map((detail) => (
          <p
            key={detail}
            className="max-w-[150ch] text-balance font-mono text-[13px] text-foreground/60"
          >
            {detail}
          </p>
        ))}
    </div>
  )
}
