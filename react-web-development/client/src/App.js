import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Order from "./containers/order/Order";
import Product from "./containers/product/Product";
import ProductEdit from "./containers/product/ProductEdit";
import NotFound from "./containers/error/NotFound";




class App extends Component {

  

  renderRouter() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/orders" element={<Order />} />

        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/add" element={<ProductEdit />} />
        <Route exact path="/products/edit/:id" element={<ProductEdit />} />

        <Route component={NotFound} />
      </Routes> 
    )
  } 
  

  render() { 
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
