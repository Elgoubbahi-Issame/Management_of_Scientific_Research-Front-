import React, { Component } from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'
import { mixt7 } from '../Popup/Popup'
import Pn from '../P_nav';
import Psr from '../P_SR';
import Pup from '../Popup/Popup';
// import { C }  from './Admin'
import {useHistory} from 'react-router-dom'

export function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
 export function off() {
    document.getElementById("overlay").style.display = "none";
  }

  var C ;
    function AdminSR() {
        const history = useHistory();
  
        useEffect(() => {
            // console.log(JSON.parse(localStorage.getItem("token")).user_id)
          try {
            C=JSON.parse(localStorage.getItem("token")).user_id;
          } catch (error) {
              history.push("/");
          } 
          }, []) 
        const varb = "Structur de recherche";
        // const {data: Equipe ,isPending} = useFetch('http://localhost:8001/Equipe');
        // const {data: Labo } = useFetch('http://localhost:8002/Labo');
        // const {data: Admin } = useFetch('http://34.77.153.247:8000/api/Users/6');

        const {data: Equipe ,isPending} = useFetch('http://34.77.153.247:8000/api/Teams/');
        const {data: Labo } = useFetch('http://34.77.153.247:8000/api/Labs/');
        // const {data: Labo_List } = useFetch('http://34.77.153.247:8000/api/Lab-Users/');
        const {data: Admin } = useFetch('http://34.77.153.247:8000/api/Users/'+ C);
        const {data: account } = useFetch('http://34.77.153.247:8000/api/Users/');

        // var j=0;
        // var laboid=[];
        // var len=Labo.length;
        // for(var i=0; i<len ; i++){ 
        //         // alert(La.id);
        //         const {data: List_Labo } = useFetch('http://34.77.153.247:8000/api/Lab-Teams/'+Labo[i].id);
        //         alert(List_Labo.id);
        //         laboid=List_Labo;
                
        //         j++;
        //         laboid.length=j;
               
        //     }
        // const  [Labo, setLabo] = useState(null);
        // const  [Equipe, setEquipe] = useState(null);
        // const  [isPending, setPending] = useState(true);
        // useEffect(() => {
        //     setTimeout(() => {
        //         fetch('http://localhost:8001/Equipe')
        //         .then(res =>{
        //             return res.json();
        //         })
        //         .then(data =>{
        //             setEquipe(data);
        //             setPending(false);
        //         })
        //         fetch('http://localhost:8002/Labo')
        //         .then(res1 =>{
        //             return res1.json();
        //         })
        //         .then(data1 =>{
        //             setLabo(data1);
        //             // setPending(false);
        //         })
        //     }, 1000);
        // }, [])
        return (
            <div>
            <div id="overlay" onClick={()=>{mixt7();document.getElementById("des6").style.display = "none";/*document.getElementById("des10").style.display = "none";*/}}></div>
            
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
                <li><Link to="/admin/Structur+de+recherche" className="active" id="bar5" ><span className="las la-clipboard-list"></span><span > Structur de recherche</span></Link></li>
                <li><Link to="/admin/Accounts" id="bar6" ><span className="las la-user-circle"></span><span > Accounts</span></Link></li>
                </ul>
            </div>
            </div>
            <div class="main-content" id="bar1">
                {/* <Pn title={varb}/> */}
                {Admin && <Pn title={varb} Admin={Admin}/>}
            {isPending && <div class="spinner-grow text-warning hel"></div>}
            {Labo && account && Equipe && <Psr account={account} Equipe={Equipe} Labo={Labo}/>}
            </div>
           {Labo && account && Equipe &&<Pup account={account} Equipe={Equipe} Labo={Labo}/>}
        </div>
        )
    }


export default AdminSR
