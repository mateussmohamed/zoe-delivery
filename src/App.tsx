import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'

import client from '~/apollo/client'

import { ZoeProvider } from '~/context'
import Routes from '~/routes/Routes'

import GlobalStyle from '~/styles/global'
import theme from '~/styles/themes/default'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ZoeProvider>
          <Routes />
        </ZoeProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default hot(App)
