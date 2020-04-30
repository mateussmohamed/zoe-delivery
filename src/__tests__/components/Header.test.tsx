import React from 'react'

import { render } from 'test-utils'

import Header from '../../components/Header'

describe('<Header />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(<Header />)

    const header = getByTestId('header')

    expect(header).toBeDefined()
  })
})
