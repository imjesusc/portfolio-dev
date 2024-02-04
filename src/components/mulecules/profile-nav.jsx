import React from 'react'
import { Icons } from '../ui'
import Link from 'next/link'

export const ProfileNav = ({ basics, profiles }) => {
  const icons = {
    github: <Icons.github className={'text-muted-foreground'} />,
    linkedin: <Icons.linkedin className={'text-muted-foreground'} />,
  }

  return (
    <nav>
      <ul className="flex gap-4 items-center">
        <li>
          <Link
            href={`mailto:${basics.email}`}
            title={basics.email}
            className="block p-2 border rounded-md hover:bg-accent backdrop-blur"
          >
            <Icons.mail className={'text-muted-foreground'} />{' '}
            <p className="sr-only">{basics.email}</p>
          </Link>
        </li>

        {profiles.map((profile) => {
          return (
            <li key={profile.network}>
              <Link
                href={profile.url}
                title={
                  profile.network.toLowerCase() === 'github'
                    ? `Visitar el perfil de ${profile.username} en ${profile.network}`
                    : profile.network
                }
                className="block p-2 border rounded-md hover:bg-accent backdrop-blur"
              >
                {icons[profile.network.toLowerCase()]}
                <p className="sr-only">{profile.network}</p>
              </Link>
            </li>
          )
        })}

        <li>
          <Link
            href={basics.url}
            type="download"
            target="_blank"
            title={'CV'}
            className="p-2 border rounded-md bg-accent backdrop-blur flex items-center gap-2"
          >
            <Icons.user className={'text-muted-foreground h-auto'} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
