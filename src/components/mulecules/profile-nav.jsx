import React from 'react'
import { Icons } from '../ui'
import Link from 'next/link'

export const ProfileNav = ({ basics, lang }) => {
  const { email, profiles, name, url } = basics
  const icons = {
    github: <Icons.github className={'text-muted-foreground'} />,
    linkedin: <Icons.linkedin className={'text-muted-foreground'} />,
  }

  const dictionary = {
    en: {
      github: 'Visit Github of ' + name,
      cv: 'Download CV',
    },
    es: {
      github: 'Visitar el Github de ' + name,
      cv: 'Descargar CV',
    },
  }

  return (
    <nav>
      <ul className="flex gap-4 items-center">
        <li>
          <Link
            href={`mailto:${email}`}
            title={email}
            className="block p-2 border rounded-xl hover:bg-accent backdrop-blur print:hidden"
          >
            <Icons.mail className={'text-muted-foreground'} />{' '}
            <p className="sr-only">{email}</p>
          </Link>
          <p className="hidden print:block text-xs text-muted-foreground">
            {email}
          </p>
        </li>

        {profiles &&
          profiles.map((profile) => {
            const { network, url } = profile
            return (
              <li key={network}>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  title={
                    network.toLowerCase() === 'github'
                      ? dictionary[lang].github
                      : network
                  }
                  className="block p-2 border rounded-xl hover:bg-accent backdrop-blur print:hidden"
                >
                  {icons[network.toLowerCase()]}
                  <p className="sr-only print:not-sr-only text-black">
                    {network}
                  </p>
                </Link>
                <p className="hidden print:block text-xs text-muted-foreground">
                  {url}
                </p>
              </li>
            )
          })}

        <li>
          <Link
            href={url}
            target="_blank"
            title={lang === 'es' ? 'Descargar CV' : 'Download CV'}
            className="p-2 border rounded-xl bg-accent backdrop-blur flex items-center gap-2 print:hidden"
          >
            <Icons.fileDownload className={'text-muted-foreground h-auto'} />
            <span className="text-foreground text-sm font-sans">
              {lang === 'es' ? 'Descargar CV' : 'Download CV'}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
