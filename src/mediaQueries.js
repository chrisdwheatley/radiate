export const mediaQueries = {
  palm: {
    size: window.matchMedia('(max-width: 600px)'),
    fontSize: '3vh'
  },
  lap: {
    size: window.matchMedia('(min-width: 601px) and (max-width: 959px)'),
    fontSize: '4.5vh'
  },
  desk: {
    size: window.matchMedia('(min-width: 960px)'),
    fontSize: '4.25vh'
  }
}

export function setupMqs(fn) {
  function mediaqueryresponse(key, action) {
    if (mediaQueries[key].size.matches) {
      action(key)
    }
  }

  Object.keys(mediaQueries).forEach(function(key) {
    mediaqueryresponse(key, fn)
      // need to debounce listener
    mediaQueries[key].size.addListener(mediaqueryresponse.bind(null, key, fn))
  });
}
