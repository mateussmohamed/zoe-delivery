import React, { FC } from 'react'

import Layout from '~/components/Layout'
import Message from '~/components/Message'

import orderSuccessImage from '../../assets/order-success.svg'

import { Container, Text, LinkProduct } from './styles'

const OrderSuccess: FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <Message
            text="Aeeeee! Logo mais sua bebidas chegaram geladinhas em sua casa"
            image={orderSuccessImage}
            height={250}
          />

          <Text>
            Volte para{' '}
            <LinkProduct to="/products" replace>
              Produtos
            </LinkProduct>{' '}
            e compre mais!
          </Text>
        </Container>
      </Layout>
    </>
  )
}

export default OrderSuccess
