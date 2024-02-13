import { Title } from './title'

export const InfoDetails = ({ title, details }) => {
  return (
    <div className="flex flex-col gap-1">
      <Title tag={'h4'}>{title}</Title>
      {details &&
        details.map((detail) => (
          <p
            key={detail}
            className="max-w-[80ch] print:max-w-full text-pretty print:text-pretty font-sans text-sm text-foreground/60"
          >
            {detail}
          </p>
        ))}
    </div>
  )
}
