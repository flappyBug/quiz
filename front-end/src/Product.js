import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./product.css";
const Product = ({ name, price, unit, image, onAddToCart }) => (
  <div className='product'>
    <img src={image} alt={name} />
    <div className='desc'>
      <p>{name}</p>
      <p className='price'>
        单价：{price}元/{unit}
      </p>
      <Button
        icon={<PlusOutlined />}
        shape='circle'
        onClick={() => onAddToCart({ name, price, unit, image })}
      />
    </div>
  </div>
);
export default Product;
