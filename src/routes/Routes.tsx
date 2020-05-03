import React, { FC } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../modules/home/pages/Home'
import Products from '../modules/products/pages/Products'

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/category/:categoryId" component={Products} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
