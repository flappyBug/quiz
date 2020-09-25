import React, { Component } from "react";
import AddProductPage from "./AddProductPage";
import OrderPage from "./OrderPage";
import Header from "./Header";
import ProductListPage from "./ProductListPage";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render = () => (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/mall">
            <ProductListPage />
          </Route>
          <Route path="/order">
            <OrderPage />
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
