'use client'
import React, { useEffect } from 'react'
import { Icons } from '../ui'

export const HandleTheme = () => {
  const [theme, setTheme] = React.useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <div className="flex gap-4 items-start">
      <button onClick={toggleTheme} className="shadow-sm rounded-md p-2">
        {theme === 'light' ? (
          <Icons.moon />
        ) : (
          <Icons.sun className={'dark:text-white'} />
        )}
      </button>
    </div>
  )
}
