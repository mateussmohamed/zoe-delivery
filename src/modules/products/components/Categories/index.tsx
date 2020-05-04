import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import { Category } from '~/@types'

import { Container, Button } from './styles'

type TProps = {
  categories: Category[] | undefined
  selectedCategory?: string | null
}

const Categories: FC<TProps> = ({ categories, selectedCategory }) => {
  const history = useHistory()
  const hasFilter = history.location.pathname === '/products'

  const handleSelectCategory = (id: string) => (): void => {
    history.push(`/products/category/${id}`)
  }

  const handleClearFilters = () => (): void => {
    history.push('/products')
  }

  if (!categories) return null

  return (
    <Container data-testid="zoe-categories">
      <Button
        data-testid="zoe-categories-item-btn-all"
        data-isactive={hasFilter}
        isActive={hasFilter}
        onClick={handleClearFilters()}
      >
        Todos
      </Button>
      {categories.map((cat) => (
        <Button
          key={cat.id}
          data-testid="zoe-categories-item-btn"
          onClick={handleSelectCategory(cat.id)}
          isActive={selectedCategory === cat.id}
        >
          {cat.title}
        </Button>
      ))}
    </Container>
  )
}

export default React.memo(Categories)
