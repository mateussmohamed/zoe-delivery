import React from 'react'

import { render } from 'test-utils'

import Footer from '~/components/Footer'

describe('<Footer />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(<Footer />)

    const footer = getByTestId('zoe-footer')
    const logotype = getByTestId('zoe-logotype')
    const description = getByTestId('zoe-footer-description')

    expect(footer).toBeDefined()
    expect(logotype).toHaveTextContent('ZoeDelivery')
    expect(description).toHaveTextContent('Made with love 💖')
  })
})
