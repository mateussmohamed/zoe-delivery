import React from 'react'

import { render, fireEvent } from 'test-utils'

import AddressInput from '~/components/AddressInput'

describe('<AddressInput />', () => {
  test('renders correctly', async () => {
    const { getByTestId } = render(<AddressInput placeholder="Address" />)

    const container = getByTestId('zoe-input-container')
    const input = getByTestId('zoe-input')
    const icon = getByTestId('zoe-input-icon')

    expect(container).toBeDefined()
    expect(input).toBeDefined()
    expect(icon).toBeDefined()
  })

  describe('when user enter data', () => {
    test('it should changes input', async () => {
      const { getByTestId } = render(<AddressInput />)

      const input = getByTestId('zoe-input') as HTMLInputElement

      fireEvent.change(input, { target: { value: 'rua major' } })

      expect(input.value).toBe('rua major')
    })
  })

  describe('when input is disable', () => {
    test('it shouldn"t to allow the user interact', async () => {
      const { getByTestId } = render(<AddressInput disabled />)

      const input = getByTestId('zoe-input') as HTMLInputElement

      expect(input.disabled).toBe(true)
    })
  })
})
