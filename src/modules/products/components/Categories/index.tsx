import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type Category = {
  title: string
  id: string
}
type IProps = {
  data: Category[] | undefined
  selectedCategory?: string | null
}

const Categories: FC<IProps> = ({ data, selectedCategory }) => {
  if (!data) return null

  return (
    <ul>
      {data.map((cat) => (
        <li key={cat.id}>
          <Link to={`/products/category/${cat.id}`}>
            {selectedCategory === cat.id ? `${cat.title} - selected` : cat.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Categories
