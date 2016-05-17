export const mediaQueries = [
  {
    name: 'palm',
    size: window.matchMedia('(max-width: 600px)')
  },
  {
    name: 'lap',
    size: window.matchMedia('(min-width: 601px) and (max-width: 959px)')
  },
  {
    name: 'desk',
    size: window.matchMedia('(min-width: 960px)')
  }
]
