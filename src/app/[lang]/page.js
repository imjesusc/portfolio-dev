import { HeroSection, Habilities, Proyectos } from '@/components/organisms'

export default async function HomePage({ params }) {
  const dictionary = await import(
    `@/app/dictionaries/${params.lang}.json`
  ).then((m) => m.default)

  console.log(dictionary)
  return (
    <>
      <main className="container py-20 flex flex-col gap-10">
        <HeroSection basics={dictionary.basics} />
        <Proyectos projects={dictionary.projects} />
        <Habilities skills={dictionary.skills[0]} />
      </main>
    </>
  )
}
