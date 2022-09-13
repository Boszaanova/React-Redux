import React, { Component } from "react";


class Calculator extends Component {

    showOrders (orders) {
        if (!orders || orders.length === 0) {
            return <li className="text-end text-muted title">ไม่มีสินค้าในตะกร้า</li>
        } else {
            return orders.map(order => {
                return (
                <li className="text-end title h6">
                {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                <button className="btn btn-warning btn-sm mx-1" onClick={() => this.props.onDelOrder(order.product)}>X</button>
            </li> 
                ) 
            })
        }

    }
  
    render() {

        const { totalPrice, orders } = this.props;

        return(
            <div className="mt-5">
                <h2 className="text-end">{totalPrice} THB</h2>
                <hr />
                <ul className="list-unstyled">
                {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="title btn-primary btn mt-2 w-100 " onClick={() => this.props.onConfirmOrder()}>ยืนยัน</button>
                <button className="title btn-secondary btn mt-2 w-100" onClick={() => this.props.onCancleOrder()}>ยกเลิก</button>
                
            </div>
        );
    }
}

export default Calculator;