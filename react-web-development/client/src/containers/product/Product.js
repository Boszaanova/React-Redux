import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions";
 

class Product extends Component {
    
    constructor(props) {
        super(props);
        
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }
    
    componentDidMount() {
        this.props.productsFetch();
    }

    editProduct(product) {
        this.props.history.push('products/edit/' + product.id);
    }
    
    delProduct(product) {
        this.props.productDelete(product.id);
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
                <ProductList products={this.props.products}
                    onDelProduct={this.delProduct} onEditProduct={this.editProduct}
                    />
                </div>
                </div>
                <Footer />
                    
            </div>
        )
    }
}


function mapStateToProps({products }) {
    return {products};
}

export default withRouter (connect(mapStateToProps, {productsFetch, productDelete} )(Product));