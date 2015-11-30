import 'whatwg-fetch'

export default function (file, api) {
  const resource = file ? `static/${file}` : api
  return fetch(resource)
    .then(response => {
      const fileSplit = file.split('.')
      if (fileSplit[fileSplit.length - 1] === 'json') {
        return response.json()
      } else {
        return response.text()
      }
    }).then(res => {
      return res
    })
}
