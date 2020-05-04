import React, { FC } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

import Layout from '~/components/Layout'
import Loading from '~/components/Loading'
import Message from '~/components/Message'

import unavailableMessage from '../../assets/unavailable-service.svg'

import CustomerAddress from './components/CustomerAddress'
import POC_SEARCH_QUERY, { TPocSearchData, TPocVariables } from './graphql/pocSearch'

import { Container, Button } from './styles'

const Home: FC = () => {
  const [pocSearch, { loading, data }] = useLazyQuery<TPocSearchData, TPocVariables>(POC_SEARCH_QUERY)
  const history = useHistory()

  const onSelectAddress = (lat: number, long: number): void => {
    pocSearch({
      variables: {
        lat: `${lat}`,
        long: `${long}`,
        algorithm: 'NEAREST',
        now: new Date().toISOString()
      }
    })
  }

  const handleSearchProducts = (): void => {
    history.push('/products')
  }

  const availableService = data && data.pocSearch.length > 0
  const unavailableService = data?.pocSearch.length === 0

  return (
    <>
      <Layout>
        <Container>
          <CustomerAddress onSelectAddress={onSelectAddress} />

          {availableService && <Button onClick={handleSearchProducts}>Buscar Produtos</Button>}

          {unavailableService && <Message text="Poxa, ainda não chegamos na sua região" image={unavailableMessage} />}
        </Container>
      </Layout>
      {loading && <Loading />}
    </>
  )
}

export default Home
