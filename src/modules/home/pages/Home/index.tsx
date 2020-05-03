import React, { FC } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'

import Layout from '../../../../components/Layout'
import CustomerAddress from '../../components/CustomerAddress'
import Loading from '../../../../components/Loading'

import POC_SEARCH_QUERY, { TPocSearchData, TPocVariables } from '../../graphql/pocSearch'
import UnavailableService from '../../components/UnavailableService'

import { Container, Button } from './styles'

const Home: FC = () => {
  const [pocSearch, { loading, data }] = useLazyQuery<TPocSearchData, TPocVariables>(POC_SEARCH_QUERY)

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

  const availableService = data && data.pocSearch.length > 0
  const unavailableService = data?.pocSearch.length === 0

  return (
    <Layout>
      <Container>
        <CustomerAddress onSelectAddress={onSelectAddress} />

        {availableService && <Button>Buscar Produtos</Button>}

        {unavailableService && <UnavailableService />}

        {loading && <Loading />}
      </Container>
    </Layout>
  )
}

export default Home
