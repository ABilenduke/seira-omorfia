export const fetchStuff = ({
  method = 'GET',
  mode = 'cors',
  cache = 'no-cache',
  credentials = 'same-origin',
  headers = {
    'Content-Type': 'application/json',
  },
  redirect = 'follow',
  referrerPolicy = 'no-referrer',
  body = '',
}) => {
  const fetchStuffs = {
    method, // *GET, POST, PUT, DELETE, etc.
    mode, // no-cors, *cors, same-origin
    cache, // *default, no-cache, reload, force-cache, only-if-cached
    credentials, // include, *same-origin, omit
    headers,
    redirect, // manual, *follow, error
    referrerPolicy, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }

  if (method !== 'GET') {
    fetchStuffs.body = body // body data type must match "Content-Type" header
  }
  return fetchStuffs
}
