import React from 'react'
import * as usePlacesAutocomplete from 'use-places-autocomplete'
import { ApolloProvider } from '@apollo/react-hooks'
import { createMockClient, MockApolloClient } from 'mock-apollo-client'
import { render, fireEvent, waitFor } from 'test-utils'

import Home from '~/modules/home/pages/Home'
import POC_SEARCH_QUERY from '~/modules/home/graphql/pocSearch'

import typeResult from '~/__tests__/__mocks__/typeResult'
import geoCodeResult from '~/__tests__/__mocks__/geoCodeResult'

jest.mock('use-places-autocomplete')
const pushMock = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: pushMock
  })
}))

const mockedUsePlacesAutcomplete = usePlacesAutocomplete as jest.Mocked<typeof usePlacesAutocomplete>
const clearSuggestionsMock = jest.fn()
const setValueMock = jest.fn()

console.error = jest.fn()

describe('<Home />', () => {
  describe('when customer type a address', () => {
    let mockClient: MockApolloClient

    afterEach(() => jest.restoreAllMocks())
    beforeEach(() => {
      // @ts-ignore
      mockedUsePlacesAutcomplete.getGeocode.mockResolvedValue(geoCodeResult)
      mockedUsePlacesAutcomplete.getLatLng.mockResolvedValue({
        lat: geoCodeResult[0].geometry.location.lat,
        lng: geoCodeResult[0].geometry.location.lng
      })
      mockedUsePlacesAutcomplete.default.mockReturnValue({
        setValue: setValueMock,
        clearSuggestions: clearSuggestionsMock,
        ready: true,
        value: 'rua americo brasiliense',
        suggestions: {
          loading: false,
          status: 'OK',
          data: typeResult.data
        }
      })

      mockClient = createMockClient()

      jest.spyOn(Date.prototype, 'toISOString').mockReturnValue('2020-05-02T22:27:44.795Z')
    })

    describe('when customer selected an available address to delivery', () => {
      test('it should render <Button /> to search products', async () => {
        const returnQuery = {
          loading: false,
          data: {
            pocSearch: [
              {
                id: '532',
                status: 'AVAILABLE',
                tradingName: 'Distribuidor de Treinamento',
                officialName: 'Distribuidor de Treinamento'
              }
            ]
          }
        }

        const pocSearchHandler = jest.fn().mockResolvedValue(returnQuery)

        mockClient.setRequestHandler(POC_SEARCH_QUERY, pocSearchHandler)

        const { findAllByTestId, findByTestId } = render(
          <ApolloProvider client={mockClient}>
            <Home />
          </ApolloProvider>
        )

        const suggestions = await findAllByTestId('zoe-address-suggestions-item')

        fireEvent.click(suggestions[0])

        const button = await findByTestId('zoe-button-search-products')

        fireEvent.click(button)

        await waitFor(async () => {
          expect(pocSearchHandler).toBeCalledTimes(1)
          expect(pocSearchHandler).toBeCalledWith({
            lat: '-23.5454401',
            long: '-46.6479462',
            algorithm: 'NEAREST',
            now: '2020-05-02T22:27:44.795Z'
          })

          expect(button).toBeTruthy()
          expect(pushMock).toBeCalled()
          expect(pushMock).toBeCalledWith('/products')
        })
      })
    })

    describe('when customer type an unavailable address to delivery', () => {
      test('it should render <Message /> message', async () => {
        mockedUsePlacesAutcomplete.getLatLng.mockResolvedValue({
          lat: -99.434343,
          lng: -343.4343
        })

        const returnQuery = {
          loading: false,
          data: {
            pocSearch: []
          }
        }

        const pocSearchHandler = jest.fn().mockResolvedValue(returnQuery)

        mockClient.setRequestHandler(POC_SEARCH_QUERY, pocSearchHandler)

        const { findAllByTestId, findByTestId } = render(
          <ApolloProvider client={mockClient}>
            <Home />
          </ApolloProvider>
        )

        const suggestions = await findAllByTestId('zoe-address-suggestions-item')

        fireEvent.click(suggestions[0])

        await waitFor(async () => {
          const unavailable = await findByTestId('zoe-message')

          expect(unavailable).toBeTruthy()
          expect(pocSearchHandler).toBeCalledTimes(1)
          expect(pocSearchHandler).toBeCalledWith({
            lat: '-99.434343',
            long: '-343.4343',
            algorithm: 'NEAREST',
            now: '2020-05-02T22:27:44.795Z'
          })
        })
      })
    })
  })
})
