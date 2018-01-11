import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchProds} from '../actions';
import {deleteProd} from '../actions';
import SideNav from './side_nav';
import { Redirect } from 'react-router-dom';
class ProdIndex extends Component{

  componentDidMount(){
    this.props.fetchProds()
  }

componentWillReceiveProps(nextProps){

  this.forceUpdate()
  console.log("component componentWillReceiveProps: ", nextProps)
}

onDelete(id){

  console.log("Theses are the props", this.props)
    this.props.deleteProd(id, () => {
       this.props.history.push('/');

      // this.forceUpdate()
       // <Redirect to="/" push />;
       //this.forceUpdate()
      // window.location.reload();
  });

}


  renderProds(){
    var btnStyle = {
     color: 'white',
     marginRight: '20px'
   };
  return _.map(this.props.prods, (prod) => {
    return(
      <tr  key={prod.id}>
        <td>
            {prod.id}
        </td>

        <td>
            {prod.description}
        </td>

        <td>
            {prod.datetime}
        </td>

        <td>
            {prod.longitude}
        </td>

        <td>
            {prod.latitude}
        </td>

        <td>
            {prod.elevation}
        </td>
        <td>
          <button className="btn btn-danger" style={btnStyle} onClick={() =>this.onDelete(prod.id)}>Delete</button>
          <Link to={`product/${prod.id}`}className="btn btn-warning">Update</Link>
        </td>
      </tr>
    );
  });
}


  render(){
    return(
    <div>
      <div className="container-1">

           <SideNav />

          <div className="main">
             <h1>Products
                 <img src={require("./TEXADAlogo-lg.jpg")}  style={{ width: "20%"}}/>
               </h1>

             <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DESCRIPTION</th>
                  <th>DATETIME</th>
                  <th>LONGITUDE</th>
                  <th>LATITUDE</th>
                  <th>ELEVATION</th>
                  <th>DELETE/UPDATE</th>
                </tr>
              </thead>
              <tbody>
                {this.renderProds()}
              </tbody>
            </table>

          </div>

      </div>

    </div>

    );
  }
}


function mapStateToProps(state){
  return { prods: state.prods };
}

export default connect(mapStateToProps, {fetchProds,deleteProd})(ProdIndex);
