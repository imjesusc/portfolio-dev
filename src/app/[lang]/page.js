import {
  HeroSection,
  Habilities,
  Proyectos,
  Crafts,
} from '@/components/organisms'
import { Command } from '@/components/organisms/command'
import Custom404 from '../not-found'
import { Education } from '@/components/organisms/education'
import { Experiencie } from '@/components/organisms/experiencie'

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
      <main className="container py-20 flex flex-col print:gap-6 gap-14">
        <HeroSection basics={dictionary.basics} />
        <Proyectos projects={dictionary.projects} />
        <Experiencie works={dictionary.work} className={'hidden print:block'} />
        <Habilities skills={dictionary.skills} />
        <Education education={dictionary.education} />
        <Crafts crafts={dictionary.crafts} />
        <Command basics={dictionary.basics} lang={params.lang} />
      </main>
    </>
  )
}
