// proxy for testing edge app fetch with http tests
fly.http.respondWith(async function(request) {
  const url = new URL(request.url)
  url.host = "origin.local"
  request.url = url.toString()
  return fetch(request)
})
