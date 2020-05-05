import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

export default new ApolloClient({
  fetch,
  uri: process.env.ZE_DELIVERY_PUBLIC_API
})
