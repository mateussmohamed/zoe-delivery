import React from 'react'

import { render } from 'test-utils'

import Header from '~/components/Header'

describe('<Header />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(<Header />)

    const header = getByTestId('zoe-header')
    const image = getByTestId('zoe-logo')
    const title = getByTestId('zoe-logo-title')
    const subTitle = getByTestId('zoe-logo-subtitle')

    expect(header).toBeDefined()
    expect(image).toBeDefined()
    expect(title).toBeDefined()
    expect(subTitle).toBeDefined()
  })
})
