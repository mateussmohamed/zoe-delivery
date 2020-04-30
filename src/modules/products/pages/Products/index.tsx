import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import ProductList from '../../components/ProductList'
import Categories from '../../components/Categories'
import Layout from '../../../../components/Layout'

import ALL_CATEGORIES_SEARCH from '../../graphql/allCategoriesSearch'

type RouteParams = {
  categoryId?: string
}

type IProps = {} & RouteComponentProps<RouteParams>

type Category = {
  title: string
  id: string
}

type CategoriesData = {
  allCategory: Category[]
}

const Products: FC<IProps> = ({ history, match }) => {
  const { loading, error, data: categories } = useQuery<CategoriesData>(ALL_CATEGORIES_SEARCH)

  const handleBack = (): void => (match.params.categoryId ? history.replace('/products') : history.goBack())

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Layout>
      <h1>Products</h1>
      <button onClick={handleBack}>voltar</button>
      <br />
      <br />
      <Categories data={categories?.allCategory} selectedCategory={match.params.categoryId} />
      <br />
      <br />
      <ProductList selectedCategory={match.params.categoryId} />
    </Layout>
  )
}

export default Products
