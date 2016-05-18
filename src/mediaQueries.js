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

export function setupMqs(fn) {
  function mediaqueryresponse(i, action) {
    if (mediaQueries[i].size.matches) {
      action(mediaQueries[i].name)
    }
  }

  for (var i = 0; i < mediaQueries.length; i++) {
    mediaqueryresponse(i, fn)
    // need to debounce listener
    mediaQueries[i].size.addListener(mediaqueryresponse.bind(null, i, fn))
  }
}
