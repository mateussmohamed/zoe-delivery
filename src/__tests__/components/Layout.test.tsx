import React from 'react'

import { render } from 'test-utils'

import Layout from '~/components/Layout'

describe('<Layout />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(<Layout />)

    const container = getByTestId('zoe-layout')
    const header = getByTestId('zoe-header')
    const middle = getByTestId('zoe-layout-middle')
    const footer = getByTestId('zoe-footer')

    expect(container).toBeDefined()
    expect(header).toBeDefined()
    expect(middle).toBeDefined()
    expect(footer).toBeDefined()
  })
})
