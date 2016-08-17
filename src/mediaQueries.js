export const mediaQueries = {
  palm: {
    size: window.matchMedia('(max-width: 600px)'),
    fontSize: '3.5vmax'
  },
  lap: {
    size: window.matchMedia('(min-width: 601px) and (max-width: 959px)'),
    fontSize: '3.5vmin'
  },
  desk: {
    size: window.matchMedia('(min-width: 960px) and (max-width: 1279px)'),
    fontSize: '3.5vmin'
  },
  wall: {
    size: window.matchMedia('(min-width: 1280px)'),
    fontSize: '5.5vmin'
  }
}

export function setupMqs(fn) {
  function mediaqueryresponse(key, action) {
    if (mediaQueries[key].size.matches) {
      action(key)
    }

    // display scrollbar if mobile size, otherwise hide it on larger screens
    if (mediaQueries.palm.size.matches) {
      document.querySelector('body').style.overflow = 'auto'
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
