import React, { Component } from "react";
import { Button, message, Input } from "antd";
import Api from "./Api";

import "./addProductPage.css";

export default class AddProductPage extends Component {
  state = {
    name: "",
    price: 0,
    unit: "",
    image: "",
  };
  onSubmit = async event => {
    event.preventDefault();
    try {
      await Api.post("/product", {
        price: Math.round(this.state.price * 100),
        ...this.state,
      });
      message.success("提交成功");
    } catch (e) {
      message.error("提交失败");
    }
  };

  onFormChange = event => {
    const value =
      event.target.name === "price"
        ? Number(Number(event.target.value).toFixed(2))
        : event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };
  render() {
    const { name, price, unit, image } = this.state;
    const disableButton = !(name && price && unit && image);
    return (
      <div className='page add-product-page'>
        <h1>添加商品</h1>
        <label htmlFor='name'>名称：</label>
        <Input
          type='text'
          placeholder='名称'
          name='name'
          id='name'
          onChange={this.onFormChange}
        />
        <label htmlFor='price'>价格：</label>
        <Input
          type='number'
          placeholder='价格'
          name='price'
          id='price'
          min='0.00'
          step='0.01'
          value={this.state.price}
          onChange={this.onFormChange}
        />
        <label htmlFor='unit'>单位：</label>
        <Input
          type='text'
          placeholder='单位'
          name='unit'
          id='unit'
          onChange={this.onFormChange}
        />
        <label htmlFor='image'>图片：</label>
        <Input
          type='text'
          placeholder='URL'
          name='image'
          id='image'
          onChange={this.onFormChange}
        />
        <Button type='primary' disabled={disableButton} onClick={this.onSubmit}>
          提交
        </Button>
      </div>
    );
  }
}
