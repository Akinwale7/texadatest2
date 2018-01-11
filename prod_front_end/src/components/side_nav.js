import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaCloudUpload from 'react-icons/lib/fa/cloud-upload';
import FaSearch from 'react-icons/lib/fa/search';
import FaFileText from 'react-icons/lib/fa/file-text';
import FaHome from 'react-icons/lib/fa/home';

class SideNav extends Component{
  render(){
    return(
      <div className="side-nav">
         <NavLink exact to="/" activeClassName="active"><FaHome /> Home</NavLink>
         <NavLink exact to="/prod/new" activeClassName="active"><FaFileText /> Add New</NavLink>
         <NavLink exact to="/search" activeClassName="active"><FaSearch /> Search</NavLink>
         <NavLink exact to="/upload" activeClassName="active"><FaCloudUpload /> Upload File</NavLink>
         <NavLink exact to="/fileexport" activeClassName="active"><FaCloudDownload /> Download file</NavLink>
      </div>
    )
  }
}

export default SideNav;
