import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import Layout from '~/components/Layout'
import Loading from '~/components/Loading'

import ProductList from '../../components/ProductList'
import Categories from '../../components/Categories'

import ALL_CATEGORIES_QUERY from '../../graphql/allCategories'
import POC_PRODUCTS_QUERY from '../../graphql/pocProducts'

import { Container } from './styles'
import { Product, Category } from '~/@types'

type RouteParams = {
  categoryId?: string
}

type CategoriesData = {
  allCategory: Category[] | undefined
}

type PocData = {
  id: string
  products: Product[] | undefined
}

type ProductsData = {
  poc: PocData
}

const Products: FC = () => {
  const { categoryId } = useParams<RouteParams>()
  const { loading: loadingCategories, data: dataCategories } = useQuery<CategoriesData>(ALL_CATEGORIES_QUERY)
  const { loading: loadingProducts, data: dataProducts } = useQuery<ProductsData>(POC_PRODUCTS_QUERY, {
    variables: {
      id: '532',
      search: '',
      categoryId: categoryId
    }
  })

  return (
    <>
      <Layout>
        <Container>
          <Categories categories={dataCategories?.allCategory} selectedCategory={categoryId} />

          <ProductList products={dataProducts?.poc.products} />
        </Container>
      </Layout>

      {(loadingCategories || loadingProducts) && <Loading />}
    </>
  )
}

export default Products
