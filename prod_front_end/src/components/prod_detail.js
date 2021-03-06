import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProd, updateProd } from '../actions';
import {Link} from 'react-router-dom';
import SideNav from "./side_nav";
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'

import 'react-widgets/dist/css/react-widgets.css'

moment.locale('en')
momentLocalizer()

class ProdDetail extends Component{

  constructor(props){
    super(props)
    console.log("Constructor props: ", this.props)
    this.renderField = this.renderField.bind(this);
  }

  componentWillMount () {
   this.props.initialize({
     description: this.props.prod.description,
     datetime: this.props.prod.datetime,
     longitude: this.props.prod.longitude,
     latitude: this.props.prod.latitude,
     elevation: this.props.prod.elevation
   });

 }

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchProd(id);
  }



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

   console.log("render props: ", this.props)
   const className = `form-group ${touched && error ? 'has-danger' : ''}`;

   return (
     <div className={className}>
     <label>{field.label}</label>
      <input
      value = "Hello"
      className="form-control"
      {...field.input}
      />
      <div className="text-help">{touched ? error : ''} </div>
     </div>
   )
 }

  onDeleteClick(){
    const {id} = this.props.match.params;
    this.props.deletePost(id,() => {
      this.props.history.push("/");
    });
  }

  onSubmit(values){
    console.log("updated values: ", values)
    const {id} = this.props.match.params;
    this.props.updateProd(values,id, () => {
      this.props.history.push('/');
    });
  }

  render(){

    console.log("These are the props to render: ", this.props)
    const {prod} = this.props;
    const {handleSubmit} = this.props;
    console.log("This is ", prod)
    if(!prod){
      return <div>loading...</div>
    }
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
           <button type="submit" className="btn btn-primary">Update</button>
          </form>
          </div>
      </div>
    )
  }
}




function mapStateToProps({prods}, ownProps){
  return { prod: prods[ownProps.match.params.id] };
}

export default reduxForm({
  form: 'ProdDetailForm'
})(
  connect(mapStateToProps,{fetchProd, updateProd})(ProdDetail)
);


// export default connect(mapStateToProps, {fetchProd,deleteProd})(ProdDetail);
