import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Order from "./containers/order/Order";
import Product from "./containers/product/Product";
import NotFound from "./containers/error/NotFound";



class App extends Component {

  

  renderRouter() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/orders" element={<Order />} />
        <Route exact path="/products" element={<Product />} />

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
