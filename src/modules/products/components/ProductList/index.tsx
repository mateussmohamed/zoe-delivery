import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type IProps = {
  selectedCategory?: string | null
}

type Product = {
  id: string
  category: string
  name: string
  sku: string
  price: string
  image: string
}

const PRODUCTS: Product[] = [
  {
    id: '8502',
    category: '94',
    name: 'Skol 269ml',
    sku: 'skol-269ml',
    price: 'R$ 1,99',
    image:
      'https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
  },
  {
    id: '8742',
    category: '94',
    name: 'Brahma 600ml | Apenas o Líquido',
    sku: 'brahma-600ml-apenas-o-liquido',
    price: 'R$ 6,40',
    image:
      'https://courier-images-prod.imgix.net/produc_variant/00008742_5e9dc89b-2b27-45e6-9070-977b53a0128a.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
  },
  {
    id: '9893',
    category: '92',
    name: 'Vinho Reservado Concha y Toro Carmenere 750ml',
    sku: 'vinho-reservado-concha-y-toro-carmenere-750ml',
    price: 'R$ 44,99',
    image:
      'https://courier-images-prod.imgix.net/produc_variant/9893_fa04ba79-82b2-4a26-8849-3465cd63b1cd.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
  },
  {
    id: '9340',
    category: '92',
    name: 'Vinho Chileno Sta. Helena Merlot 750ml',
    sku: 'vinho-chileno-sta-helena-merlot-750ml',
    price: 'R$ 37,35',
    image:
      'https://courier-images-prod.imgix.net/produc_variant/00009340_d6a73865-1255-463c-a6e8-1f1927a04894.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'
  }
]

const ProductList: FC<IProps> = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory ? PRODUCTS.filter((p) => p.category === selectedCategory) : PRODUCTS

  return (
    <ul>
      {filteredProducts.map((item) => (
        <li key={item.id}>
          <img src={item.image} width={150} height={150} />
          <p>
            <Link to={`/product/${item.id}/${item.sku}`}>{item.name}</Link>
          </p>
          <p>Preço: {item.price}</p>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
