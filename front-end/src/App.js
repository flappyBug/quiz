import React, { Component } from "react";
import AddProductPage from "./AddProductPage";
import OrderPage from "./OrderPage";
import Header from "./Header";
import ProductListPage from "./ProductListPage";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  state = {
    orders: {},
  };

  onAddToCart = (product) => {
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
      orders: Object.assign({ [product.name]: order }, this.state.orders),
    });
  };
  render = () => (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/mall">
            <ProductListPage onAddToCart={this.onAddToCart} />
          </Route>
          <Route path="/order">
            <OrderPage orders={this.state.orders} />
          </Route>
          <Route path="/add">
            <AddProductPage />
          </Route>
          <Redirect to="/mall" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
