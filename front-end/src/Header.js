import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">商城</Link>
        </li>
        <li>
          <Link to="/order">订单</Link>
        </li>
        <li>
          <Link to="/add">添加商品</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
