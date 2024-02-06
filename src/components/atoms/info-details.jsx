export const InfoDetails = ({ title, details }) => {
  return (
    <div>
      <h3 className="text-sm font-mono">{title}</h3>
      {details &&
        details.map((detail) => (
          <p key={detail} className="text-sm font-sans text-foreground/60">
            {detail}
          </p>
        ))}
    </div>
  )
}
