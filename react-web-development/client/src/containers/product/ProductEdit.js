import React, { Component } from "react";
import Header from "../../components/Header";
import ProductForm from "../../components/product/ProductForm";
import Footer from "../../components/Footer";


class ProductEdit extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                   
                   
                    <ProductForm />
                </div>
                <Footer />
            </div>
        )
    }

}

export default ProductEdit;