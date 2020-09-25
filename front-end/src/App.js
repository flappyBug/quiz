import React, { Component } from "react";
import AddProductPage from "./AddProductPage";
import OrderPage from "./OrderPage";
import Header from "./Header";
import ProductListPage from "./ProductListPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render = () => (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductListPage />
          </Route>
          <Route path="/order">
            <OrderPage />
          </Route>
          <Route path="/add">
            <AddProductPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
