import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const Home: FC = () => {
  return (
    <div>
      <Header />

      <Link to="/products">Products</Link>

      <Footer />
    </div>
  )
}

export default Home
