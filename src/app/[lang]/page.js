import { HeroSection, Habilities, Proyectos } from '@/components/organisms'
import { Command } from '@/components/organisms/command'

export default async function HomePage({ params }) {
  const dictionary = await import(
    `@/app/dictionaries/${params.lang}.json`
  ).then((m) => m.default)

  return (
    <>
      <main className="container py-20 flex flex-col gap-10">
        <HeroSection basics={dictionary.basics} />
        <Proyectos projects={dictionary.projects} />
        <Habilities skills={dictionary.skills[0]} />
        <Command basics={dictionary.basics} />
      </main>
    </>
  )
}
