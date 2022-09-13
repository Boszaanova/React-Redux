import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import axios from "axios";

class Product extends Component {
    
    constructor(props) {
        super(props);
        this.state = { products : null };
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }
    
    componentDidMount() {
        axios.get("http://localhost:3001/products").then(res => {
            this.setState({products : res.data});
        })
    }

    editProduct(product) {
        this.props.history.push('products/edit/' + product.id);
    }
    
    delProduct(product) {
        axios.delete("http://localhost:3001/products/" + product.id ).then(res => {
            axios.get("http://localhost:3001/products").then(
                res => {
                    this.setState({products : res.data});
                }
            )
        })
    } 


    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h5>PRODUCTS</h5>
                            <hr></hr>
                            <button className="btn btn-success title mb-3" onClick={() => this.props.history.push('products/add')}>Add Product</button>
                        </div>
 
                    </div>
                <ProductList products={this.state.products}
                    onDelProduct={this.delProduct} onEditProduct={this.editProduct}
                    />
                </div>
                </div>
                <Footer />
                    
            </div>
        )
    }
}

export default Product ;