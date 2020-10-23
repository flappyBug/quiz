import React from "react";
import { Table, Button } from "antd";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import "./shoppingCart.css";

const renderDeleteOrderButton = (product, onDelete) => (
  <DeleteOutlined onClick={() => onDelete(product)} />
);

const renderCount = (count, product, onAdd, onSub) => (
  <div>
    <MinusCircleOutlined onClick={() => onSub(product)} />
    <span>{count}</span>
    <PlusCircleOutlined onClick={() => onAdd(product)} />
  </div>
);

const ShoppingCart = ({
  orders,
  onAddToCart,
  onSubstractOrderInCart,
  onRemoveFromCart,
  onClearCart,
}) => {
  const columns = [
    {
      title: "商品",
      dataIndex: "name",
    },
    {
      title: "数量",
      dataIndex: "count",
      render: (count, product) =>
        renderCount(count, product, onAddToCart, onSubstractOrderInCart),
    },
    {
      key: "delete",
      render: (_text, product) =>
        renderDeleteOrderButton(product, onRemoveFromCart),
    },
  ];
  const dataSource = Object.entries(orders)
    .map(([name, product]) => ({
      name,
      count: product.count,
    }))
    .filter(({ count }) => count > 0);

  return dataSource.length > 0 ? (
    <div className='shopping-cart-popup'>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <div className='buttons'>
        <Button onClick={onClearCart}>清空</Button>
        <Button type='primary'>立即下单</Button>
      </div>
    </div>
  ) : (
    "暂无商品，请添加商品"
  );
};

export default ShoppingCart;
