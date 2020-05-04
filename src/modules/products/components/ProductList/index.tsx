import React, { useContext, FC, SyntheticEvent } from 'react'

import { ProductCart } from '~/@types'
import Message from '~/components/Message'
import { ZoeContext } from '~/context'
import { Types } from '~/context/reducers'

import productWithoutImage from '../../../../assets/product-without-image.png'
import emptySearch from '../../../../assets/empty-search.svg'

import { Cards, Card, ProductTitle, ProductImage, ProductPrice, AddToCartButton } from './style'

type TProps = {
  products?: ProductCart[] | undefined
}

const ProductList: FC<TProps> = ({ products }) => {
  const { dispatch } = useContext(ZoeContext)

  const handleAddProduct = (product: ProductCart) => (): void => {
    dispatch({ type: Types.ADD_PRODUCT, payload: product })
  }

  const fallbackImage = (e: SyntheticEvent<HTMLImageElement>): void => {
    e.currentTarget.onerror = null
    e.currentTarget.src = productWithoutImage
  }

  if (!products) return null

  if (products.length === 0) {
    return <Message image={emptySearch} text="Parece que os produtos que você pesquisou foram abduzidos!" />
  }

  return (
    <Cards>
      {products.map((product) => (
        <Card key={product.id}>
          <ProductImage src={product.images[0].url} onError={fallbackImage} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>R${product.productVariants[0].price}</ProductPrice>
          <AddToCartButton onClick={handleAddProduct(product)}>&nbsp;Adicionar</AddToCartButton>
        </Card>
      ))}
    </Cards>
  )
}

export default ProductList
