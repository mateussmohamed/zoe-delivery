import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../../components/Layout'

const Home: FC = () => {
  return (
    <Layout>
      <Link to="/products">Products</Link>
    </Layout>
  )
}

export default Home
