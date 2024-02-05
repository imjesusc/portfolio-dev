'use client'

import { useState } from 'react'
import { DropdownControl, DropdownMenu } from '../mulecules'

export const Command = ({ basics, lang }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <DropdownControl lang={lang} setOpen={setOpen} />
      <DropdownMenu basics={basics} lang={lang} open={open} setOpen={setOpen} />
    </>
  )
}
