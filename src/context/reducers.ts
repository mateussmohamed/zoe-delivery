import { ProductBag } from '~/@types'
import { INITIAL_STATE } from './index'
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  TOGGLE_BAG = 'TOGGLE_BAG',
  CHECKOUT = 'CHECKOUT'
}

type BagPayload = {
  [Types.ADD_PRODUCT]: ProductBag
  [Types.REMOVE_PRODUCT]: ProductBag
  [Types.TOGGLE_BAG]: boolean
  [Types.CHECKOUT]: boolean
}

export type BagType = {
  products: ProductBag[]
  amountToPay: number
  amountItems: number
  fixedFreight: number
  isOpen: boolean
}

export type BagActions = ActionMap<BagPayload>[keyof ActionMap<BagPayload>]

const calcAmountToPay = (products: ProductBag[]): number =>
  products.reduce((acc, current) => {
    const amount = current.amount || 1
    return acc + current.productVariants[0].price * amount
  }, 0)

const calcAmountItems = (products: ProductBag[]): number =>
  products.reduce((acc, current) => {
    const amount = current.amount || 1
    return acc + amount
  }, 0)

const addToBag = (currentProducts: ProductBag[], payload: ProductBag): ProductBag[] => {
  const isInBag = currentProducts.find((product) => product.id === payload.id)

  if (isInBag) {
    return currentProducts.map((product) => {
      if (product.id === payload.id) {
        product.amount = product.amount ? product.amount + 1 : 1
      }

      return product
    })
  }

  return [...currentProducts, { ...payload, amount: 1 }]
}

const removeToBag = (currentProducts: ProductBag[], payload: ProductBag): ProductBag[] => {
  const productIsInBag = currentProducts.find((product) => product.id === payload.id)

  if (productIsInBag && productIsInBag.amount === 1) {
    return currentProducts.filter((product) => product.id !== payload.id)
  }

  return currentProducts.map((product) => {
    if (product.id === payload.id) {
      product.amount = product.amount ? product.amount - 1 : 1
    }

    return product
  })
}

export const bagReducer = (state: BagType, action: BagActions): any => {
  switch (action.type) {
    case Types.ADD_PRODUCT: {
      const products = addToBag(state.products, action.payload)
      const amountToPay = calcAmountToPay(products)
      const amountItems = calcAmountItems(products)

      return Object.assign({}, { ...state, products, amountToPay, amountItems })
    }
    case Types.REMOVE_PRODUCT: {
      const products = removeToBag(state.products, action.payload)
      const amountToPay = calcAmountToPay(products)
      const amountItems = calcAmountItems(products)

      return Object.assign({}, { ...state, products, amountToPay, amountItems })
    }
    case Types.TOGGLE_BAG: {
      return Object.assign({}, { ...state, isOpen: !state.isOpen })
    }
    case Types.CHECKOUT: {
      return INITIAL_STATE.bag
    }
    default:
      return state
  }
}
