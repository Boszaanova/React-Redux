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


import React, { Component } from "react";

class ProductForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (

        <div className="container col-md-6 p-5">
        <form className="col-md-4" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>

<input type="file" />

        <textarea>
  Hello there, this is some text in a text area
</textarea>

        <input className="btn btn-primary" type="submit" value="Submit" />
          
        </form>
        </div>
      );
    }
  }
  
export default ProductForm;
  