export const pressAnimate = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const replies = document.createElement('span')
  replies.style.left = x + 'px'
  replies.style.top = y + 'px'

  replies.classList.add(
    'absolute',
    'bg-gray-600',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'pointer-events-none',
    'rounded-full',
    'animate-press',
  )
  event.currentTarget.appendChild(replies)

  setTimeout(() => {
    replies.remove()
  }, 500)
}
