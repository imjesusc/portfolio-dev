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
        <Proyectos projects={dictionary.projects} lang={params.lang} />
        <Habilities skills={dictionary.skills[0]} lang={params.lang} />
        <Command basics={dictionary.basics} lang={params.lang} />
      </main>
    </>
  )
}
