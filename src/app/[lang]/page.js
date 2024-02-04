import { HeroSection } from '@/components/organisms'

export default async function HomePage({ params }) {
  const dictionary = await import(
    `@/app/dictionaries/${params.lang}.json`
  ).then((m) => m.default)

  console.log(dictionary)
  return (
    <>
      <main className="container py-20">
        <HeroSection basics={dictionary.basics} />
      </main>
    </>
  )
}
