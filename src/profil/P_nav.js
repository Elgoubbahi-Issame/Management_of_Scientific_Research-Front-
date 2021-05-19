import React, { Component } from 'react';
import Hel from './helmi.jpg'
// import {S_menu} from './P_Sidebar'
import { Link } from 'react-router-dom';
import { activ2 } from './AdmPage/Admin';



// var menu= ;

// function P_nav() {
  class P_nav extends Component{
   

      render(){
    return (
        <header id="bar2">
        <h2 >
          <label for="nav-togl">
            <span className="las la-bars"  /*onClick={S_menu()}*/></span>
          </label>
        <b id="title">{this.props.valur}</b>
        </h2>

        <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" placeholder="Search here .." />
        </div>

        <div className="user-wrapper">
       <Link to="/admin/profile"><img src={Hel} width="50px" height="50px" alt="" /></Link>
          <div>
            <h4>hilmi abd</h4>
            <small>Admin</small>
          </div>
        </div>
      </header>
    )
}
  }
export default P_nav
