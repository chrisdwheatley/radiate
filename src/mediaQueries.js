export const mediaQueries = {
  palm: {
    size: window.matchMedia('(max-width: 600px)'),
    fontSize: '3.5vh'
  },
  lap: {
    size: window.matchMedia('(min-width: 601px) and (max-width: 959px)'),
    fontSize: '4.5vh'
  },
  desk: {
    size: window.matchMedia('(min-width: 960px) and (max-width: 1279px)'),
    fontSize: '5.5vh'
  },
  wall: {
    size: window.matchMedia('(min-width: 1280px)'),
    fontSize: '6.5vh'
  }
}

export function setupMqs(fn) {
  function mediaqueryresponse(key, action) {
    if (mediaQueries[key].size.matches) {
      action(key)
    }

    // display scrollbar if mobile size, otherwise hide it on larger screens
    if (mediaQueries.palm.size.matches) {
      document.querySelector('body').style.overflow = 'scroll'
    } else {
      document.querySelector('body').style.overflow = 'hidden'
    }
  }

  Object.keys(mediaQueries).forEach(function(key) {
    mediaqueryresponse(key, fn)
    // need to debounce listener
    mediaQueries[key].size.addListener(mediaqueryresponse.bind(null, key, fn))
  })
}
