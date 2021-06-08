import React from 'react'
import {mixt} from './P_SR'
import useState from 'react';
import {getId} from './Popup/PopupA';
import {addpopup1, getAiD} from './Popup/PopupP';
import { getByTestId } from '@testing-library/dom';
import { on } from './ChfLboPage/ChefLaboML';
import { addpopup } from './Popup/Popup';
export function mixt4(){
    mixt();
    document.getElementById("des").style.display = "none";
    document.getElementById("des4").style.display = "block";
    // getId(Id);
    // getAiD(Id);
    
}

function P_a({account ,Equipe, Labo , ChfLb}) {
    
//    alert(ChfLb.id);
    var  laboid  ;
            Labo.map((La) =>{
            
            if(ChfLb && La.C_LAB==ChfLb.id)
                 laboid = La.id ;
        })
        var i=0;
        var equipe=[];

        Equipe.map((La) =>{
            equipe.length=i;
            if(La.Lab==laboid){
            equipe.push(La);
            i++;}
        })
//  equipe.map((La1) =>{alert(La1.id);})
       i=0;
        var accounts=[];

        account.map((La) =>{
            // alert(La.team);
            equipe.map((La1) =>{
                if(La.team==La1.id){
                    accounts.push(La);
                    i++;
                    accounts.length=i;
                }
        })
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
                <h3>New All Accounts</h3>
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
                            {/* <tr>
                                 <td>Amazal</td>
                                 <td>Amazal@gmail.com</td>
                                 <td>chef equipe</td>
                                 <td>25 May, 2021</td>
                                 <td><i className="las la-trash-alt"></i></td>
                                 <td><i class="las la-user-edit"></i></td>
                            </tr>   
                                
                            <tr>
                                 <td>Ennaji</td>
                                 <td>Ennaji@gmail.com</td>
                                 <td>chef Labo</td>
                                 <td>25 May, 2021</td>
                                 <td><i className="las la-trash-alt"></i></td>
                                 <td><i class="las la-user-edit"></i></td>
                             </tr>
                                 <tr>
                                 <td>Idbrahim</td>
                                 <td>Idbrahim@gmail.com</td>
                                 <td>prof</td>
                                 <td>25 May, 2021</td>
                                 <td><i className="las la-trash-alt"></i></td>
                                 <td><i class="las la-user-edit"></i></td>

                             </tr>
                        
                                <tr>
                                 <td>Kouti</td>
                                 <td>Kouti@gmail.com</td>
                                 <td>chef equipe</td>
                                 <td>25 May, 2021</td>
                                 <td><i className="las la-trash-alt"></i></td>
                                 <td><i class="las la-user-edit"></i></td>

                              </tr> */}
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
