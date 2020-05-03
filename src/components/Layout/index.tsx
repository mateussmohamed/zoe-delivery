import React, { FC } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Container, Middle } from './styles'

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Middle>{children}</Middle>
      <Footer />
    </Container>
  )
}

export default Layout
