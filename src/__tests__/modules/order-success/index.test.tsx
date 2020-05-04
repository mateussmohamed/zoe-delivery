import React from 'react'
import { render, waitFor } from 'test-utils'

import OrderSuccess from '~/modules/order-success'

describe('<OrderSuccess />', () => {
  test('it should render a message', async () => {
    const { findByTestId } = render(<OrderSuccess />)

    await waitFor(async () => {
      const message = await findByTestId('zoe-message')
      const text = await findByTestId('zoe-message-text')

      expect(message).toBeTruthy()
      expect(text.textContent).toBe('Aeeeee! Logo mais sua bebidas chegaram geladinhas em sua casa')
    })
  })
})
