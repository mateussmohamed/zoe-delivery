import React, { FC } from 'react'

import Layout from '../../../../components/Layout'
import CustomerAddress from '../../components/CustomerAddress'

import { Container } from './styles'

const Home: FC = () => {
  return (
    <Layout>
      <Container>
        <CustomerAddress />
      </Container>
    </Layout>
  )
}

export default Home
