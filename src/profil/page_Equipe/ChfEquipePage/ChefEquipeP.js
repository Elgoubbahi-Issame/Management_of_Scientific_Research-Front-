import React, { Component } from 'react';
import Pp from '../P_profile';
import Pn from '../P_nav';
import '../P_style.css';
import { mixt2, removpopup } from '../Popup/Popup'
import { Link , useHistory} from 'react-router-dom';
import useFetch from './useFetch';
import {useState,useEffect} from 'react';
import Pupp from '../Popup/PopupP';
import { off }  from './ChefEquipeME'


export var F;
// export function getUserIDCE(ID){
//     F=ID;
// }





 

   function ChefEquipeP() {
    // useEffect(() => {
    //     // console.log(JSON.parse(localStorage.getItem("token")).user_id)
    //     F=JSON.parse(localStorage.getItem("token")).user_id;
    //   }, [])  
      const history = useHistory();
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem("token")).user_id)
      try {
        F=JSON.parse(localStorage.getItem("token")).user_id;
      } catch (error) {
          history.push("/");
      } 
      }, []) 
       const varb="Profile";
    //    const {data: ChfLb ,isPending } = useFetch('http://localhost:8000/accounts/5');
    //    const {data: Labo } = useFetch('http://localhost:8002/Labo/');
    const {data: ChfEq ,isPending } = useFetch('http://34.77.153.247:8000/api/Users/'+F);
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
                <li><Link to="/chefE/profile"  className="active" id="bar4" ><span className="las la-user-alt"></span><span > Profile</span></Link></li>
                <li><Link to="/chefE/Mon+Equipe"  id="bar5" ><span className="las la-clipboard-list"></span><span >Mon Equipe</span></Link></li>
                {/* <li><Link to="/chefL/Accounts" id="bar6" ><span className="las la-user-circle"></span><span > Accounts</span></Link></li> */}
                </ul>
            </div>
            </div>
            <div class="main-content" id="bar1">
                {/* <Pn title={varb}/> */}
                {ChfEq && <Pn title={varb} Admin={ChfEq}/>}
              
                {/* <Pp /> */}
                {isPending &&<div class="spinner-grow text-warning hel"></div>}
                {ChfEq && <Pp Admin={ChfEq}/>}
                {ChfEq && accounts && <Pupp ChfEq={ChfEq} accounts={accounts}/>}
            </div>
            
        </div>
    );
}
export default ChefEquipeP;
