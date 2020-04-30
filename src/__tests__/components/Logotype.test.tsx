import React from 'react'

import { render } from 'test-utils'

import Logotype from '~/components/Logotype'

describe('<Logotype />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(<Logotype />)

    const title = getByTestId('zoe-logo-title')
    const subtitle = getByTestId('zoe-logo-subtitle')

    expect(title.textContent).toBe('Zoe')
    expect(subtitle.textContent).toBe('Delivery')
  })
})
