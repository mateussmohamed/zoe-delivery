import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

export default new ApolloClient({
  fetch,
  uri: 'https://api.code-challenge.ze.delivery/public/graphql'
})
