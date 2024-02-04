import React from 'react'
import { Icons } from '../ui'

export const ProfileNav = ({ basics, profiles }) => {
  const icons = {
    github: <Icons.github className={'text-muted-foreground'} />,
    linkedin: <Icons.linkedin className={'text-muted-foreground'} />,
  }

  return (
    <nav>
      <ul className="flex gap-4 items-center">
        <li>
          <a
            href={`mailto:${basics.email}`}
            title={basics.email}
            className="block p-2 border rounded-md hover:bg-accent backdrop-blur"
          >
            <Icons.mail className={'text-muted-foreground'} />{' '}
            <p className="sr-only">{basics.email}</p>
          </a>
        </li>

        {profiles.map((profile) => {
          return (
            <li key={profile.network}>
              <a
                href={profile.url}
                title={
                  profile.network.toLowerCase() === 'github'
                    ? `Visitar el perfil de ${profile.username} en ${profile.network}`
                    : profile.network
                }
                className="block p-2 border rounded-md hover:bg-accent backdrop-blur"
              >
                {icons[profile.network.toLowerCase()]}
                <p className="sr-only">{profile.url}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
