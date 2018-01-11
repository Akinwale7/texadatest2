import React, {Component} from 'react';
import {clearState} from '../actions';
import {connect} from 'react-redux';

class ProdDateDesc extends Component{
  constructor(props){
    super(props)
    console.log("constructor props: ", this.props.clearState())
  }


  renderItem(){
 console.log("result to display: ",this.props.prodDateTime)
  if(this.props.prodDateTime.length === 0){
    console.log("No result to display")
    return "No result tp display";
  }
  return _.map(this.props.prodDateTime, (prod) => {
    return(
       <tr>
          <td>{prod.id}</td>
          <td>{prod.longitude}</td>
          <td>{prod.latitude}</td>
          <td>{prod.elevation}</td>
       </tr>
     )

  });

  }


  render(){
    console.log("prod date desc: ", this.props.prodDateTime);
    const {prodDateTime} = this.props;

    if(!prodDateTime){
      return <div>loading...</div>
    }

    return(
      <div>
      <table className="table table-hover table-striped">
       <thead>
         <tr>
           <th>ID</th>
           <th>LONGITUDE</th>
           <th>LATITUDE</th>
           <th>ELEVATION</th>
         </tr>
       </thead>
       <tbody>
        {this.renderItem()}
       </tbody>
      </table>
      </div>

    )
  }
}

function mapStateToProps({prodDateTime}){
  return {prodDateTime : prodDateTime}
}

export default connect(mapStateToProps,{clearState})(ProdDateDesc);
