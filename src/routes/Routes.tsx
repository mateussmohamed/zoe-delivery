import React, { FC } from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../modules/home/pages/Home'
import Products from '../modules/products/pages/Products'
import OrderSuccess from '../modules/order-success'
import NotFound from '../modules/not-found/'

import Bag from '~/modules/bag'

const Routes: FC = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/category/:categoryId" component={Products} />
        <Route exact path="/order/success" component={OrderSuccess} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Bag />
    </HashRouter>
  )
}

export default Routes
