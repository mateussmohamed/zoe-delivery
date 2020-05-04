import { ProductCart } from '~/@types'

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
  OPEN_CART = 'OPEN_CART'
}

type BagPayload = {
  [Types.ADD_PRODUCT]: ProductCart
  [Types.REMOVE_PRODUCT]: ProductCart
  [Types.OPEN_CART]: boolean
}

export type BagType = {
  products: ProductCart[]
  amountToPay: number
  amountItems: number
  fixedFreight: number
  isOpen: boolean
}

export type BagActions = ActionMap<BagPayload>[keyof ActionMap<BagPayload>]

const calcAmountToPay = (products: ProductCart[]): number =>
  products.reduce((acc, current) => {
    const amount = current.amount || 1
    return acc + current.productVariants[0].price * amount
  }, 0)

const calcAmountItems = (products: ProductCart[]): number =>
  products.reduce((acc, current) => {
    const amount = current.amount || 1
    return acc + amount
  }, 0)

const addToCart = (currentProducts: ProductCart[], payload: ProductCart): ProductCart[] => {
  const isInCart = currentProducts.find((product) => product.id === payload.id)

  if (isInCart) {
    return currentProducts.map((product) => {
      if (product.id === payload.id) {
        product.amount = product.amount ? product.amount + 1 : 1
      }

      return product
    })
  }

  return [...currentProducts, { ...payload, amount: 1 }]
}

const removeToCart = (currentProducts: ProductCart[], payload: ProductCart): ProductCart[] => {
  const productIsInCart = currentProducts.find((product) => product.id === payload.id)

  if (productIsInCart && productIsInCart.amount === 1) {
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
      const products = addToCart(state.products, action.payload)
      const amountToPay = calcAmountToPay(products)
      const amountItems = calcAmountItems(products)

      return Object.assign({}, { ...state, products, amountToPay, amountItems })
    }
    case Types.REMOVE_PRODUCT: {
      const products = removeToCart(state.products, action.payload)
      const amountToPay = calcAmountToPay(products)
      const amountItems = calcAmountItems(products)

      return Object.assign({}, { ...state, products, amountToPay, amountItems })
    }
    case Types.OPEN_CART: {
      return Object.assign({}, { ...state, isOpen: !state.isOpen })
    }
    default:
      return state
  }
}
