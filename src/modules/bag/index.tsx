import React, { useContext, FC, ReactNode, SyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { ProductBag } from '~/@types'
import { ZoeContext } from '~/context'
import { Types } from '~/context/reducers'
import Message from '~/components/Message'

import productWithoutImage from '../../assets/product-without-image.png'
import emptyBag from '../../assets/empty-bag.svg'

import {
  Overlay,
  Container,
  Header,
  HeaderTitle,
  CloseBag,
  Products,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductActions,
  ProductMinus,
  ProductPlus,
  Footer,
  FooterItem,
  FooterItemLeft,
  FooterItemRight,
  CheckoutButton
} from './styles'

const Bag: FC = () => {
  const {
    state: {
      bag: { products, isOpen, amountItems, amountToPay, fixedFreight }
    },
    dispatch
  } = useContext(ZoeContext)
  const history = useHistory()
  const hasProducts = products.length > 0

  const fallbackImage = (e: SyntheticEvent<HTMLImageElement>): void => {
    e.currentTarget.onerror = null
    e.currentTarget.src = productWithoutImage
  }

  const handleToggleBag = (): void => {
    dispatch({
      type: Types.TOGGLE_BAG,
      payload: !isOpen
    })
  }

  const handleRemoveProduct = (product: ProductBag) => (): void => {
    dispatch({ type: Types.REMOVE_PRODUCT, payload: product })
  }

  const handleAddProduct = (product: ProductBag) => (): void => {
    dispatch({ type: Types.ADD_PRODUCT, payload: product })
  }

  const handleCheckout = (): void => {
    dispatch({
      type: Types.CHECKOUT,
      payload: true
    })

    history.replace('/order/success')
  }

  const renderProducts = (): ReactNode => {
    return products.map((product) => (
      <Product key={product.id}>
        <ProductImage src={product.images[0].url} onError={fallbackImage} />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.productVariants[0].price}</ProductPrice>
          <ProductActions>
            <ProductMinus data-testid="zoe-bag-product-remove" onClick={handleRemoveProduct(product)} />
            <ProductPrice data-testid="zoe-bag-product-amount">{product.amount}</ProductPrice>
            <ProductPlus data-testid="zoe-bag-product-add" onClick={handleAddProduct(product)} />
          </ProductActions>
        </ProductInfo>
      </Product>
    ))
  }

  if (!isOpen) return null

  return (
    <Overlay>
      <Container>
        <Header>
          <HeaderTitle>Sacola</HeaderTitle>
          <CloseBag data-testid="zoe-bag-toggle-btn" onClick={handleToggleBag}>
            x
          </CloseBag>
        </Header>
        <Products>
          {hasProducts ? renderProducts() : <Message image={emptyBag} text="Ops! a sacola está vazia!" />}
        </Products>
        {hasProducts && (
          <Footer>
            <FooterItem>
              <FooterItemLeft>{amountItems} produtos</FooterItemLeft>
              <FooterItemRight>R$ {amountToPay.toFixed(2)}</FooterItemRight>
            </FooterItem>
            <FooterItem>
              <FooterItemLeft>Frete</FooterItemLeft>
              <FooterItemRight>R$ {fixedFreight.toFixed(2)}</FooterItemRight>
            </FooterItem>
            <FooterItem>
              <FooterItemLeft>Total a Pagar</FooterItemLeft>
              <FooterItemRight>R$ {(amountToPay + fixedFreight).toFixed(2)}</FooterItemRight>
            </FooterItem>
            <CheckoutButton data-testid="zoe-bag-checkout-btn" onClick={handleCheckout}>
              Finalizar Pedido
            </CheckoutButton>
          </Footer>
        )}
      </Container>
    </Overlay>
  )
}

export default Bag
