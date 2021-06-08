import React from 'react'
import {useState} from 'react'
import './popup.css';
import { off }  from '../AdmPage/AdminSR'
import { mixt3 }  from './PopupA'

var A =null , B=null ;
export function getID(a){ A=a ;}
export function getType(a){ B=a ;}
export function mixt7(){
    document.getElementById("des1").style.display = "none";
    document.getElementById("des2").style.display = "none";
    document.getElementById("des3").style.display = "none";
    document.getElementById("des").style.display = "block";
    removpopup();
    off();
   
}

export function addpopup(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  }
   
export function removpopup(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  }
  export function mixt2(){
      removpopup();
      off();
      document.getElementById("des1").style.display = "none";
      document.getElementById("des2").style.display = "none";
      document.getElementById("des").style.display = "block";
  }
  export function show_labo() {
    document.getElementById("des1").style.display = "block";
    document.getElementById("des").style.display = "none";
  }
  
 export function show_equipe() {
    document.getElementById("des2").style.display = "block";
    document.getElementById("des").style.display = "none";
  }

  const Popup = ({account ,Equipe ,Labo}) =>{

   
  
    const [Type, setType] = useState('');
    const [name, setname] = useState('');
    const [theme, settheme] = useState('');
    const [Chef, setChef] = useState('');
    const [Lab, setLab] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const addOne = (e) => {
        e.preventDefault();
        if(Type=="Equipe"){
            account.map((eq)=>{
                if(eq.username==Chef){
                    if(eq.type=="C_EQ"){
                        if(!eq.team){
                            const C_EQ = eq.id;
                            const Equip ={ name, theme, C_EQ , Lab};
                        
                            setIsPending(true);
                            // alert(LaboI.id);
                            setTimeout(() => {
                                fetch('http://34.77.153.247:8000/api/Teams/',{
                                    method: 'POST',
                                    headers: {"content-type": "application/json"},
                                    body: JSON.stringify(Equip)
                                }).then(() =>{
                                    setIsPending(false);
                                    window.location.reload(false);
                                })
                            }, 1000);
                        }else
                        alert(Chef+' is already Chef one of the equipes');
                    }else
                    alert(Chef+' is not Chef of equipe change him');
                }
                // else
                // alert('Somthing false try again');
            })
            
        }
        else{

            account.map((eq)=>{
                if(eq.username==Chef){
                    if(eq.type=="C_LAB"){
                        // if(!eq.team){
                            const C_LAB = eq.id;
                            const Lab ={ name, theme, C_LAB };
                        
                            setIsPending(true);
                            // alert(LaboI.id);
                            setTimeout(() => {
                                fetch('http://34.77.153.247:8000/api/Labs/',{
                                    method: 'POST',
                                    headers: {"content-type": "application/json"},
                                    body: JSON.stringify(Lab)
                                }).then(() =>{
                                    setIsPending(false);
                                    window.location.reload(false);
                                })
                            }, 1000);
                        // }else
                        // alert(Chef+' is already Chef one of the equipes');
                    }else
                    alert(Chef+' is not Chef of Labo change him');
                }
                // else
                // alert('Somthing false try again');
            })
        }
        //     const labo ={ Chef, Title, Type, Equipes};
        //     setIsPending(true);
        //     setTimeout(() => {
        //         fetch(' http://localhost:8002/Labo' ,{
        //             method: 'POST',
        //             headers: {"content-type": "application/json"},
        //             body: JSON.stringify(labo)
        //         }).then(() =>{
        //             setIsPending(false);
        //             window.location.reload(false);
        //         })
        //     }, 1000);
        // }  
                }

    const DeleteOne = (ID , TYPE) =>{
        if(TYPE=="Equipe"){
        fetch('http://34.77.153.247:8000/api/Teams/'+ ID, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload(false);
        })
    }
    else{
        fetch('http://34.77.153.247:8000/api/Labs/'+ ID, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload(false);
        })
    }
}
const updateLE = (ID,TYPE) => {
    // e.preventDefault();
    // const objet ={ Chef,Title};
    // alert(ID)
    // setIsPending(true);
    // setTimeout(() => {
        if(TYPE=="Equipe"){
            var Equip = null;
            Equipe.map((x)=>{ if(x.id==ID)Equip=x})
            account.map((eq)=>{
                if(eq.username==Chef){
                    if(eq.type=="C_EQ"){
                        if(!eq.team){
                            Equip.C_EQ=eq.id;
                            Equip.name=name;
                            Equip.theme=theme;
                            // const C_EQ = eq.id;
                            // const Equip ={ name, theme, C_EQ , Lab};
                        
                            setIsPending(true);
                            // alert(LaboI.id);
                            // setTimeout(() => {
                                fetch('http://34.77.153.247:8000/api/Teams/'+ID,{
                                    method: 'PUT',
                                    headers: {"content-type": "application/json"},
                                    body: JSON.stringify({"name":name,"theme":theme,"C_EQ":eq.id})
                                }).then(() =>{
                                    setIsPending(false);
                                    // window.location.reload(false);
                                })
                            // }, 100);
                        }else
                        alert(Chef+' is already Chef one of the equipes');
                    }else
                    alert(Chef+' is not Chef of equipe change him');
                }
                // else
                // alert('Somthing false try again');
            })
       
        }else if(TYPE=="Labo"){
            // alert(TYPE);

            var Lab = null;
            Labo.map((x)=>{ if(x.id==ID)Lab=x})
            account.map((eq)=>{
                if(eq.username==Chef){
                    if(eq.type=="C_LAB"){
                        // if(!eq.team){
                            // const C_LAB = eq.id;
                            Lab.C_LAB=eq.id;
                            Lab.name=name;
                            Lab.theme=theme;
                            // const Lab ={ name, theme, C_LAB };
                        
                            setIsPending(true);
                            // alert(LaboI.id);
                            // setTimeout(() => {
                                fetch('http://34.77.153.247:8000/api/Labs/'+ID,{
                                    method: 'PUT',
                                    headers: {"content-type": "application/json"},
                                    body: JSON.stringify({"name":name,"theme":theme,"C_LAB":eq.id})
                                }).then(() =>{
                                    setIsPending(false);
                                    // window.location.reload(false);
                                })
                            // }, 100);
                        // }else
                        // alert(Chef+' is already Chef one of the equipes');
                    }else
                    alert(Chef+' is not Chef of Labo change him');
                }
            })
          
         }
       else  alert('Reload again !');

    
// }, 1000);
    
}
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
                    <div class="dismiss-btn">
                        <button id="dismiss-popup-btn" value="Labo" onClick={(e) =>{ setType(e.currentTarget.value); show_labo();}}>
                       Labo
                        </button>
                        <button id="dismiss-popup-btn" value="Equipe" onClick={(e) =>{ setType(e.currentTarget.value);show_equipe();}}>
                        Equipe
                        </button>
                    </div>
                   </div>
                    <div id="des1" class="description1">
                        <form autocomplete="off" onSubmit={addOne} >
                                <div>
                                <input id="elm1"type="text" placeholder="chef Labo" className="inpot" value={Chef} onChange={(e) => setChef(e.currentTarget.value)} required  />
                                    </div> 
                              <div>
                              <input id="elm2"type="text" placeholder="Title " className="inpot" value={theme} onChange={(e) => settheme(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                              <input id="elm2"type="text" placeholder="Labo name  " className="inpot" value={name} onChange={(e) => setname(e.currentTarget.value)} required  />
                                </div>

                            {/* <div className="textpo">
                              
                            </div>
                             <div className="textpo">

                            </div> */}
                             {!isPending && <button type="submit" className="submit1">add another </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>adding..</button>}
                            {/* <button type="submit" className="submit1" onClick={addoneLabo} >add another </button> */}
                        </form>                     
                    </div>
                    <div  id="des2" class="description2">
                        <form autocomplete="off" onSubmit={addOne}>
                                <div>
                                     <input id="elm3" type="text" placeholder="chef Equipe" className="inpot" value={Chef} onChange={(e) => setChef(e.currentTarget.value)}  required  />
                                </div> 
                                <div>
                              <input id="elm2"type="text" placeholder="Title " className="inpot" value={theme} onChange={(e) => settheme(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm4" type="text" placeholder="Equipe name" className="inpot" value={name} onChange={(e) => setname(e.currentTarget.value)} required  />
                                </div>
                            {!isPending && <button type="submit" className="submit1">add another </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>adding..</button>}
                            {/* <button type="submit" className="submit1" onClick={addoneEquip} >add another </button> */}
                        </form>                     
                    </div>
                    <div id="des3" className="description">
                        <div class="icon1">
                        <i class="fa fa-times"></i>
                            {/* <i class="fa fa-check"></i> */}
                        </div>
                        <div class="title">
                            Are you Sure you want to delet that !!
                        </div>
                        <div class="dismiss-btn" >
                            <button id="dismiss-popup-btn" onClick={() =>{/*alert(A);*/ DeleteOne(A,B)}}/*{DeleteOne(Id)}*/>
                             Yes
                            </button>
                            <button id="dismiss-popup-btn"  onClick={mixt7}>
                             No
                            </button>
                        
                        </div>
                    </div>
                    <div id="des6" class="description1">
                       <form autocomplete="off" onSubmit={()=>{updateLE(A,B);}} >
                               <div>
                               <input id="elm1"type="text" placeholder="New Chef " className="inpot" value={Chef} onChange={(e) => setChef(e.currentTarget.value)} required  />
                                   </div> 
                             <div>
                             <input id="elm2"type="text" placeholder="New Title " className="inpot" value={theme} onChange={(e) => settheme(e.currentTarget.value)} required  />
                               </div> 
                               <div>
                                    <input id="elm4" type="text" placeholder="New name" className="inpot" value={name} onChange={(e) => setname(e.currentTarget.value)} required  />
                                </div>
                             {/* <br/>
                             <br/> */}
                             {/* <br/>
                             <br/> */}

                           {!isPending && <button type="submit" className="submit1">Update </button>}
                           {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>Updating..</button>}
                           {/* <p>{name}</p>
                           <p>{type}</p>
                           <p>{email}</p>
                           <p>{date}</p> */}
                       </form>                     
                   </div>
                   {/* <div id="des10" class="description1">
                       <form autocomplete="off" onSubmit={()=>{updateLE(A,B);}} >
                               <div>
                               <input id="elm1"type="text" placeholder="new Equipe Chef " className="inpot" value={Chef} onChange={(e) => setChef(e.currentTarget.value)} required  />
                                   </div> 
                             <div>
                             <input id="elm2"type="text" placeholder="new Title " className="inpot" value={Title} onChange={(e) => setTitle(e.currentTarget.value)} required  />
                               </div>  */}
                             
                             {/* <br/>
                             <br/> */}
                             {/* <br/>
                             <br/> */}

                           {/* {!isPending && <button type="submit" className="submit1">Update </button>}
                           {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>Updating..</button>} */}
                           {/* <p>{name}</p>
                           <p>{type}</p>
                           <p>{email}</p>
                           <p>{date}</p> */}
                       {/* </form>                     
                   </div>
                    */}
            </div>
            <div class="center">
                    {/* <button id="open-popup-btn" onClick={addpopup}>
                        Open Popup
                    </button> */}
            </div>
        </div>
    )
}

export default Popup
