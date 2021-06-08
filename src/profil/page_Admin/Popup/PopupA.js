import React from 'react'
import './popup.css';
import { off }  from '../AdmPage/AdminSR'
import { removpopup }  from './Popup'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


var A =null ;
export function getId(a){ A=a ;}
export function mixt3(){
    document.getElementById("des1").style.display = "none";
    document.getElementById("des2").style.display = "none";
    document.getElementById("des3").style.display = "none";
    document.getElementById("des4").style.display = "none";
    document.getElementById("des").style.display = "block";
    removpopup();
    off();
   
}

  export function show_labo() {
    document.getElementById("des1").style.display = "block";
    document.getElementById("des").style.display = "none";
  }
  
 export function show_equipe() {
    document.getElementById("des2").style.display = "block";
    document.getElementById("des").style.display = "none";
  }
  export function show_prof() {
    document.getElementById("des3").style.display = "block";
    document.getElementById("des").style.display = "none";
  }

const PopupA = ({accounts,Labo,Equipe}) => {
    
    
    
    const [username, setName] = useState('');
    // const [first_name, setfirst_name] = useState('');
    // const [last_name, setlast_name] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState(null);
    const [type, setType] = useState('');
    const [password, setpassword] = useState('0000');
    const [team, setteam] = useState(null);
   
    const [isPending, setIsPending] = useState(false);
    // const Joined = new Date().toLocaleDateString();
    
    const addOne = (e) => {
        e.preventDefault();
       var  first_name=username;
        var last_name=username;
        const account ={ username,first_name,last_name,phone, password,email,team,type};
        setIsPending(true);
        setTimeout(() => {
            fetch('http://34.77.153.247:8000/api/Users/' ,{
                method: 'POST',
                headers: {"content-type": "application/json"},
                body: JSON.stringify(account)
            }).then(() =>{
                setIsPending(false);
                window.location.reload(false);
            })
        }, 1000);

        
    }
    const DeleteOne = (ID) =>{
        

        fetch('http://34.77.153.247:8000/api/Users/'+ ID, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload(false);
        })
    }
    // const DeleteOne = (ID) =>{
       
    //     fetch('http://34.77.153.247:8000/api/Users/'+ ID, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         window.location.reload(false);
    //     })
    // }


    const updateAcc = (ID) => {
        alert(ID);
        var account=null;
        accounts.map((hel)=>{
        
            if(hel.id==ID){account=hel;}
           
        }) 

        if(account.type=="PROF"&&type=="C_EQ")account.team=null;
        // if(account.type=="PROF"&&type=="C_LAB")account.team=null;
        if(account.type=="C_EQ"&&type=="PROF") Equipe.map((si)=>{if(account.team==si.id)si.C_EQ=null}) ;
        if(account.type=="C_LAB"&&type=="PROF") Labo.map((si)=>{if(account.id==si.C_LAB)si.C_LAB=null}) ;
        
        account.username=username;
        account.type=type;  
        alert(username)
        alert(type);
        account.password="0";  
        // e.preventDefault();
        
        setIsPending(true);
        // setTimeout(() => {
            fetch(' http://34.77.153.247:8000/api/Users/'+ ID,{
                method: 'PUT',
                headers: {"content-type": "application/json"},
                body: JSON.stringify(account)
            }).then((response) =>{ 
                response.json();
                setIsPending(false);
          
            }).then((data)=>(console.log(data)))
        // }, 100);
  
        
    }
    const [toggle, settoggle] = useState(false);
    const [toggle1, settoggle1] = useState(false);
    const [toggle2, settoggle2] = useState(false);
    //  const updateOne = (e , ID) => {
    //     e.preventDefault();
    //     const account ={ Name, Email,User_type,Joined, password, phone};
    //     setIsPending(true);
    //     setTimeout(() => {
    //         fetch('http://34.77.153.247:8000/api/Users/'+ ID,{
    //             method: 'PUT',
    //             headers: {"content-type": "application/json"},
    //             body: JSON.stringify(account)
    //         }).then(() =>{
    //             setIsPending(false);
    //             window.location.reload(false);
    //         })
    //     }, 1000);

        
    // }
    return (
        <div className="body">
            
            <div style={{height:"445px"}} class="popup center">
                   <div id="des" className="description">
                   <div class="icon">
                        <i class="fa fa-check"></i>
                    </div>
                    <div class="title">
                        Wich one !!
                    </div>
                    <div class="dismiss-btn" >
                        <button id="dismiss-popup-btn" value="C_LAB" onClick={(e) =>{ setType(e.currentTarget.value); show_labo() ;} }>
                       Chef labo
                        </button>
                        <button id="dismiss-popup-btn" value="C_EQ" onClick={(e) =>{ setType(e.currentTarget.value); show_equipe();}}>
                        Chef equipe
                        </button>
                        <button id="dismiss-popup-btn" value="PROF" onClick={(e) =>{ setType(e.currentTarget.value); show_prof(); }}>
                        Prof
                        </button>
                    </div>
                   </div>
                    <div id="des1" class="description1">
                        <form autocomplete="off" onSubmit={addOne} >
                                <div>
                                <input id="elm1"type="text" placeholder="chef Labo" className="inpot" value={username} onChange={(e) => setName(e.currentTarget.value)} required  />
                                    </div> 
                              <div>
                              <input id="elm2"type="email" placeholder="Email " className="inpot" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required  />
                                </div> 
                                {/* <div>
                              <input id="elm2" type="text" placeholder="date of day " className="inpot" value={date} onChange={(e) => setDate(e.currentTarget.value)} required  />
                                </div>  */}



                            {/* <div className="textpo">
                              
                            </div>
                             <div className="textpo">

                            </div> */}
                            {!isPending && <button type="submit" className="submit1">add another </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>adding..</button>}
                            {/* <p>{name}</p>
                            <p>{type}</p>
                            <p>{email}</p>
                            <p>{date}</p> */}
                        </form>                     
                    </div>
                    <div  id="des2" class="description2">
                        <form autocomplete="off" onSubmit={addOne}>
                                <div>
                                     <input id="elm3" type="text" placeholder="chef Equipe" className="inpot" value={username} onChange={(e) => setName(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm4" type="email" placeholder="Email" className="inpot" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required  />
                                </div> 
                                {/* <div>
                              <input id="elm2" type="text" placeholder="date of day " className="inpot" value={date} onChange={(e) => setDate(e.currentTarget.value)} required  />
                                </div>  */}

                            {!isPending && <button type="submit" className="submit1">add another </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>adding..</button>}
                        </form>                     
                    </div>
                    <div  id="des3" class="description2">
                        <form autocomplete="off" onSubmit={addOne}>
                                <div>
                                     <input id="elm5" type="text" placeholder="Prof name" className="inpot" value={username} onChange={(e) => setName(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm6" type="email" placeholder="Email" className="inpot" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required  />
                                </div> 
                                {/* <div>
                              <input id="elm2" type="text" placeholder="date of day " className="inpot" value={date} onChange={(e) => setDate(e.currentTarget.value)} required  />
                                </div>  */}

                            {!isPending && <button type="submit" className="submit1">add another </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>adding..</button>}                        </form>                     
                    </div>
                     <div id="des4" className="description">
                        <div class="icon1">
                            {/* <i class="fa fa-check"></i> */}
                            <i class="fa fa-times"></i>
                        </div>
                        <div class="title">
                            Are you Sure you want to delet that !!
                        </div>
                        <div class="dismiss-btn" >
                            <button id="dismiss-popup-btn" onClick={() =>{/*alert(A);*/ DeleteOne(A)}}/*{DeleteOne(Id)}*/>
                             Yes
                            </button>
                            <button id="dismiss-popup-btn"  onClick={mixt3}>
                             No
                            </button>
                        
                        </div>
                    </div>
                         
           
                   
                   <div id="des6" class="description1">
                       <form autocomplete="off" onSubmit={()=>{updateAcc(A)}} >
                                  <div class="title">
                                    Type
                                    </div>
                                    <div class="dismiss-btn" >
                                                <button type="reset"  id="botona" value="C_EQ" className="dismiss" style={{background: toggle? "white" : "#ff6701"}}  onClick={(e) =>{ setType(e.currentTarget.value); settoggle(true);settoggle2(false); settoggle1(false)}}>
                                                    Chef equipe
                                                    </button >
                                                    <button type="reset" id="botona1" value="PROF" className="dismiss" style={{background: toggle1? "white" : "#ff6701"}}  onClick={(e) =>{ setType(e.currentTarget.value); settoggle1(true); settoggle2(false);settoggle(false)}}>
                                                    Prof
                                                    </button > 
                                    </div>
                                    <div  style={{marginTop:"0px"}} class="dismiss-btn d-flex justify-content-center" >
                                                <button type="reset"  id="botona" value="C_LAB" className="dismiss" style={{background: toggle2? "white" : "#ff6701"}}  onClick={(e) =>{  setType(e.currentTarget.value); settoggle2(true); settoggle(false); settoggle1(false)}}>
                                                    Chef Labo
                                                    </button >           
                                    </div>
                               <div>
                               <input id="elm1"type="text" placeholder="new Username" className="inpot" value={username} onChange={(e) => setName(e.currentTarget.value)} required  />
                                   </div> 
                             {/* <div>
                             <input id="elm2"type="text" placeholder="new Type " className="inpot" value={type} onChange={(e) => setType(e.currentTarget.value)} required  />
                               </div>  */}

                           {!isPending && <button type="submit" className="submit1">Update </button>}
                           {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>Updating..</button>}
                           {/* <p>{name}</p>
                           <p>{type}</p>
                           <p>{email}</p>
                           <p>{date}</p> */}
                       </form>                     
                   </div>
                   
    
            
                   
            </div>
            <div class="center">
                    {/* <button id="open-popup-btn" onClick={addpopup}>
                        Open Popup
                    </button> */}
            </div>
        </div>
    )
}

export default PopupA
