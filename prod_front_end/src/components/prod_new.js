import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProd} from '../actions';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';

import SideNav from './side_nav';


import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'

moment.locale('en')
momentLocalizer()



class ProdNew extends Component{

  renderDateTimePicker({ input: { onChange, value }, showTime }){
      return (
        <DateTimePicker
          onChange={onChange}
          format="DD MMM YYYY, hh:mm:ss"
          //format="YYYY-MM-DDTHH:MM:SSZ"
          time={showTime}
          value={!value ? null : new Date(value)}
        />
    )
 }

 renderField(field){
   const {meta:{touched,error}} = field;
   const className = `form-group ${touched && error ? 'has-danger' : ''}`;

   return (
     <div className={className}>
     <label>{field.label}</label>
      <input
      className="form-control"
      {...field.input}
      />
      <div className="text-help">{touched ? error : ''} </div>
     </div>
   )
 }


 onSubmit(values){
  // console.log("Type of=",typeof(values.datetime));
   // var d = new Date(values.dob);
   //var nd = values.datetime.toISOString();
   var nd = new Date(values.datetime).toISOString();
   values.datetime = nd;
   console.log(values)
   console.log(nd)

  this.props.createProd(values, () => {
    this.props.history.push('/');
  });
}

  render(){

    const {handleSubmit} = this.props;
    return(
      <div className="container-1">
          <SideNav />

          <div className="main">
             <h1>Add New Product</h1>
             <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                name="description"
                label="description"
                component={this.renderField}
              />

              <div>
                <label>DateTime</label>
                <Field
                name="datetime"
                showTime={true}
                component={this.renderDateTimePicker}
                />
              </div>


              <Field
                name="longitude"
                label="Longitude"
                component={this.renderField}
              />

              <Field
                name="latitude"
                label="Latitude"
                component={this.renderField}
              />

              <Field
                name="elevation"
                label="Elevation"
                component={this.renderField}
              />
              <button type="submit" className="btn btn-primary" style={{backgroundColor:"coral"}}>Submit</button>
             </form>
          </div>
      </div>

    )
  }
}

//  ProdNew = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(ProdNew)
//
// export default ProdNew;
function validate(values){
  const errors = {};//console.log(values)->{title:"asdf", category:"asdf",content:"asdf"}

    if(!values.description){
      errors.description = "Description must not be empty"
    }

    if(!values.longitude){
      errors.longitude = "Longitude must not be empty"
    }

    if(!values.latitude){
      errors.latitude = "Latitude must not be empty"
    }

    if(!values.elevation){
      errors.elevation = "Elevation must not be empty"
    }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,{createProd})(ProdNew)
);
