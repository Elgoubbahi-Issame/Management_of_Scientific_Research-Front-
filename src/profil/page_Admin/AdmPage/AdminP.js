import React, { Component ,useEffect} from 'react';
import Pp from '../P_profile';
import Pn from '../P_nav';
import '../P_style.css';
import { mixt2, removpopup } from '../Popup/Popup'
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import Pupp from '../Popup/PopupP';
import { off }  from './AdminSR'
// import { C }  from './Admin'

import {useHistory} from 'react-router-dom'







 
var C ;
   function AdminP() {
    const history = useHistory();
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem("token")).user_id)
      try {
        C=JSON.parse(localStorage.getItem("token")).user_id;
      } catch (error) {
          history.push("/");
      } 
      }, []) 
       const varb="Profile";
       const {data: Admin , isPending} = useFetch('http://34.77.153.247:8000/api/Users/'+C);
       const {data: accounts } = useFetch('http://34.77.153.247:8000/api/Users/');
          

    return (
       
            
  
              
        <div>
             <div id="overlay" onClick={() => {removpopup() ; off();}}></div>
            
            <input type="checkbox" id="nav-togl" />
        
            <div className="sidebar" id="bar">
            <div className="sidebar-brand">
                <h2 >
                <span id="bar7">IBnZZoHR</span>
                </h2>
                
            </div>
            <div className="sidebar-menu">
                <ul>
                <li><Link to="/admin" id="bar3"><span className="las la-home"></span><span > Home</span></Link></li>
                <li><Link to="/admin/profile" className="active" id="bar4" ><span className="las la-user-alt"></span><span > Profile</span></Link></li>
                <li><Link to="/admin/Structur+de+recherche" id="bar5"><span className="las la-clipboard-list"></span><span > Structur de recherche</span></Link></li>
                <li><Link to="/admin/Accounts" id="bar6"><span className="las la-user-circle"></span><span > Accounts</span></Link></li>
                </ul>
            </div>
            </div>
            <div class="main-content" id="bar1">
                {/* <Pn title={varb}/> */}
                {Admin && <Pn title={varb} Admin={Admin}/>}
              
                {/* <Pp /> */}
                {isPending &&<div class="spinner-grow text-warning hel"></div>}
                {Admin && <Pp Admin={Admin}/>}
                {Admin && accounts && <Pupp accounts={accounts} ChfEq={Admin}/>}
            </div>
            
        </div>
    );
}
export default AdminP;
