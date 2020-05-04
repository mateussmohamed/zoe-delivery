import { bagReducer, Types } from '~/context/reducers'

import pocProducts from '~/__tests__/__mocks__/pocProducts'

function buildSate(overrides?: any): any {
  return {
    products: [],
    amountToPay: 0,
    amountItems: 0,
    fixedFreight: 6.9,
    isOpen: false,
    ...overrides
  }
}

function buildPayload(overrides?: any): any {
  return {
    id: '8868',
    title: 'Skol 269ml - Unidade',
    amount: 1,
    images: [
      {
        url:
          'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg'
      }
    ],
    productVariants: [
      {
        price: 2.09
      }
    ],
    ...overrides
  }
}

describe('<BagReducer />', () => {
  describe('ADD_PRODUCT', () => {
    test('it should return state with one product', () => {
      const initialState = buildSate()
      const payload = buildPayload()
      const finalState = bagReducer(initialState, {
        payload,
        type: Types.ADD_PRODUCT
      })

      const expectedState = buildSate({ amountToPay: 2.09, amountItems: 1, products: [payload] })

      expect(finalState).toMatchObject(expectedState)
    })

    test('increases the quantity of the product already the bag', () => {
      const payload = buildPayload()
      const initialState = buildSate({ products: [payload] })
      const finalState = bagReducer(initialState, {
        payload,
        type: Types.ADD_PRODUCT
      })

      const expectedState = buildSate({ amountToPay: 4.18, amountItems: 2, products: [{ ...payload, amount: 2 }] })

      expect(finalState).toMatchObject(expectedState)
    })
  })

  describe('REMOVE_PRODUCT', () => {
    test('decreases the quantity of the product already the bag', () => {
      const payload = buildPayload()
      const initialState = buildSate({ products: [{ ...payload, amount: 3 }] })
      const finalState = bagReducer(initialState, {
        payload,
        type: Types.REMOVE_PRODUCT
      })

      const expectedState = buildSate({ amountToPay: 4.18, amountItems: 2, products: [{ ...payload, amount: 2 }] })

      expect(finalState).toMatchObject(expectedState)
    })

    test('it should remove product to bag', () => {
      const payload = { ...pocProducts.data.poc.products[0], amount: 1 }
      const initialState = buildSate({
        products: [payload]
      })

      const finalState = bagReducer(initialState, {
        payload,
        type: Types.REMOVE_PRODUCT
      })

      const expectedState = buildSate({ amountToPay: 0, amountItems: 0, products: [] })

      expect(finalState).toMatchObject(expectedState)
    })
  })

  describe('TOGGLE_BAG', () => {
    test('it should open the Bag if is closed', () => {
      const initialState = buildSate()
      const finalState = bagReducer(initialState, {
        payload: true,
        type: Types.TOGGLE_BAG
      })

      const expectedState = buildSate({ isOpen: true })

      expect(finalState).toMatchObject(expectedState)
    })

    test('it should close the Bag if is opened', () => {
      const initialState = buildSate({ isOpen: true })
      const finalState = bagReducer(initialState, {
        payload: !initialState.isOpen,
        type: Types.TOGGLE_BAG
      })

      const expectedState = buildSate({ isOpen: !initialState.isOpen })

      expect(finalState).toMatchObject(expectedState)
    })
  })
})
