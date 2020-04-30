import React from 'react'

import { render } from 'test-utils'

import Logo from '~/components/Logo'

describe('<Logo />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(<Logo />)

    const footer = getByTestId('zoe-logo')

    expect(footer).toBeDefined()
  })
})
