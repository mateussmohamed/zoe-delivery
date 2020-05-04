import React from 'react'
import { render, waitFor } from 'test-utils'

import NotFound from '~/modules/not-found'

describe('<NotFound />', () => {
  test('it should render a message', async () => {
    const { findByTestId } = render(<NotFound />)

    await waitFor(async () => {
      const message = await findByTestId('zoe-message')
      const text = await findByTestId('zoe-message-text')

      expect(message).toBeTruthy()
      expect(text.textContent).toBe('Ihhhhh! Deu ruim hein!?')
    })
  })
})
