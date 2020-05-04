import React, { useContext, FC, SyntheticEvent } from 'react'

import { ProductBag } from '~/@types'
import Message from '~/components/Message'
import { ZoeContext } from '~/context'
import { Types } from '~/context/reducers'

import productWithoutImage from '../../../../assets/product-without-image.png'
import emptySearch from '../../../../assets/empty-search.svg'

import { Cards, Card, ProductTitle, ProductImage, ProductPrice, AddToBagButton } from './style'

type TProps = {
  products?: ProductBag[] | undefined
}

const ProductList: FC<TProps> = ({ products }) => {
  const { dispatch } = useContext(ZoeContext)

  const handleAddProduct = (product: ProductBag) => (): void => {
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
    <Cards data-testid="zoe-products">
      {products.map((product) => (
        <Card key={product.id} data-testid="zoe-product-item">
          <ProductImage data-testid="zoe-product-image" src={product.images[0].url} onError={fallbackImage} />
          <ProductTitle data-testid="zoe-product-title">{product.title}</ProductTitle>
          <ProductPrice data-testid="zoe-product-price">R${product.productVariants[0].price}</ProductPrice>
          <AddToBagButton data-testid="zoe-product-btn-add" onClick={handleAddProduct(product)}>
            &nbsp;Adicionar
          </AddToBagButton>
        </Card>
      ))}
    </Cards>
  )
}

export default ProductList
