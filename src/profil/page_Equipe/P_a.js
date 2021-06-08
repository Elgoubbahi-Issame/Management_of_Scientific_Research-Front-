import React from 'react'
import {mixt} from './P_SR'
import useState from 'react';
import {getId} from './Popup/PopupA';
import {addpopup1, getAiD} from './Popup/PopupP';
import { getByTestId } from '@testing-library/dom';
// import { addOneToEquip1 } from './Popup/PopupA';
import { on } from './ChfEquipePage/ChefEquipeME';
import { addpopup } from './Popup/Popup';
export function mixt4(){
    mixt();
    document.getElementById("des").style.display = "none";
    document.getElementById("des4").style.display = "block";
    // getId(Id);
    // getAiD(Id);
    
}

function P_a({account ,Equipe, ChfEq}) {
    const addOneToEquip1 = (ID) =>{

        var accounts=null;
        account.map((helo)=>{

            if(helo.id==ID){accounts=helo;}
            // else alert('kztik')
        })
        accounts.team=ChfEq.team;
        // accounts.type="PROF";  
        accounts.password="0"; 
     
        setTimeout(() => {
            fetch('http://34.77.153.247:8000/api/Users/'+ ID,{
                method: 'PUT',
                headers: {"content-type": "application/json"},
                body: JSON.stringify(accounts)
                
            }).then((res) =>{
                res.json();
                window.location.reload(false);
            })
  
        }, 100);

        
    }
//    alert(ChfLb.id);
    var  Equipid  ;
            Equipe.map((La) =>{
            
            if(ChfEq && La.C_EQ==ChfEq.id)
                 Equipid = La.id ;
        })
    //  
       var i=0;
        var accounts=[];

        account.map((La) =>{
            // alert(La.team);
            // equipe.map((La1) =>{
                if(La.team==Equipid && La.id!=ChfEq.id){
                    accounts.push(La);
                    i++;
                    accounts.length=i;
                }
      
        })
        //  accounts.map((La1) =>{alert(La1.id)})

// alert(accounts[0].username);

        // var len = equip.length ;
        // var accounts=[] ;
        // accounts.length = len ;
        //         equip.map((La1) =>{
        //         accounts.length =accounts.length + La1.Team.length  ;
        //         })
        // var i=0;
      
        //     equip.map((La1) =>{
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
  
    // const accounts = props.accounts;
    //  const iD = null; 
    //  const [e , setE] = useState(null); 
     
    
    // const DeleteOne = (Id) =>{
       
    //     fetch('http://localhost:8000/accounts/'+ Id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         window.location.reload(false);
    //     })
    // }
    return (

        <div className="container ">

        <div className="projects1">
            <div className="card">
            <div className="card-header text-center">
                <h3>All Accounts</h3>
                {/* <button>See all <span className="las la-arrow-right"></span></button> */}
            </div>
            <div className="card-body">
                <div className="table-responsive">
                <table width="100%" className="text-center">
                    <thead className="text-center">
                    <tr>
                        <th>Name</th>
                        <th>Email </th>
                        <th>User Type </th>
                        {/* <th>Joined</th> */}
                        <th colSpan="2"><i className="las la-plus" onClick={mixt}></i></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody id="y">
                        {accounts.map((account) =>(
                            <tr key={account.id}>
                                <td>{account.username}</td>
                                <td>{account.email}</td>
                                <td>{account.type}</td>
                                {/* <td>{account.date_joined}</td> */}
                                <td><i onClick={(e) =>{ e=account.id ; mixt4();getId(e); /*DeleteOne(e);*/} } className="las la-trash-alt"></i></td>
                                <td><i onClick={(e) =>{ e=account.id ; getId(e); document.getElementById("des").style.display = "none"; document.getElementById("des6").style.display = "block";on(); addpopup(); getAiD(e);}} class="las la-user-edit"></i></td>
                            </tr> 
                        )
                        )}
                           
                    </tbody>
                </table>

                </div>
            </div>
            </div>
            </div>


            <div className="projects1">
            <div style={{margin:"70px 0px"}} className="card">
            <div className="card-header text-center">
                <h3>Available All Accounts</h3>
                {/* <button>See all <span className="las la-arrow-right"></span></button> */}
            </div>
            <div className="card-body">
                <div className="table-responsive">
                <table width="100%" className="text-center">
                    {/* <thead className="text-center">
                    <tr>
                        <th>Name</th>
                        <th>Email </th>
                        <th>User Type </th>
                        {/* <th>Joined</th> */}
                      {/*  <th colSpan="2"><i className="las la-plus" onClick={mixt}></i></th>
                        <th></th>
                    </tr>
                    </thead> */}
                    <tbody id="y">
                        {account.map((acc) =>{
                            if(!acc.team && acc.type=="PROF") return <tr key={acc.id}>
                                <td>{acc.username}</td>
                                <td>{acc.email}</td>
                                <td>{acc.type}</td>
                                {/* <td>{acc.date_joined}</td> */}
                                {/* <td><i onClick={(e) =>{ e=acc.id ; mixt4();getId(e); } } className="las la-trash-alt"></i></td> */}
                                
                            <td colSpan="2"><i className="las la-plus" onClick={(e)=>{e=acc.id ; addOneToEquip1(e);}}></i></td>
                                {/* <td><i onClick={(e) =>{ e=acc.id ; getId(e); document.getElementById("des").style.display = "none"; document.getElementById("des6").style.display = "block";on(); addpopup(); getAiD(e);}} class="las la-user-edit"></i></td> */}
                            </tr> ;
                        }
                        )}
                        </tbody>
                </table>

                </div>
            </div>
            </div>
        </div>
    </div>
   
   
    )
}

export default P_a
