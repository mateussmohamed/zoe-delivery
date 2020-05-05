import React, { useState, useContext, useEffect, FC } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

import { Address } from '~/@types'
import { ZoeContext } from '~/context'
import { Types } from '~/context/reducers'

import Layout from '~/components/Layout'
import Loading from '~/components/Loading'
import Message from '~/components/Message'

import unavailableMessage from '../../assets/unavailable-service.svg'

import CustomerAddress from './components/CustomerAddress'
import POC_SEARCH_QUERY, { TPocSearchData, TPocVariables } from './graphql/pocSearch'

import { Container, Button } from './styles'

const Home: FC = () => {
  const { dispatch } = useContext(ZoeContext)
  const [customerAddress, setCustomerAddress] = useState<Address>()
  const [pocSearch, { loading, data }] = useLazyQuery<TPocSearchData, TPocVariables>(POC_SEARCH_QUERY)
  const history = useHistory()

  const availableService = data && data.pocSearch.length > 0
  const unavailableService = data?.pocSearch.length === 0

  const onSelectAddress = (lat: number, long: number, description: string): void => {
    pocSearch({
      variables: {
        lat: `${lat}`,
        long: `${long}`,
        algorithm: 'NEAREST',
        now: new Date().toISOString()
      }
    })

    setCustomerAddress({ lat, long, description })
  }

  const handleSearchProducts = (): void => {
    history.push('/products')
  }

  useEffect(() => {
    if (customerAddress?.description && data?.pocSearch.length) {
      dispatch({
        payload: { address: customerAddress, availablePocId: data.pocSearch[0].id },
        type: Types.UPDATE_ADDRESS
      })
    } else {
      dispatch({
        payload: { address: { long: 0, lat: 0, description: '' }, availablePocId: '' },
        type: Types.UPDATE_ADDRESS
      })
    }
  }, [data])

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
