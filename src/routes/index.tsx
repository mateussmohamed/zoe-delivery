import React, { FC } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../modules/home/pages/Home'
import Products from '../modules/products/pages/Products'
import ProductDetail from '../modules/product/pages/ProductDetail'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/category/:categoryId" component={Products} />
        <Route exact path="/product/:id/:name" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
