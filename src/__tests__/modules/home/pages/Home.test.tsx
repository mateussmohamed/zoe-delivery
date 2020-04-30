import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { render } from 'test-utils'

import Home from '~/modules/home/pages/Home'

jest.mock('../../assets/zoe-logo.svg')

const history = createMemoryHistory()

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
