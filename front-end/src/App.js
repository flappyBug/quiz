import React, { Component } from "react";
import AddProductPage from "./AddProductPage";
import OrderPage from "./OrderPage";
import Header from "./Header";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  state = {
    orders: {},
  };

  onAddToCart = product => {
    let order = this.state.orders[product.name];
    if (order) {
      order.count += 1;
    } else {
      order = {
        count: 1,
        product,
      };
    }
    this.setState({
      orders: Object.assign({}, this.state.orders, { [product.name]: order }),
    });
  };

  onRemoveFromCart = product => {
    this.setState({
      orders: Object.assign({}, this.state.orders, {
        [product.name]: {
          count: 0,
          product,
        },
      }),
    });
  };

  onSubstractOrderInCart = product => {
    let order = this.state.orders[product.name];
    order.count = order.count > 0 ? order.count - 1 : 0;
    this.setState({
      orders: Object.assign({}, this.state.orders, {
        [product.name]: order,
      }),
    });
  };

  onClearCart = () => {
    this.setState({ orders: {} });
  };

  render = () => (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <main className='content'>
          <Switch>
            <Route path='/mall'>
              <ProductListPage
                onAddToCart={this.onAddToCart}
                orders={this.state.orders}
                onSubstractOrderInCart={this.onSubstractOrderInCart}
                onRemoveFromCart={this.onRemoveFromCart}
                onClearCart={this.onClearCart}
              />
            </Route>
            <Route path='/order'>
              <OrderPage orders={this.state.orders} />
            </Route>
            <Route path='/add'>
              <AddProductPage />
            </Route>
            <Redirect to='/mall' />
          </Switch>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
