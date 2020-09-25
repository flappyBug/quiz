import React from "react";
import AddProductPage from "./AddProductPage";
import "./App.css";
import Product from "./Product";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ProductList />
      <AddProductPage />
    </div>
  );
}

export default App;
