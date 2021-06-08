import React from 'react'
import {useState} from 'react'
import './popup.css';
import { off }  from '../ChfLboPage/ChefLaboML'
import { mixt3 }  from './PopupA'
import {Multiselect } from 'multiselect-react-dropdown'


// 

var A =null , B=null ;
export function getID(a){ A=a ;}
export function getType(a){ B=a ;}
export function mixt7(){
   
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

  const Popup = ({Equipe , account  , Labo , chfLabo}) =>{
//     var  Equip =null ;
//     Labo.map((La) =>{
    
//     if(chfLabo && La.Chef==chfLabo.username)
//          Equip = La.Equipes ;
// })

// var len = Equip.length ;
// var accounts=[] ;
// accounts.length = len ;
//         Equip.map((La1) =>{
//         accounts.length =accounts.length + La1.Team.length  ;
//         })
// var i=0;

//     Equip.map((La1) =>{
//         account.map((La) =>{
//             if(La && La1.Chef==La.username){
//                 accounts[i] = La ;
//                  i++;
//              }
//              if( La1.Team ){
//                 La1.Team.map((Team) =>{
//                     if (Team && La && Team.username==La.username) {
//                         accounts[i] = La ;
//                          i++;
//                     }                       
//                 })
//             }
//         })
//     })

    //------------------------------------------------------
    // var Profaccounts=[accounts.length] ;
    // accounts.map((acc)=>{
    //         if(acc.type=="Prof") Profaccounts=acc;
    // })
    var  LaboI =null ;
        Labo.map((La) =>{
            if(chfLabo && La.Chef==chfLabo.username)
                LaboI = La ;
        })
        var  laboid  ;
        Labo.map((La) =>{

        if(chfLabo && La.C_LAB==chfLabo.id)
            laboid = La.id ;
        })
    //     var i=0;
    //     var equip=[];

    //     Equipe.map((La) =>{
          
    //         if(La.Lab==laboid){
    //             equip.push(La);
    //             i++;
    //             equip.length=i;
    //         }
    //     })
    //     for(const element of equip) {
    //         element.Chef = "aloha ";
    //    }
    //    account.map((La) =>{
    //     // alert(La.team);
    //     equip.map((La1) =>{
    //         if(La.id==La1.C_EQ){
    //             La1.Chef=La.username;
                
    //         }
    // })
    // })
    const [name, setname] = useState('');
    const [theme, settheme] = useState('');
    const [Chef, setChef] = useState('');
    const [Lab, setLab] = useState(laboid);
    const [isPending, setIsPending] = useState(false);

    const addOne = (e) => {
        var comt = null ;
        e.preventDefault();
            account.map((eq)=>{
                if(eq.username==Chef){
                    if(eq.type=="C_EQ"){
                        if(!eq.team){
                            comt=eq;
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
            })


          Equipe.map((b)=>{if(comt.id==b.C_EQ)comt.team=b.id;})
             fetch('http://34.77.153.247:8000/api/Users/'+comt.id ,{
                                method: 'PUT', 
                                headers: {
                                            "content-type": "application/json"
                                        },
                                body: JSON.stringify(comt)
                            }).then((res) =>{
                                res.json();
                               })
         
    }

    const DeleteOne = (ID) =>{
      
        // var filtered = LaboI.Equipes.filter(function(el) { return el.Chef != ID; });
        // LaboI.Equipes=filtered;
        fetch('http://34.77.153.247:8000/api/Teams/'+ID, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload(false);
        })
}
const updateLE = (ID) => {

    account.map((eq)=>{
        if(eq.username==Chef){
            if(eq.type=="C_EQ"){
                if(!eq.team){
                    var Equip=null;
                    Equipe.map((helo)=>{if(helo.id==ID){Equip=helo;} })
                    //  const C_EQ = eq.id;
                    alert(eq.id);
                    alert(Equip.id);
                     Equip.name =name;
                     Equip.theme= theme; 
                     Equip.C_EQ=  eq.id ;
                     eq.team=Equip.id ;
                     fetch('http://34.77.153.247:8000/api/Users/'+eq.id ,{
                                method: 'PUT', 
                                headers: {
                                            "content-type": "application/json"
                                        },
                                body: JSON.stringify(eq)
                            }).then((res) =>{
                                res.json();
                               })
                
                    setIsPending(true);
                    // alert(Equip);
                    setTimeout(() => {
                        fetch('http://34.77.153.247:8000/api/Teams/'+ID,{
                            method: 'PUT',
                            headers: {"Accept": "application/json , text/plain, */*",
                                        "content-type": "application/json"
                                       },
                            body: JSON.stringify(Equip)
                        }).then((res) =>{
                            res.json();
                            setIsPending(false);
                            // window.location.reload(false);
                        }).then((data)=>console.log(data))
                    }, 10);
                }else
                alert(Chef+' is already Chef one of the equipes');
            }else
            alert(Chef+' is not Chef of equipe change him');
        }
    })
   
    // setIsPending(true);
    //         fetch('http://localhost:8002/Labo/'+ LaboI.id ,{
    //             method: 'PUT',
    //             headers: {"content-type": "application/json"},
    //             body: JSON.stringify(LaboI)
    //         }).then(() =>{
    //             setIsPending(false);
    //             window.location.reload(false);
    //         })
    

    
}
    return (
        <div className="body">
            
            <div class="popup center">
                   <div id="des" className="description">
                   <div class="icon">
                        <i class="fa fa-check"></i>
                    </div>
                    <div class="title">
                        Select one !!
                    </div>
                    <div class="dismiss-btn">
                        {/* <button id="dismiss-popup-btn" value="Labo" onClick={(e) =>{ setType(e.currentTarget.value); show_labo();}}>
                       Labo
                        </button> */}
                        {/* <button id="dismiss-popup-btn" value="Equipe" onClick={(e) =>{ setType(e.currentTarget.value);show_equipe();}}>
                        Equipe
                        </button> */}
                    </div>
                   </div>
                    {/* <div id="des1" class="description1">
                        <form autocomplete="off" onSubmit={addOne} >
                                <div>
                                <input id="elm1"type="text" placeholder="chef Labo" className="inpot" value={Chef} onChange={(e) => setChef(e.currentTarget.value)} required  />
                                    </div> 
                              <div>
                              <input id="elm2"type="text" placeholder="Title " className="inpot" value={Title} onChange={(e) => setTitle(e.currentTarget.value)} required  />
                                </div> 

                             {!isPending && <button type="submit" className="submit1">add another </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>adding..</button>}
                        </form>                     
                    </div> */}
                    <div  id="des2" class="description2">
                        <form autocomplete="off" onSubmit={addOne}>
                                <div>
                                     <input id="elm3" type="text" placeholder="Chef Equipe" className="inpot" value={Chef} onChange={(e) => setChef(e.currentTarget.value)}  required  />
                                </div> 
                                <div>
                                    <input id="elm4" type="text" placeholder="Name of Equip" className="inpot" value={name} onChange={(e) => setname(e.currentTarget.value)} required  />
                                </div> 
                                <div>
                                    <input id="elm4" type="text" placeholder="Title" className="inpot" value={theme} onChange={(e) => settheme(e.currentTarget.value)} required  />
                                </div>  
                                {/* <div className="multi_select_box">
                               <div style={{margin: '30px'}}> < Multiselect  style={{height: '100px'}}/*, {margin: '50px'}} options={accounts} displayValue="username" /></div>
                                  
                                </div> */}
                            {!isPending && <button type="submit" className="submit1">add another </button>}
                            {isPending && <button className="btn submit1" disabled><span className="spinner-grow spinner-grow-sm"></span>adding..</button>}
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
                            <button id="dismiss-popup-btn" onClick={() =>{/*alert(A);*/ DeleteOne(A)}}/*{DeleteOne(Id)}*/>
                             Yes
                            </button>
                            <button id="dismiss-popup-btn"  onClick={mixt7}>
                             No
                            </button>
                        
                        </div>
                    </div>
                    <div id="des6" class="description1">
                       <form autocomplete="off" onSubmit={()=>{updateLE(A)}} >
                               <div>
                               <input id="elm1"type="text" placeholder="new Chef " className="inpot" value={Chef} onChange={(e) => setChef(e.currentTarget.value)} required  />
                                   </div> 
                                   <div>
                                    <input id="elm4" type="text" placeholder="new Name of Equip" className="inpot" value={name} onChange={(e) => setname(e.currentTarget.value)} required  />
                                </div> 
                             <div>
                             <input id="elm2"type="text" placeholder="new Title " className="inpot" value={theme} onChange={(e) => settheme(e.currentTarget.value)} required  />
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
