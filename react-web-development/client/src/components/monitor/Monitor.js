import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from "axios";



class Monitor extends Component {
constructor(props) {
     super(props);
     this.state = {totalPrice: 0, orders: [], confirm: false, msg: ""};
     this.addOrder = this.addOrder.bind(this);
     this.delOrder = this.delOrder.bind(this);
     this.cancleOrder = this.cancleOrder.bind(this);
     this.confirmOrder = this.confirmOrder.bind(this);
}

    addOrder (product) {

        let fineOrder = this.state.orders.find(order => order.product.id === product.id);
        if(fineOrder) {
            fineOrder.quantity++;
        } else {
            this.state.orders.push({product: product, quantity: 1});
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
            this.setState({totalPrice: totalPrice, orders: this.state.orders, confirm: false});
            

    }

    delOrder(product) {
        let fineOrder = this.state.orders.find(order => order.product.id === product.id);
        let resultOrder = this.state.orders.filter(order => order.product.id !== product.id);
        const totalPrice = this.state.totalPrice - (fineOrder.quantity * parseInt(fineOrder.product.unitPrice));
        this.setState({totalPrice: totalPrice, orders: resultOrder, confirm: false});

    }

    confirmOrder() {    
        const { totalPrice, orders } = this.state;

        if(orders && orders.length > 0) {
        axios.post("http://localhost:3001/orders", {orderedDate : new Date(), totalPrice, orders})
        .then(res => {
            this.setState ({totalPrice : 0 , order : [], confirm : true, msg: "บันทีกรายการสั่งซื้อเรียบร้อยค่ะ"});
        })
    } else {
        this.setState ({totalPrice : 0 , order : [], confirm : true, msg: "กรุณาเลือกสินค้าก่อนนะคะ"});  
    }
   }

    cancleOrder () {
            this.setState ({totalPrice : 0 , order : [], confirm: false});
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.confirm &&
                <div className="alert alert-warning  title-dark text-end h6" role="alert">
                    {this.state.msg} 
                </div>
                }

                <div className="row mt-5 bg-1"> 
                    <div className="col-md-9">
                        <h5 className="border text-center border-secondary rounded py-2">Game List</h5>
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                    <h5 className="text-center border border-secondary rounded py-2">สินค้าในตะกร้า</h5>
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onConfirmOrder={this.confirmOrder  } onCancleOrder={this.cancleOrder} />
                    </div>

                </div>
            </div>

        )

    }
}

export default Monitor;