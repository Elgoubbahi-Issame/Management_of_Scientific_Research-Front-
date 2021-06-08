import React, { Component } from 'react'
import { useState , useEffect } from 'react'
import { Link,useHistory } from 'react-router-dom'
import useFetch from './useFetch'
import { mixt7 } from '../Popup/Popup'
import Pn from '../P_nav';
import Psr from '../P_SR';
import Pup from '../Popup/Popup';
// import {E} from './ChefLaboP';
export function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
 export function off() {
    document.getElementById("overlay").style.display = "none";
  }

var E ;
    function ChefLaboML() {
        
    const history = useHistory();
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem("token")).user_id)
      try {
        E=JSON.parse(localStorage.getItem("token")).user_id;
      } catch (error) {
          history.push("/");
      } 
      }, []) 
        const varb = "Mon Labo";
        
        // const {data: Labo } = useFetch('http://localhost:8002/Labo');
        // const {data: account } = useFetch('http://localhost:8000/accounts');
        // const {data: chfLabo,isPending } = useFetch('http://localhost:8000/accounts/5');
     
        const {data: Labo } = useFetch('http://34.77.153.247:8000/api/Labs/');
        const {data: account } = useFetch('http://34.77.153.247:8000/api/Users/');
        const {data: chfLabo,isPending } = useFetch('http://34.77.153.247:8000/api/Users/'+E);
        const {data: Equipe } = useFetch('http://34.77.153.247:8000/api/Teams/');
        // alert(Equipe[0].id);
        // Equipe.map((DA)=>alert(DA.id));
        return (
            <div>
            <div id="overlay" onClick={()=>{mixt7();document.getElementById("des6").style.display = "none";}}></div>
            
            <input type="checkbox" id="nav-togl" />
        
            <div className="sidebar" id="bar">
            <div className="sidebar-brand">
                <h2 >
                <span id="bar7">IBnZZoHR</span>
                </h2>
                
            </div>
            <div className="sidebar-menu">
                <ul>
                <li><Link to="/chefL/profile"  id="bar4" ><span className="las la-user-alt"></span><span > Profile</span></Link></li>
                <li><Link to="/chefL/Mon+Labo" className="active" id="bar5" ><span className="las la-clipboard-list"></span><span >Mon Labo</span></Link></li>
                <li><Link to="/chefL/Accounts" id="bar6" ><span className="las la-user-circle"></span><span > Accounts</span></Link></li>
                </ul>
            </div>
            </div>
            <div className="main-content" id="bar1">
                {/* <Pn title={varb}/> */}
                {chfLabo && <Pn title={varb} Admin={chfLabo}/>}
            {isPending && <div class="spinner-grow text-warning hel"></div>}
            {Equipe && account && Labo && chfLabo && <Psr chfLabo={chfLabo} account={account} Equipe={Equipe} Labo={Labo}/>}
            </div>
           
            {Equipe && account  && Labo && chfLabo && <Pup chfLabo={chfLabo}  account={account} Equipe={Equipe} Labo={Labo}/>}
           
        </div>
        )
    }


export default ChefLaboML
