import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid pb-full">
            <div className="container col-md-8">
                <h2 className="text-center pt-5">REACT PROJECT</h2>
                <p className="text-title text-justify mt-4 mb-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                    <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project is game shop web application. Include a home page, order page, product page, User can add products anh d orders, delete order and check out to send order.  Use css from bootstrap 5 ui framework  </p>

                <h5 className="text-primary text-center">PlayStaionStore</h5>

            </div>
            <Footer company="PlayStaionStore" email="boszaanova@gmail.com" />
            </div>
        </div>
    );
};

export default About;