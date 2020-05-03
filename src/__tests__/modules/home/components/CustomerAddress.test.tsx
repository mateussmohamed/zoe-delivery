import React from 'react'
import * as usePlacesAutocomplete from 'use-places-autocomplete'

import { render, fireEvent, waitFor } from 'test-utils'

import CustomerAddress from '~/modules/home/components/CustomerAddress'

import typeResult from '../../../__mocks__/typeResult'
import geoCodeResult from '../../../__mocks__/geoCodeResult'

jest.mock('use-places-autocomplete')

const mockedUsePlacesAutcomplete = usePlacesAutocomplete as jest.Mocked<typeof usePlacesAutocomplete>

const onSelectAddressMock = jest.fn()

describe('<CustomerAddress />', () => {
  test('renders correctly', async () => {
    mockedUsePlacesAutcomplete.default.mockReturnValue({
      ready: false,
      value: '',
      suggestions: {
        loading: false,
        status: '',
        data: []
      },
      setValue: jest.fn(),
      clearSuggestions: jest.fn()
    })

    const { queryByTestId } = render(<CustomerAddress onSelectAddress={onSelectAddressMock} />)

    const container = queryByTestId('zoe-address-container')
    const input = queryByTestId('zoe-input-container')
    const suggestions = queryByTestId('zoe-address-suggestions')

    expect(container).toBeTruthy()
    expect(input).toBeTruthy()
    expect(suggestions).toBeNull()
  })

  describe('when customer type an address', () => {
    describe('when is valid term', () => {
      const clearSuggestionsMock = jest.fn()
      const setValueMock = jest.fn()

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
          value: 'major sertorio',
          suggestions: {
            loading: false,
            status: 'OK',
            data: typeResult.data
          }
        })
      })

      afterEach(() => {
        mockedUsePlacesAutcomplete.default.mockClear()
        mockedUsePlacesAutcomplete.getGeocode.mockClear()
        mockedUsePlacesAutcomplete.getLatLng.mockClear()
      })

      test('it should renders a list with terms', async () => {
        const { queryByTestId, queryAllByText } = render(<CustomerAddress onSelectAddress={onSelectAddressMock} />)

        const input = queryByTestId('zoe-input') as HTMLInputElement

        fireEvent.change(input, { target: { value: 'major sertorio' } })

        expect(input.value).toBe('major sertorio')

        await waitFor(() => {
          const suggestions = queryByTestId('zoe-address-suggestions')
          const terms = queryAllByText(/Rua Major Sertório/)

          expect(suggestions).toBeTruthy()
          expect(terms.length).toBe(5)
        })
      })

      test('it should clear list with suggestions after selected option', async () => {
        const { queryByTestId, queryAllByText } = render(<CustomerAddress onSelectAddress={onSelectAddressMock} />)

        const input = queryByTestId('zoe-input') as HTMLInputElement

        fireEvent.change(input, { target: { value: 'major sertorio' } })

        await waitFor(() => {
          const suggestions = queryAllByText(/Rua Major Sertório/)

          fireEvent.click(suggestions[0])

          expect(setValueMock).toBeCalled()
          expect(clearSuggestionsMock).toBeCalled()
          expect(onSelectAddressMock).toBeCalled()
          expect(onSelectAddressMock).toBeCalledWith(
            geoCodeResult[0].geometry.location.lat,
            geoCodeResult[0].geometry.location.lng
          )
        })
      })
    })

    describe('when is invalid term', () => {
      test('it should not render a list of terms', async () => {
        mockedUsePlacesAutcomplete.default.mockReturnValue({
          ready: true,
          value: 'loja do seu armando santana',
          suggestions: {
            loading: false,
            status: 'ZERO_RESULTS',
            data: []
          },
          setValue: jest.fn(),
          clearSuggestions: jest.fn()
        })

        const { queryByTestId } = render(<CustomerAddress onSelectAddress={onSelectAddressMock} />)

        const input = queryByTestId('zoe-input') as HTMLInputElement

        fireEvent.change(input, { target: { value: 'loja do seu armando santana' } })

        expect(input.value).toBe('loja do seu armando santana')

        await waitFor(() => {
          const suggestions = queryByTestId('zoe-address-suggestions')

          expect(suggestions).toBeFalsy()
        })
      })
    })
  })
})
