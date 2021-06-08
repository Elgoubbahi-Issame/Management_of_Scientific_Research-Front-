import React from 'react'
import './popup.css';

import { useState } from 'react'


var A =null ;
export function getAiD(a){ A=a ;}


const PopupP = ({ChfEq,accounts})=> {

   
    const [first_name, setfirst] = useState('');
    const [last_name, setlast] = useState('');
    const [email, setEmail] = useState('');
    const [team, setteam] = useState(ChfEq.team);
    const [password, setpswd] = useState('');
    const [password1, setpswd1] = useState('');
    const [phone, setPhone] = useState('');
    const [type] = useState('PROF');
    // const [Joined] = useState('');
    const [isPending, setIsPending] = useState(false);
    
 
   const UpdateOne = (e) => {
    var account=null;
    accounts.map((helo)=>{

        if(helo.id==ChfEq.id){account=helo;}
        // else alert('kztik')
    })
    // const account ={ username,type};

      e.preventDefault();
      if(password==password1){
        if(password=="")setpswd('0');
        account.first_name=first_name;
        account.last_name=last_name;
       account.email=email;
       account.phone=phone;
       account.type=type;  
       account.password=password;
     
   setIsPending(true);
    setTimeout(() => {
              fetch(' http://34.77.153.247:8000/api/Users/'+ ChfEq.id,{
                  method: 'PUT',
                  headers: {"content-type": "application/json" ,
                             "Accept": "application/json"
                            },
                  body: JSON.stringify(account)
              }).then((response) =>{ 
                  response.json();
                  setIsPending(false);
                  window.location.reload(false);
              }).then((data)=>(console.log(data)))
          }, 100);
  }else  alert("check if password correct !");
}


    return (
        <div className="body">
            
            <div style={{height:"480px" ,width:"320px", top:"55%"}} class="popup center">
                   
                    <div id="des5" class="description1">
                        <form autocomplete="off" onSubmit={UpdateOne} >
                                <div>
                                <input id="elm1"type="text" style={{fontSize:"12px" ,fontWeight:"400" }}  placeholder="First Name" className="inpot" value={first_name} onChange={(e) => setfirst(e.currentTarget.value)}  required />
                                    </div> 
                                    <div>
                                <input id="elm1"type="text" style={{fontSize:"12px" ,fontWeight:"400" }}  placeholder="Last Name" className="inpot" value={last_name} onChange={(e) => setlast(e.currentTarget.value)}  required />
                                    </div> 
                              <div>
                              <input id="elm2"type="email" style={{fontSize:"12px" ,fontWeight:"400" }}  placeholder="new Email " className="inpot" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                              <input id="elm2" type="text" style={{fontSize:"12px" ,fontWeight:"400" }}  placeholder="new phone number" className="inpot" value={phone} onChange={(e) => setPhone(e.currentTarget.value)} required  />
                                </div> 

                                <div>
                              <input id="elm2" type="text" style={{fontSize:"12px" ,fontWeight:"400" }}  placeholder="new password " className="inpot" value={password} onChange={(e) => setpswd(e.currentTarget.value)}  required />
                                </div> 
                                <div>
                              <input id="elm2" type="text" style={{fontSize:"12px" ,fontWeight:"400" }} placeholder="confirme password " className="inpot" value={password1} onChange={(e) => setpswd1(e.currentTarget.value)} required  />
                                </div> 

                            {!isPending && <button type="submit" className="submit1">Update </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>Updating..</button>}
                           
                      
                        </form>                     
                    </div>
                    <div id="des7" class="description1">
                        <form >
                                <div>
                                <input id="elm1"type="text" placeholder="Title" className="inpot" /*value={username} onChange={(e) => setName(e.currentTarget.value)}*/ required  />
                                    </div> 
                              <div>
                              <textarea id="el" type="text" placeholder="Contenu ... " row="4" className="inpot" /*value={email} onChange={(e) => setEmail(e.currentTarget.value)}*/ required  />
                                </div> 
                                <div>
                              <input id="elm2" type="file" className="uplaod" /*value={phone} onChange={(e) => setPhone(e.currentTarget.value)} */required  />
                                </div> 

                              

                            {!isPending && <button type="submit" className="submit1">Add articl </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>Adding..</button>}
                         
                        </form>                     
                    </div>
            </div>
            <div class="center">
                   
            </div>
        </div>
    )
}

export default PopupP
