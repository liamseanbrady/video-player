const KEY = process.env.REACT_APP_YT_API_KEY
const baseUrl = 'https://www.googleapis.com/youtube/v3'

export async function search(term) {
  const params = {
    q: term,
    type: 'video',
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
  const paramsString = Object.keys(params).map(key => {
    return `${key}=${params[key]}`
  }).join('&')

  return fetch(`${baseUrl}/search?${paramsString}`)
}
