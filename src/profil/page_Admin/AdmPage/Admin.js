import React, { Component ,useEffect} from 'react';
import Pc from '../P_content';
import useFetch from './useFetch'
import Pn from '../P_nav';
import '../P_style.css';
import { Link} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

export var C;
// export function getUserIDA(ID){
//     C=ID;
// }
  
  function  Admin(){ 
    const history = useHistory();
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem("token")).user_id)
      try {
        C=JSON.parse(localStorage.getItem("token")).user_id;
      } catch (error) {
          history.push("/");
      } 
      }, [])  
   const varb="Home";
   const {data: Equipe ,isPending} = useFetch('http://34.77.153.247:8000/api/Teams/');
   const {data: Labo } = useFetch('http://34.77.153.247:8000/api/Labs/');
   const {data: Admin } = useFetch('http://34.77.153.247:8000/api/Users/'+C);
   const {data: account } = useFetch('http://34.77.153.247:8000/api/Users/');

    return (     
        <div onLoad={()=>{ if(window.location.href.substr(-2) !== "?r") {
            window.location.reload(false);
            window.location = window.location.href + "?r";
          }}}>
            
            
            <input type="checkbox" id="nav-togl" />
        
            <div className="sidebar" id="bar">
            <div className="sidebar-brand">
                <h2 >
                <span id="bar7">IBnZZoHR</span>
                </h2>
                
            </div>
            <div className="sidebar-menu">
                <ul>
                <li><Link to="/admin" id="bar3" className="active" ><span className="las la-home"></span><span > Home</span></Link></li>
                <li><Link to="/admin/profile" id="bar4" ><span className="las la-user-alt"></span><span > Profile</span></Link></li>
                <li><Link to="/admin/Structur+de+recherche" id="bar5"><span className="las la-clipboard-list"></span><span > Structur de recherche</span></Link></li>
                <li><Link to="/admin/Accounts"  id="bar6"><span className="las la-user-circle"></span><span > Accounts</span></Link></li>
                </ul>
            </div>
            </div>
            <div class="main-content" id="bar1">
                {/* <Pn title={varb}/> */}
                {Admin && <Pn title={varb} Admin={Admin}/>}

                {/* <Pc /> */}
                {isPending && <div class="spinner-grow text-warning hel"></div>}
                {Admin && account && Labo && Equipe && <Pc Admin={Admin} account={account} Equipe={Equipe} Labo={Labo}/>}
            </div>
            
        </div>
      
    )
}

export default Admin
