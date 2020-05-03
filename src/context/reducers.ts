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
  REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

type BagPayload = {
  [Types.ADD_PRODUCT]: ProductCart
  [Types.REMOVE_PRODUCT]: ProductCart
}

type BagType = {
  products: ProductCart[]
  total: number
}

export type BagActions = ActionMap<BagPayload>[keyof ActionMap<BagPayload>]

const calcTotalCart = (products: ProductCart[]): number =>
  products.reduce((acc, current) => {
    const qty = current.qty || 1
    return acc + current.productVariants[0].price * qty
  }, 0)

const addToCart = (currentProducts: ProductCart[], payload: ProductCart): BagType => {
  const productToAdd = currentProducts.find((product) => product.id === payload.id)

  // let newProducts: ProductCart[]

  // if (productToAdd?.id) {
  //   newProducts = currentProducts.map((product) => {
  //     if (product.id === productToAdd.id && product.qty) {
  //       product.qty += 1
  //     }
  //     return product
  //   })
  // } else {
  //   newProducts = [...currentProducts, { ...payload, qty: 1 }]
  // }

  const newProducts: ProductCart[] = [
    ...currentProducts.filter((product) => product.id !== payload.id),
    Object.assign({}, payload, { qty: productToAdd?.qty ? productToAdd.qty + 1 : 1 })
  ]

  const total = calcTotalCart(newProducts)

  return Object.assign({}, { products: newProducts, total })
}

const removeToCart = (currentProducts: ProductCart[], payload: ProductCart): BagType => {
  const newProducts = currentProducts
    .map((product) => {
      if (product.id === payload.id && product.qty) {
        product.qty -= 1
      }
      return product
    })
    .filter((product) => product?.qty)

  const total = calcTotalCart(newProducts)

  return Object.assign({}, { products: newProducts, total })
}

export const bagReducer = (state: BagType, action: BagActions): any => {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return addToCart(state.products, action.payload)

    case Types.REMOVE_PRODUCT:
      return removeToCart(state.products, action.payload)
    default:
      return state
  }
}
