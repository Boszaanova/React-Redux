import React, { Component } from "react";



class ProductItem extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { productName, unitPrice, thumbnail } = this.props.product;
        return (
            <div className="col-md-3 col-sm-6 mt-2">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="title mt-2">{productName}</h5>
                <p className="text-end title">{unitPrice} THB</p>

                {this.props.onAddOrder && 
                <button className="btn btn-secondary title w-100" onClick={() => this.props.onAddOrder(this.props.product)} >Buy</button>
                }
 
                {(this.props.onDelProduct || this.props.onEditProduct ) &&
                <button className="btn btn-info title col-5 mt-1" onClick={() => this.props.onEditProduct(this.props.product)}>แก้ไข</button>
                }

                {(this.props.onDelProduct || this.props.onEditProduct ) && 
                <button className="btn btn-danger title col-5 float-end mt-1" onClick={() => this.props.onDelProduct(this.props.product)} >ลบ</button>
                 }

                <hr />

            </div>
        )
    }
    

}

export default ProductItem;