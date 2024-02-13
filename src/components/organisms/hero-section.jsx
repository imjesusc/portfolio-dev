import { Icons } from '../ui'
import { ProfileNav } from '../mulecules/profile-nav'
import { Title } from '../atoms/title'
import { HandleTheme } from '../mulecules/handle-theme'

export const HeroSection = ({ basics, lang }) => {
  const { name, location, summary } = basics

  const strong = summary.split(' ').slice(0, 2).join(' ')
  const resSummary = summary.split(' ').slice(2, summary.length).join(' ')
  return (
    <header className="flex gap-6 justify-between">
      <div className="w-full  flex flex-col gap-4">
        <div className="flex gap-2 justify-between">
          <Title tag="h1">
            <span>{name.split(' ')[0]}</span>{' '}
            <span>{name.split(' ').slice(1).join(' ')}</span>
          </Title>
          <HandleTheme className="print:hidden" />
        </div>

        <p className="text-pretty tablet:text-balance tablet:max-w-[70ch] text-base font-medium font-sans text-muted-foreground">
          <strong className="">{strong}</strong> {resSummary}
        </p>
        <div className="flex gap-2 text-muted-foreground text-sm items-center">
          <Icons.wordmap className="w-4 h-4" />
          <p className="font-sans">
            {location.city}, {location.country}
          </p>
        </div>

        <ProfileNav basics={basics} lang={lang} />
      </div>
    </header>
  )
}
