let API_ENDPOINT

const hostname = window && window.location && window.location.hostname

if (hostname === 'bubl-app.netlify.app') {
  API_ENDPOINT = 'https://bublapp.herokuapp.com'
} else {
  API_ENDPOINT = 'http://localhost:5000'
}

export { API_ENDPOINT }
