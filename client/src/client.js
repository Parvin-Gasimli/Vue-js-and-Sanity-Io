import createClient from '@sanity/client'
export const client = createClient({
  projectId: 'vjpnvjsn',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skbEM6xVVBJvM8dWC76fPJphKXG6ikrj6imIn6S6EIfEvwIGSUdrE6VbSXAqWN7bbwsvUxDgzpO6mid3hIXqcdZF3RbPCvaVLdZzQ9jP7Yb3c0MZ1S96gn1pezugarGQAd7bOXPVbOskta8alWHOvIugNBpyZgQod5IcAOTMQWL0lRmvct2h', // or leave blank for unauthenticated usage
  useCdn: true // `false` if you want to ensure fresh data
})

export const fetchQuery = async (query) => {
  const result = await client
    .fetch(query)
    .then((res) => {
      return res
    })
    .catch((err) => {
      throw new Error(err)
    })

  return result
}
