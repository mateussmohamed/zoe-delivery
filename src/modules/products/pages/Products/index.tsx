import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import ProductList from '../../components/ProductList'
import Categories from '../../components/Categories'

type RouteParams = {
  categoryId?: string
}

type IProps = {} & RouteComponentProps<RouteParams>

const Products: FC<IProps> = ({ history, match }) => {
  return (
    <div>
      <h1>Products</h1>
      <button
        onClick={() => {
          return match.params.categoryId ? history.replace('/products') : history.goBack()
        }}>
        voltar
      </button>
      <br />
      <br />
      <Categories selectedCategory={match.params.categoryId} />
      <br />
      <br />
      <ProductList selectedCategory={match.params.categoryId} />
    </div>
  )
}

export default Products
