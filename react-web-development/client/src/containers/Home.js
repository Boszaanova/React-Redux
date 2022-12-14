import React, { Component } from 'react';
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { productsFetch } from "../actions";




class Home extends Component {
 
constructor(props) {
    super(props);
  }   

  componentDidMount() { 
   this.props.productsFetch();
  }

  render() { 
    return (
      <div className='bg-dark text-light'>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="AOS" email="boszaanova@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({products}){
  return { products };
} 

export default connect(mapStateToProps, { productsFetch })(Home);
