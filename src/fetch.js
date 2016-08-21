import 'whatwg-fetch'

export default function (file, api) {
  const resource = file ? `/${file}` : api
  return fetch(resource)
    .then(response => {
      if (file) {
        const fileSplit = file.split('.')
        if (fileSplit[fileSplit.length - 1] === 'json') {
          return response.json()
        } else {
          return response.text()
        }
      } else {
        return response.json()
      }
    }).then(res => {
      return res
    })
}
