import React from 'react'

import { render } from 'test-utils'

import App from '../App'

describe('<App />', () => {
  test('renders a Root component', async () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  })
})
