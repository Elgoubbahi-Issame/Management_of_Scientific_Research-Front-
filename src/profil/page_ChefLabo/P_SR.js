import React, { Component }  from 'react'
import { useState }  from 'react'
import { addpopup }  from './Popup/Popup'
import { on }  from './ChfLboPage/ChefLaboML'
import { getID , getType } from './Popup/Popup';
import {  } from './Popup/PopupA';
import { $ } from 'jquery';
import useFetch from './ChfLboPage/useFetch'
import {show_equipe} from './Popup/Popup'


export function mixt(){
    on();
    addpopup();

}
function mixt5(Id , Type){
    mixt();
    document.getElementById("des").style.display = "none";
    document.getElementById("des3").style.display = "block";
    getID(Id);
    getType(Type);
}
// export class P_SR extends Component {
  export function change(e){
        // alert(e.currentTarget.id);
            document.getElementById(e.currentTarget.id).classList.toggle('chng');
            // document.querySelector('.collapse').classList.toggle('active1');
    }
   
   function  P_SR({chfLabo,Equipe,account,Labo}){
    //    alert(chfLabo.id)
 
        //  alert(Equipe[0].id);
        var  laboid  ;
        Labo.map((La) =>{

        if(chfLabo && La.C_LAB==chfLabo.id)
            laboid = La.id ;
        })

        var i=0;
        var equip=[];

        Equipe.map((La) =>{
          
            if(La.Lab==laboid){
                equip.push(La);
                i++;
                equip.length=i;
            }
        })
        for(const element of equip) {
            element.Chef = "";
       }
       account.map((La) =>{
        // alert(La.team);
        equip.map((La1) =>{
            if(La.id==La1.C_EQ && La.type=="C_EQ"){
                La1.Chef=La.username;
                
            }
    })
    })

        // alert(equip[0].Chef);
    return (
        <div className="container ">

            <div className="projects1">
                <div className="card">
                <div className="card-header text-center">
                    <h3>Recent projocts</h3>
                    {/* <button>See all <span className="las la-arrow-right"></span></button> */}
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <table width="100%" className="text-center">
                        <thead className="text-center">
                        <tr>
                            <th>Labo/Equipe Title </th>
                            <th>Chef of Labo/Equipe </th>
                            <th>Team </th>
                            <th>Type</th>
                            <th><i className="las la-plus" onClick={()=>{show_equipe(); mixt();}}></i> </th>
                            <th></th>
                        </tr>
                        </thead>
                        

                         {equip.map((Equip) =>(
                             <tbody id="y">
                            <tr key={Equip.id}>
                            <td>{Equip.theme}</td>
                            <td>{Equip.Chef}</td>
                        
                            <td className="td-team1">
                            <div className="img-1"></div>
                            <div className="img-2"></div>
                            <div className="img-3"></div>
                            </td>
                            <td>
                            <span className="badge
                            warning">Equipe</span>
                            </td>
                            <td><i onClick={(e,a) =>{ e=Equip.id ;a=Equip.Type ; mixt5(e,a);}} className="las la-trash-alt"></i></td>
                            <td><i onClick={(e,a) =>{ e=Equip.id ;a=Equip.Type;getID(e);getType(a); mixt();document.getElementById("des").style.display = "none"; document.getElementById("des6").style.display = "block";}} className="las la-user-edit"></i></td>

                        </tr>
                        </tbody>
                        )
                        )}
                                  
                    </table>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default P_SR
