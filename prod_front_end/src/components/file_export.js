import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import SideNav from './side_nav';
import axios from 'axios';

class FileExport extends Component{

  // getFile(){
  //   //const FileDownload = require('react-file-download');
  //
  // const FileDownload = require('react-file-download');
  // const config = {
  //     headers: {
  //       'content-type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  //    }
  // }
  // axios.get(`http://localhost:5000/download/`, config)
  //    .then((response) => {
  //         FileDownload(response.data, 'download.docx');
  //    });
  // }

  render(){
    return(
      <div>
        <div className="container-1">

             <SideNav />

            <div className="main">
               <h1> Download file </h1>
              <div style={{display: 'none'}}>
                <iframe src="http://localhost:5000/download/" />
              </div>

            </div>

        </div>

      </div>
    )
  }
}

export default FileExport;
