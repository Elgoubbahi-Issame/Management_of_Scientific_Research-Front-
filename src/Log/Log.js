import React from 'react';
import './log.css';

import {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { decodeToken } from "react-jwt";
import axios from 'axios';




export function Cpopup(){
    document.querySelector('.Log_sin').classList.add('hide');
    document.getElementsByClassName("Log_sin")[0].classList.remove("active");

    document.querySelector('.content').classList.add('hide');
    document.body.style.overflowY = '';
    document.getElementById('dd').classList.remove('dbab');

}
export function Spopup(){
    document.body.style.overflowY = 'hidden';
    document.querySelector('.Log_sin').classList.remove('hide');
    document.getElementsByClassName("Log_sin")[0].classList.add("active");

    document.querySelector('.content').classList.remove('hide');
    document.getElementById('dd').classList.toggle('dbab');

   
}

const Log = () => {
    const [password, setPswd] = useState('');
    const [username, setusername] = useState('');
    const [redirect, setredirect] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const Check = async (e) => {
            e.preventDefault();
            const data ={
                username,
                password
            }
            axios.post('http://34.77.153.247:8000/api/token/',data)
            .then(res=>
                {
                    setIsPending(true);
                   try {
                    if(res.data.refresh!==undefined && res.data.access!==undefined){
                        var user=decodeToken(res.data.refresh);
                        var h = JSON.stringify(user);
                        localStorage.setItem('token',h);
                    const config={
                        headers:{
                            Authorization: 'Bearer'+localStorage.getItem('token')
                        }
                    };
                    axios.get('http://34.77.153.247:8000/api/Users/'+user.user_id,config).then(
                        res=>{
                          setIsPending(false);
                            if(res.data.type=="PROF"){history.push("/profP/profile");} 
                            if(res.data.type=="ADMIN"){history.push("/admin"); }
                            if(res.data.type=="C_EQ"){history.push("/chefE/profile"); }
                            if(res.data.type=="C_LAB"){ history.push("/chefL/profile"); }
                        })
                    }else alert('check your password and username if correct !');
                   } catch (error) {}
                })
    }


        





    return (
        <div className="Log_sin hide" id="Log_sin-1">
            <i className="fa fa-window-close cls" onClick={Cpopup}></i>

                <div className="disin">
                    <div id="id1"></div>
                    <a class="navbar-brand" href="#">IBnZZoHR</a>
                </div>
          
             <form id="My2" className="MyInfo2" onSubmit={Check}>
                <div className="textpo">
                    <i class="fa sa fa-user"></i>
                    <input type="text" placeholder="Username" className="inpooo" value={username} onChange={(e) => 
                        setusername(e.currentTarget.value)} required  />
                </div>
                <div className="textpo">
                    <i class="fa sa fa-lock"></i> 
                    <input type="password" placeholder="mote de passe" className="inpooo" value={password} onChange={(e) =>
                         setPswd(e.currentTarget.value)} required  />
                  </div> 
               {!isPending && <button type="submit" className="submit" >Log In</button>}
               {isPending && <button type="submit" className="submit" >Loging ..</button>}
            </form> 

               
        </div>
    )
}
export default Log;
