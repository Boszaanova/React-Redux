import React from "react";

const Footer = (props) => {
    const { company, email } = props;
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title  bg-primary py-2">
                <small>
                <span className=" h6">Powered By {company} </span>| <span className="text-light">Contact By Email : {email} </span>
                </small>
            </div>
        </div>
    )
}

export default Footer;