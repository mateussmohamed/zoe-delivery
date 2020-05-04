import React from 'react'
import { render, fireEvent, waitFor, RenderResult } from 'test-utils'

import { ZoeContext } from '~/context'
import pocProducts from '~/__tests__/__mocks__/pocProducts'
import Bag from '~/modules/bag/'

const mockDispatch = jest.fn()
const replaceMock = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(() => ({
    replace: replaceMock
  }))
}))

const initialState = {
  bag: {
    isOpen: false,
    products: [],
    amountToPay: 0,
    amountItems: 0,
    fixedFreight: 6.9
  }
}

function setup(state: any): RenderResult {
  return render(
    <ZoeContext.Provider
      value={{
        state: { bag: { ...initialState.bag, ...state } },
        dispatch: mockDispatch
      }}
    >
      <Bag />
    </ZoeContext.Provider>
  )
}

describe('<Bag />', () => {
  afterEach(() => {
    mockDispatch.mockClear()
  })

  describe('when bag is empty', () => {
    test('it should render a message', async () => {
      const { findByTestId } = setup({ isOpen: true })

      await waitFor(async () => {
        const message = await findByTestId('zoe-message')
        const text = await findByTestId('zoe-message-text')

        expect(message).toBeTruthy()
        expect(text.textContent).toBe('Ops! a sacola está vazia!')
      })
    })
  })

  describe('when customer clicks to close bag', () => {
    test('it should close bag', async () => {
      const { findByTestId } = setup({ isOpen: true })

      await waitFor(async () => {
        const toggleBtn = await findByTestId('zoe-bag-toggle-btn')

        fireEvent.click(toggleBtn)

        expect(mockDispatch).toBeCalled()
        expect(mockDispatch).toBeCalledWith({
          type: 'TOGGLE_BAG',
          payload: false
        })
      })
    })
  })

  describe('when customer decreases or increases a product amount', () => {
    test('it should increases amount if clicks add button', async () => {
      const product = { ...pocProducts.data.poc.products[0], amount: 1 }
      const { findByTestId } = setup({
        isOpen: true,
        amountToPay: 2.09,
        amountItems: 1,
        products: [product]
      })

      await waitFor(async () => {
        const buttonAdd = await findByTestId('zoe-bag-product-add')

        fireEvent.click(buttonAdd)

        expect(mockDispatch).toBeCalled()
        expect(mockDispatch).toBeCalledWith({
          type: 'ADD_PRODUCT',
          payload: product
        })
      })
    })

    test('it should decreases amount if clicks remove button', async () => {
      const product = { ...pocProducts.data.poc.products[0], amount: 2 }
      const { findByTestId } = setup({
        isOpen: true,
        amountToPay: 4.18,
        amountItems: 2,
        products: [product]
      })

      await waitFor(async () => {
        const buttonAdd = await findByTestId('zoe-bag-product-remove')

        fireEvent.click(buttonAdd)

        expect(mockDispatch).toBeCalled()
        expect(mockDispatch).toBeCalledWith({
          type: 'REMOVE_PRODUCT',
          payload: product
        })
      })
    })
  })

  describe('when customer finished shopping', () => {
    test('it should should clear bag and redirect to order succes page', async () => {
      const { findByTestId } = setup({
        isOpen: true,
        amountToPay: 2.09,
        amountItems: 1,
        products: [
          { ...pocProducts.data.poc.products[0], amount: 2 },
          { ...pocProducts.data.poc.products[3], amount: 3 }
        ]
      })

      await waitFor(async () => {
        const checkoutBtn = await findByTestId('zoe-bag-checkout-btn')

        fireEvent.click(checkoutBtn)

        expect(mockDispatch).toBeCalled()
        expect(mockDispatch).toBeCalledWith({
          type: 'CHECKOUT',
          payload: true
        })

        expect(replaceMock).toBeCalled()
        expect(replaceMock).toBeCalledWith('/order/success')
      })
    })
  })
})
