import React, { Component } from "react";
import Api from "./Api";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Product from "./Product";
import "./productListPage.css";
export default class ProductListPage extends Component {
  state = {
    isLoading: true,
    products: [],
  };

  componentDidMount = async () => {
    const products = await (await Api.get("/product")).json();
    this.setState({
      isLoading: false,
      products,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <div>加载中...</div>;
    }
    return (
      <div className='product-list'>
        {this.state.products.map((product, index) => (
          <Product
            key={index}
            onAddToCart={this.props.onAddToCart}
            {...product}
          />
        ))}
        <Button
          className='shopping-cart'
          type='primary'
          shape='circle'
          icon={<ShoppingCartOutlined />}
        />
      </div>
    );
  }
}
