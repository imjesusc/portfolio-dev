import {
  HeroSection,
  Habilities,
  Proyectos,
  Crafts,
} from '@/components/organisms'
import { Command } from '@/components/organisms/command'
import Custom404 from '../not-found'

export default async function HomePage({ params }) {
  const languages = ['en', 'es']

  if (!languages.includes(params.lang)) {
    return <Custom404 />
  }

  const dictionary = await import(
    `@/app/dictionaries/${params.lang}.json`
  ).then((m) => m.default)

  return (
    <>
      <main className="container py-20 flex flex-col gap-14">
        <HeroSection basics={dictionary.basics} />
        <Proyectos projects={dictionary.projects} />
        <Habilities skills={dictionary.skills} />
        <Crafts crafts={dictionary.crafts} />
        <Command basics={dictionary.basics} lang={params.lang} />
      </main>
    </>
  )
}
