import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import CustomerAddress from '../components/CustomerAddress'

const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <CustomerAddress />

      <Link to="/products">Products</Link>
    </div>
  )
}

export default Home
