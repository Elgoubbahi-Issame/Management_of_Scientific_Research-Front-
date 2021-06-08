import React, { Component } from 'react'
import { useState , useEffect} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { mixt3 } from '../Popup/PopupA'
import Pupa from '../Popup/PopupA';
import Pupp from '../Popup/PopupP';
import Pn from '../P_nav';
import Pa from '../P_a';
import useFetch from './useFetch';
import { removpopup1 } from '../Popup/PopupP';
import { off } from './ChefEquipeME';
var F ;
function ChefLaboA (){
    


const history = useHistory();
        useEffect(() => {
            // console.log(JSON.parse(localStorage.getItem("token")).user_id)
          try {
            F=JSON.parse(localStorage.getItem("token")).user_id;
          } catch (error) {
              history.push("/");
          } 
          }, []) 
    const varb ="Mon Equipe";
    // const {data: accounts , isPending} = useFetch('http://localhost:8000/accounts');
    // const {data: Labo } = useFetch('http://localhost:8002/Labo');
    // const {data: ChfLb} = useFetch('http://localhost:8000/accounts/5');

  
         const {data: accounts} = useFetch('http://34.77.153.247:8000/api/Users/');
        //  const {data: Labo  , isPending} = useFetch('http://34.77.153.247:8000/api/Labs/');
         const {data: Equipe , isPending} = useFetch('http://34.77.153.247:8000/api/Teams/');
         const {data: ChfEq} = useFetch('http://34.77.153.247:8000/api/Users/'+F);
   
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
                <li><Link to="/chefE/profile"  id="bar4" ><span className="las la-user-alt"></span><span > Profile</span></Link></li>
                <li><Link to="/chefE/Mon+Equipe" className="active" id="bar5" ><span className="las la-clipboard-list"></span><span >Mon Equipe</span></Link></li>
                {/* <li><Link to="/chefL/Accounts"  id="bar6" ><span className="las la-user-circle"></span><span > Accounts</span></Link></li> */}
            </ul>
        </div>
        </div>
        <div class="main-content" id="bar1">
            {/* <Pn title={varb}/> */}
            {ChfEq && <Pn title={varb} Admin={ChfEq}/>}
            {isPending && <div class="spinner-grow text-warning hel"></div>}
            {accounts &&  ChfEq && Equipe && <Pa account={accounts} Equipe={Equipe}  ChfEq={ChfEq}/>}
            
         </div>
         {/* <Pupa /> */}
         {ChfEq && accounts && <Pupa accounts={accounts} ChfEq={ChfEq}  />}

        
            </div>
        )
    }


export default ChefLaboA
