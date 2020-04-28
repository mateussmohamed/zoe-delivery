import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type IProps = {
  selectedCategory?: string | null
}

type Category = {
  id: string
  name: string
}

const CATEGORIES: Category[] = [
  { id: '94', name: 'Cervejas' },
  { id: '92', name: 'Vinhos' }
]

const Categories: FC<IProps> = ({ selectedCategory }) => {
  return (
    <ul>
      {CATEGORIES.map((cat) => (
        <li key={cat.id}>
          <Link to={`/products/category/${cat.id}`}>
            {selectedCategory === cat.id ? `${cat.name} - selected` : cat.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Categories
