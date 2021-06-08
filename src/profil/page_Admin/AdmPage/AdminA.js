import React, { Component } from 'react'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { mixt3 } from '../Popup/PopupA'
import Pupa from '../Popup/PopupA';
import Pupp from '../Popup/PopupP';
import Pn from '../P_nav';
import Pa from '../P_a';
import useFetch from './useFetch';
import { removpopup1 } from '../Popup/PopupP';
import { off } from './AdminSR';
// import { C }  from './Admin'
import {useHistory} from 'react-router-dom'
var C ;
  
function AdminA (){ 
    const history = useHistory();
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem("token")).user_id)
      try {
        C=JSON.parse(localStorage.getItem("token")).user_id;
      } catch (error) {
          history.push("/");
      } 
      }, []) 
    const varb ="Accounts";
    const {data: accounts , isPending} = useFetch('http://34.77.153.247:8000/api/Users/');
    const {data: Labo} = useFetch('http://34.77.153.247:8000/api/Labs/');
    const {data: Equipe} = useFetch('http://34.77.153.247:8000/api/Teams/');
    const {data: Admin } = useFetch('http://34.77.153.247:8000/api/Users/'+C);
   

  
     
   
//    const [accounts, setAccounts] = useState(null);
//    const  [isPending, setPending] = useState(true);


//    useEffect(() => {
//        setTimeout(() => {
//         fetch('http://localhost:8000/accounts')
//         .then(res =>{
//             return res.json();
//         })
//         .then(data =>{
//              setAccounts(data);
//              setPending(false);
 
//         })
//        }, 1000);
//    }, [])

   
        return (
            <div>
                <div id="overlay" onClick={()=>{mixt3(); document.getElementById("des6").style.display = "none";}}></div>
            
                  <input type="checkbox" id="nav-togl" />
        
        <div className="sidebar" id="bar">
        <div className="sidebar-brand">
            <h2 >
            <span id="bar7">IBnZZoHR</span>
            </h2>
            
        </div>
        <div className="sidebar-menu">
            <ul>
            <li><Link to="/admin" id="bar3" ><span className="las la-home"></span><span > Home</span></Link></li>
            <li><Link to="/admin/profile"  id="bar4" ><span className="las la-user-alt"></span><span > Profile</span></Link></li>
            <li><Link to="/admin/Structur+de+recherche"  id="bar5" ><span className="las la-clipboard-list"></span><span > Structur de recherche</span></Link></li>
            <li><Link to="/admin/Accounts" id="bar6"className="active" ><span className="las la-user-circle"></span><span > Accounts</span></Link></li>
            </ul>
        </div>
        </div>
        <div class="main-content" id="bar1">
            {/* <Pn title={varb}/> */}
            {Admin && <Pn title={varb} Admin={Admin}/>}
            {isPending &&<div class="spinner-grow text-warning hel"></div>}
            {accounts && <Pa accounts={accounts}/>}
            
         </div>
         {accounts && Labo && Equipe && <Pupa accounts={accounts} Equipe={Equipe} Labo={Labo}/>}
        
            </div>
        )
    }


export default AdminA
