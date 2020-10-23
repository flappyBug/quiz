import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./header.css";
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to='/mall'>
            <HomeOutlined />
            商城
          </NavLink>
        </li>
        <li>
          <NavLink to='/order'>
            <ShoppingCartOutlined />
            订单
          </NavLink>
        </li>
        <li>
          <NavLink to='/add'>
            <PlusOutlined />
            添加商品
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
