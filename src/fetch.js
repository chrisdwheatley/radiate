import 'whatwg-fetch'

export default function (file, api) {
  const resource = file ? `static/${file}` : api
  return fetch(resource)
    .then(response => {
      return response.json()
    }).then(json => {
      return json
    })
}
