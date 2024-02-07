import { Icons } from '../ui'
import { ProfileNav } from '../mulecules/profile-nav'
import { Title } from '../atoms/title'
import { HandleTheme } from '../mulecules/handle-theme'

export const HeroSection = ({ basics, lang }) => {
  const { name, location, summary } = basics
  return (
    <header className="flex gap-6 justify-between">
      <div className="w-full  flex flex-col gap-4">
        <div className="flex gap-2 justify-between">
          <Title tag="h1">
            <span>{name.split(' ')[0]}</span>{' '}
            <span>{name.split(' ').slice(1).join(' ')}</span>
          </Title>
          <HandleTheme />
        </div>

        <strong className="text-pretty tablet:text-balance tablet:max-w-[70ch] font-medium font-sans text-muted-foreground">
          {summary}
        </strong>
        <div className="flex gap-2 text-muted-foreground text-sm items-center">
          <Icons.wordmap className="w-4 h-4" />
          <p className="font-mono">
            {location.city}, {location.country}
          </p>
        </div>

        <ProfileNav basics={basics} lang={lang} />
      </div>
    </header>
  )
}
