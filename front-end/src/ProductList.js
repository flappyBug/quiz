import React, { Component } from "react";
import Api from "./Api";
import Product from "./Product";

export default class ProductList extends Component {
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
      <div className="product-list">
        {this.state.products.map((product, index) => (
          <Product
            key={index}
            onAddToCart={this.props.onAddToCart}
            {...product}
          />
        ))}
      </div>
    );
  }
}
