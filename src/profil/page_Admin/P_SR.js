import React, { Component }  from 'react'
import { addpopup }  from './Popup/Popup'
import { on }  from './AdmPage/AdminSR'
import { getID , getType } from './Popup/Popup';
import {  } from './Popup/PopupA';
import { $ } from 'jquery';
import UseFetch from './AdmPage/useFetch'


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
   
   function  P_SR({Equipe ,Labo,account}){


     for(const element of Labo) {
            element.Chef = "";
            }
       
        Labo.map((La2) =>{
            // alert(La.team);
            account.map((La3) =>{
                if(La3.id==La2.C_LAB && La3.type=="C_LAB"){
                    La2.Chef=La3.username;
                    
                }
             })
            
        })
        for(const element of Equipe) {
            element.Chef = "";
            }
       
        Equipe.map((La2) =>{
            // alert(La.team);
            account.map((La3) =>{
                if(La3.id==La2.C_EQ && La3.type=="C_EQ"){
                    La2.Chef=La3.username;
                }
             })
            
        })

       var A =0;
     var  i= 0 ;

     var len = null;
     len = Equipe.lenght;

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
                            <th colSpan="2"><i className="las la-plus" onClick={mixt}></i> </th>
                            <th></th>
                        </tr>
                        </thead>
                        


                               {Labo.map((Lab) =>(
                                          <tbody id="y">
                                                    <tr  onClick={change} id={Lab.id} className="panel-title" data-toggle="collapse" href={"#collapse"+Lab.id}>
                                                        <td> {Lab.theme}</td>
                                                        <td>{Lab.Chef}</td>
                                                        <td className="td-team1">
                                                        <div className="img-1"></div>
                                                        <div className="img-2"></div>
                                                        <div className="img-3"></div>
                                                        </td>
                                                        <td>
                                                        <span className="badge
                                                        success">Labo</span>
                                                        </td>
                                                        <td><i onClick={(e,a) =>{ e=Lab.id ;a="Labo" ; mixt5(e,a);}} className="las la-trash-alt"></i></td>
                                                        <td><i onClick={(e,a) =>{ e=Lab.id ;a="Labo";getID(e);getType(a); mixt();document.getElementById("des").style.display = "none"; document.getElementById("des6").style.display = "block";}} className="las la-user-edit"></i></td>
                                                    </tr>
                                                    {/* if(Lab.Equipes){ */}
                                                        {/* {()=>{var i =}} */}
                                                    {A=0,i=0, Equipe.map((Equip) =>{
                                                       i++;
                                                    if( Equip.Lab==Lab.id){
                                                        A++;
                                                    return <tr key={Equip.id} id={"collapse"+Lab.id} className="panel-collapse collapse">
                                                        <td><div>{Equip.theme}</div></td>
                                                        <td><div>{Equip.Chef}</div></td>
                                                        <td className="td-team1">
                                                        <div className="img-1"></div>
                                                        <div className="img-2"></div>
                                                        <div className="img-31">more</div>
                                                        </td>
                                                        <td><div>
                                                        <span className="badge
                                                        warning">Equipe</span>
                                                        </div></td>
                                                    </tr>;  
                                                    
                                                    }
                                                    // alert(i+'--------'+A+'---------'+len)
                                                    if(A==0 && len==i)return <tr id={"collapse"+Lab.id} col className="text-center panel-collapse collapse"><td colSpan="4"> there's nothing here</td></tr>;
                                                })
                                                }
                                              
                                                 </tbody> 
                                         ))} 
                                       
                                               
                                                  
                            {Equipe.map((Equip) =>  {
                              if(!Equip.Lab){
                             return <tbody id="y">
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
                            <td><i onClick={(e,a) =>{ e=Equip.id ;a="Equipe" ; mixt5(e,a);}} className="las la-trash-alt"></i></td>
                            <td><i onClick={(e,a) =>{e=Equip.id ;a="Equipe";getID(e);getType(a); mixt();document.getElementById("des").style.display = "none"; document.getElementById("des6").style.display = "block";}} className="las la-user-edit"></i></td>

                        </tr>
                        </tbody>;
                              }}
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
