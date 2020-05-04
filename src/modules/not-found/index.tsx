import React, { FC } from 'react'

import Layout from '~/components/Layout'
import Message from '~/components/Message'

import notFoundMessage from '../../assets/not-found.svg'

import { Container, Text, LinkProduct } from './styles'

const NotFound: FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <Message text="Ihhhhh! Deu ruim hein!?" image={notFoundMessage} height={250} />

          <Text>
            Volte para{' '}
            <LinkProduct to="/" replace>
              Home
            </LinkProduct>
          </Text>
        </Container>
      </Layout>
    </>
  )
}

export default NotFound
