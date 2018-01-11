import React,{Component} from 'react';
import SideNav from './side_nav';
import ProdDateDesc from './prod_date_desc';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {fetchProdDateTime} from '../actions';
import _ from 'lodash';
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import 'react-widgets/dist/css/react-widgets.css'



const renderMultiselect = ({ input, data, valueField, textField }) =>
  <Multiselect {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valueField}
    textField={textField}
    style={{ marginBottom: "20px"}}
  />


class Search extends Component{

  constructor(props){
    super(props)
  }

 componentDidMount(){
   console.log("Hello", this.renderProds())
   console.log("Date", this.renderDate())
 }

  renderProds(){
  return _.map(this.props.prods, (prod) => {
    return prod.description
  });
}

renderDate(){
return _.map(this.props.prods, (prod) => {
  return prod.datetime
});
}

onSubmit(values){
 // console.log("Type of=",typeof(values.datetime));
  // var d = new Date(values.dob);
 //  var nd = values.datetime.toISOString();
 //  values.datetime = nd;
 //  console.log(values)
 //  console.log(nd)
 //
 // this.props.createProd(values, () => {
 //   this.props.history.push('/');
 // });
 //var date =   new Date( '2016-01-01 00:00:00')
 var nd = new Date(values.proddatetime).toISOString();
 values.proddatetime = nd;
 console.log(values)
 console.log(nd)
 const {proddatetime, proddescription} = values;
 console.log(values)
 this.props.fetchProdDateTime(proddescription,proddatetime);
}

  render(){
    const {handleSubmit} = this.props;
    return(
      <div className="container-1">
        <SideNav />

        <div className="main">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div>
               <label>Product Decription</label>
               <Field
                 name="proddescription"
                 component={renderMultiselect}
                 data={this.renderProds()}
               />
             </div>

             <div>
                <label>DateTime</label>
                <Field
                  name="proddatetime"
                  component={renderMultiselect}
                  data={this.renderDate()}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginBottom: "20px"}}>Search</button>
          </form>

          <ProdDateDesc />
        </div>

      </div>

    )
  }
}

function mapStateToProps({prods}){

  return { prods:prods };
}

export default reduxForm({
  form: 'SearchForm'
})(
  connect(mapStateToProps,{fetchProdDateTime})(Search)
);
