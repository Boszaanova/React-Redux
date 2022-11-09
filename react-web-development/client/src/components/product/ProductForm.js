// import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
// import FormField from "../common/FormField";


// class ProductForm extends Component {

//     renderFields () {
//         const formFields = [
//             {label : "Product Name" , name : "productName" , type : "text" },
//             {label :  "Unit Price", name : "unitPrice" , type : "number" },
//             {label :  "Thumnail", name : "thumbnail" , type : "text" },
//         ];
//         return formFields.map(( { label, name , type } ) => {
//             return (
//                 <Field label={label} name={name} type={type} component={FormField} />
//              )
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <form>
//                     {this.renderFields()}
//                 </form>
//             </div>
//         )
//     }
// }

// ProductForm = reduxForm({ form : "productForm"})(ProductForm);

// export default ProductForm;


import React from "react";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      

      <div className="container col-md-5 my-5">
        <form onSubmit={this.handleSubmit}>

          <h2 className="my-5 text-primary text-center">Add Product</h2>

          <div class="form-group my-2">
            <label>Product Name:</label>
            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
          </div>

          <div class="form-group my-2">
            <label>Unit Price:</label>
            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
          </div>

          <div class="form-group my-3">
            <label>Upload Picture:</label>
            <input className="form-control" type="file" />
      
          </div>
       


          <input className="btn btn-primary btn-lg" type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default ProductForm;
