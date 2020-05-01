import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import * as usePlacesAutocomplete from 'use-places-autocomplete'

import { render } from 'test-utils'

import Home from '~/modules/home/pages/Home'

jest.mock('use-places-autocomplete')

const mockedUsePlacesAutcomplete = usePlacesAutocomplete as jest.Mocked<typeof usePlacesAutocomplete>

const history = createMemoryHistory()

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

describe('<Home />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Home />
      </Router>
    )

    const header = getByTestId('zoe-header')
    const footer = getByTestId('zoe-footer')

    expect(header).toHaveTextContent('Zoe')
    expect(footer).toHaveTextContent('Zoe')
  })
})
