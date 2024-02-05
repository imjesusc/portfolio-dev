import { DropdownControl, DropdownMenu } from '../mulecules'

export const Command = ({ basics, lang }) => {
  return (
    <>
      <DropdownControl lang={lang} />
      <DropdownMenu basics={basics} lang={lang} />
    </>
  )
}
