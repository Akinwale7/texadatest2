import React , {Component} from 'react'
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { post } from 'axios';
import SideNav from './side_nav';
import {uploadFile} from '../actions';


const onFormSubmit = (data) => {
    let formData = new FormData();
    formData.append('name', data.name)
    formData.append('uploadedfile', data.uploadedfile[0])

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    const url = 'http://localhost:5000/load/';
    this.props.uploadFile(url, formData, config, () => {
      this.props.history.push('/');
    });
    // post(url, formData, config)
    //     .then(
    //         // console.log(response);
    //         // console.log("Fil upload is working")
    //         () => this.props.history.push('/')
    //     )
    //     .catch(function(error) {
    //         console.log(error);
    //     }).bind(this);
}

class FileUpload extends Component {

  constructor(props){
      super(props)
  }


   onFormSubmit(data){
          let formData = new FormData();
          formData.append('name', data.name)
          formData.append('uploadedfile', data.uploadedfile[0])

          const config = {
              headers: { 'content-type': 'multipart/form-data' }
          }

          const url = 'http://localhost:5000/load/';


          this.props.uploadFile(url, formData, config, () => {
            this.props.history.push('/');
          });

          console.log("this are the history from onsubmit: ", this.props.history)

  }

  render(){
    console.log("this are the history: ", this.props.history)
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="container-1">

             <SideNav />

            <div className="main">
               <h1>FileUpload</h1>

           <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>

            <div>

                <Field name="uploadedfile" component="input" type="file" className="inputfile" className="btn btn-warning" style={{marginBottom:"10px"}}/>

            </div>
            <button type="submit" style={{padding: "5px 10px 5px 10px", borderRadius: "2px"}}>Upload</button>
          </form>

            </div>

        </div>

      </div>
    )
  }

}

export default reduxForm({
    form: 'fileupload'
})(
  connect(null, {uploadFile})(FileUpload)
)
