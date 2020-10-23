import React from "react";
import { Table } from "antd";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const renderDeleteOrderButton = (product, onDelete) => (
  <DeleteOutlined onClick={() => onDelete(product)} />
);

const renderCount = (count, product, onAdd, onSub) => (
  <div>
    <MinusCircleOutlined onClick={() => onSub(product)} />
    {count}
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
  const dataSource = Object.entries(orders).map(([name, product]) => ({
    name,
    count: product.count,
  }));
  return <Table dataSource={dataSource} columns={columns} />;
};

export default ShoppingCart;
