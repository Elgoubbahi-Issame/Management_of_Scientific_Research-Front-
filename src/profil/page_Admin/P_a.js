import React from 'react'
import {mixt} from './P_SR'
import useState from 'react';
import {getId} from './Popup/PopupA';
import {addpopup1, getAiD} from './Popup/PopupP';
import { getByTestId } from '@testing-library/dom';
import { on } from './AdmPage/AdminSR';
import { addpopup } from './Popup/Popup';
export function mixt4(){
    mixt();
    document.getElementById("des").style.display = "none";
    document.getElementById("des4").style.display = "block";
    // getId(Id);
    // getAiD(Id);
    
}

function P_a({accounts}) {
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
                        <th>Username</th>
                        <th>Email </th>
                        <th>User Type </th>
                        {/* <th>Joined</th> */}
                        <th colSpan="2"><i className="las la-plus" onClick={mixt}></i></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody id="y">
                        {accounts.map((account) =>{
                            if(account.type!="ADMIN")
                            return <tr key={account.id}>
                                <td>{account.username}</td>
                                <td>{account.email}</td>
                                <td>{account.type}</td>
                                {/* <td>{account.date_joined}</td> */}
                                <td><i onClick={(e) =>{ e=account.id ; mixt4();getId(e); /*DeleteOne(e);*/} } className="las la-trash-alt"></i></td>
                                <td><i onClick={(e) =>{ e=account.id ;  document.getElementById("des").style.display = "none"; document.getElementById("des6").style.display = "block";on(); addpopup(); getId(e);}} class="las la-user-edit"></i></td>
                            </tr> ;
}
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
