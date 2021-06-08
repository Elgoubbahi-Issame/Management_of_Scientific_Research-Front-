import React, { Component } from 'react';
import Pp from '../P_profile';
import Pn from '../P_nav';
import '../P_style.css';
import { mixt2, removpopup } from '../Popup/Popup'
import { Link,useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import {useState,useEffect} from 'react';
import Pupp from '../Popup/PopupP';
import { off }  from './ChefLaboML'

export var E;
// export function getUserIDCL(ID){
//     E=ID;
// }






 

   function ChefLaboP() {
    const history = useHistory();
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem("token")).user_id)
      try {
        E=JSON.parse(localStorage.getItem("token")).user_id;
      } catch (error) {
          history.push("/");
      } 
      }, []) 
    // useEffect(() => {
    //     // console.log(JSON.parse(localStorage.getItem("token")).user_id)
    //     E=JSON.parse(localStorage.getItem("token")).user_id;
    //   }, [])  
       const varb="Profile";
    //    const {data: ChfLb ,isPending } = useFetch('http://localhost:8000/accounts/5');
    //    const {data: Labo } = useFetch('http://localhost:8002/Labo/');
    const {data: ChfLb ,isPending } = useFetch('http://34.77.153.247:8000/api/Users/'+E);
    const {data: accounts } = useFetch('http://34.77.153.247:8000/api/Users/');
            
    return (
       
            
  
              
        <div onLoad={()=>{ if(window.location.href.substr(-2) !== "?r") {
            window.location.reload(false);
            window.location = window.location.href + "?r";
          }}}>
             <div id="overlay" onClick={() => {removpopup() ; off();document.getElementById("des7").style.display="none";document.getElementById("des5").style.display="block";}}></div>
            
            <input type="checkbox" id="nav-togl" />
        
            <div className="sidebar" id="bar">
            <div className="sidebar-brand">
                <h2 >
                <span id="bar7">IBnZZoHR</span>
                </h2>
                
            </div>
            <div className="sidebar-menu">
                <ul>
                <li><Link to="/chefL/profile"  className="active" id="bar4" ><span className="las la-user-alt"></span><span > Profile</span></Link></li>
                <li><Link to="/chefL/Mon+Labo"  id="bar5" ><span className="las la-clipboard-list"></span><span >Mon Labo</span></Link></li>
                <li><Link to="/chefL/Accounts" id="bar6" ><span className="las la-user-circle"></span><span > Accounts</span></Link></li>
                </ul>
            </div>
            </div>
            <div class="main-content" id="bar1">
                {/* <Pn title={varb}/> */}
                {ChfLb && <Pn title={varb} Admin={ChfLb}/>}
              
                {/* <Pp /> */}
                {isPending &&<div class="spinner-grow text-warning hel"></div>}
                {ChfLb && <Pp Admin={ChfLb}/>}
                {ChfLb && accounts && <Pupp ChfEq={ChfLb} accounts={accounts}/>}
            </div>
            
        </div>
    );
}
export default ChefLaboP;
