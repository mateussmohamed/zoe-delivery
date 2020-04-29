import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './apollo/client'

import Routes from './Routes'

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default hot(App)
