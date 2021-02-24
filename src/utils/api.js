import createAuth0Client from '@auth0/auth0-spa-js'
import auth0Config from '../auth0-config'

const headers = new Headers()
headers.append('Content-Type', 'application/json')

createAuth0Client(auth0Config)
  .then((auth0) => auth0.getTokenSilently())
  .then((token) => { headers.append('Authorization', `Bearer ${token}`) })

const api = {
  get(url) {
    const req = new Request(url, {
      method: 'GET',
      headers,
    })

    return makeFetch(req)
  },
  post(url, payload) {
    const req = new Request(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    })

    return makeFetch(req)
  },
  put(url, payload) {
    const req = new Request(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(payload),
    })

    return makeFetch(req)
  },
  delete(url) {
    const req = new Request(url, {
      method: 'DELETE',
      headers: headers,
    })

    return fetch(req)
  },
}

function makeFetch(req) {
  return fetch(req).then(res => res.json())
}

export default api
