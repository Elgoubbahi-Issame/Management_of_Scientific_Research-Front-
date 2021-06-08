import React from 'react'
import './popup.css';
import { off }  from '../ChfProfPage/ChefLaboML'
import { removpopup }  from './Popup'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


var A =null ;
//var B =null ;
export function getId(a){ A=a ; }
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

const PopupA = ({accounts}) => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [password, setpassword] = useState('0000');
    const [type, setType] = useState('');
    const [phone, setphone] = useState(null);
    const [team, setteam] = useState(null);
    const [isPending, setIsPending] = useState(false);
    // const Joined = new Date().toLocaleDateString();
    
    const addOne = (e) => {
        e.preventDefault();
        const account ={username,first_name,last_name,email,phone,type,team,password};
        // alert(account.password);
        setIsPending(true);
        setTimeout(() => {
            // console.log(account)
           fetch('http://34.77.153.247:8000/api/Users/',{
                method: 'POST',
                // mode: 'cors',
                headers: {
                    "Accept": "application/json, text/plain,*/*",
                    "content-type": "application/json",
                },
                body: JSON.stringify(account)
            }).then((res) =>{ res.json();
                setIsPending(false);
                window.location.reload(false);
            })
        }, 1000);

    }
    const DeleteOne = (ID) =>{
        // alert(ID);

        fetch('http://34.77.153.247:8000/api/Users/'+ ID, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload(false);
        })
    }
    const updateAcc = (ID,e) => {
        // alert(ID);
        // accounts.map((La)=>(alert(La.id)));
        // e.preventDefault();
        var account=null;
        accounts.map((helo)=>{

            if(helo.id==ID){account=helo;}
            // else alert('kztik')
        })
        // const account ={ username,type};
        account.username=username;
        account.type=type;  
        account.password='0';  
        // alert(account.username);
        // console.log(account);
        setIsPending(true);
        setTimeout(() => {
            fetch('http://34.77.153.247:8000/api/Users/'+ ID,{
                method: 'PUT',
                headers: {"Accept": "application/json , text/plain, */*",
                            "content-type": "application/json"
                        },
                body: JSON.stringify(account)
            }).then((res) =>{
                res.json();
                setIsPending(false);
            })
           
           
        }, 1000);
  
        
    }
   
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
    const [toggle, settoggle] = useState(false);
    const [toggle1, settoggle1] = useState(false);
    return (
        <div className="body">
            
            <div class="popup center">
                   <div id="des" className="description">
                   <div class="icon">
                        <i class="fa fa-check"></i>
                    </div>
                    <div class="title">
                        Wich one !!
                    </div>
                    <div class="dismiss-btn" >
                        {/* <button id="dismiss-popup-btn" value="Chef Labo" onClick={(e) =>{ setType(e.currentTarget.value); show_labo() ;} }>
                       Chef labo
                        </button> */}
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
                                <input id="elm1"type="text" placeholder="chef Labo" className="inpot" value={username} onChange={(e) => setName(e.currentTarget.value) } required  />
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
                                     <input id="elm3" type="text" placeholder="Username" className="inpot" value={username} onChange={(e) => setName(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm4" type="text" placeholder="First name" className="inpot" value={first_name} onChange={(e) => setfirst_name(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm5" type="text" placeholder="Last name" className="inpot" value={last_name} onChange={(e) => setlast_name(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm6" type="email" placeholder="Email" className="inpot" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required  />
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
                                     <input id="elm5" type="text" placeholder="Username" className="inpot" value={username} onChange={(e) => setName(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm4" type="text" placeholder="First name" className="inpot" value={first_name} onChange={(e) => setfirst_name(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm4" type="text" placeholder="Last name" className="inpot" value={last_name} onChange={(e) => setlast_name(e.currentTarget.value)} required  />
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
                                   <a   id="botona" className="dismiss" style={{background: toggle? "white" : "#ff6701"}} value="C_EQ" onClick={(e) =>{ setType(e.currentTarget.value); settoggle(true); settoggle1(false)/*document.getElementById(e.currentTarget.value).classList.toggle('active2'); document.getElementById(e.currentTarget.value).classList.toggle('dismiss');*/ }}>
                                    Chef equipe
                                    </a>
                                    <a  id="botona1" className="dismiss" style={{background: toggle1? "white" : "#ff6701"}} value="Prof" onClick={(e) =>{ setType(e.currentTarget.value); settoggle1(true); settoggle(false)/*document.getElementById(e.currentTarget.value).classList.toggle('active2'); document.getElementById(e.currentTarget.value).classList.toggle('dismiss'); */}}>
                                    Prof
                                    </a> 
                             </div>

                                    <div>
                                    <input id="elm1"type="text" placeholder="new Name" className="inpot" value={username} onChange={(e) => setName(e.currentTarget.value)} required  />
                                   </div>
                             {/* <br/>
                             <br/> */}
                             {/* <br/>
                             <br/> */}
                             <br/>

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
