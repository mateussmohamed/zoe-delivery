import React from 'react'

type IProps = {
  id: string
  name: string
}

const ProductDetail: React.FC<IProps> = ({ id, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{id}</h3>
    </div>
  )
}

export default ProductDetail
