import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {

     constructor(props) {
          super(props);
          this.state = { date: new Date() };

     }

     componentDidMount() {
          setInterval(() => this.tick(), 1000);
     }

     componentDidUpdate() {

     }

     componentWillUnmount() {

     }
     tick() {
          this.setState({ date: new Date() });
     }



     render() {

          const style = { height: 50 }

          return (


               <header>

                    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
                         <div class="container">
                              <a class="navbar-brand" href="/">PlayStaionStore</a>
                              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                   <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarCollapse">
                                   <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                        <li class="nav-item">
                                             <a class="nav-link active" aria-current="page" href="#"><Link className="nav-link" to="/">HOME</Link></a>
                                        </li>
                                        <li class="nav-item">
                                             <a class="nav-link" href="#"><Link className="nav-link" to="/orders">ORDER</Link></a>
                                        </li>
                                        <li class="nav-item">
                                             <a class="nav-link"><Link className="nav-link" to="/products">PRODUCT</Link></a>
                                        </li>
                                        <li class="nav-item">
                                             <a class="nav-link"><Link className="nav-link" to="/about">ABOUT</Link></a>
                                        </li>
                                   </ul>
                                   <h5 className="nav-link text-light">{this.state.date.toLocaleTimeString()}</h5>

                              </div>
                         </div>
                    </nav>
                    
               </header>
               
               

          )
     }
}

export default Header;  
