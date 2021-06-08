import React from 'react'
// import Hel from './helmi.jpg'
import {change} from '../profil/page_Admin/P_SR'
// 


function contentSR({Equipe ,Labo,account}) {
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
  <div className="col-8 ">
    <div class="recent-grid1">
          <div class="projects">
            <div class="card">
              <div class="card-header text-center">
                <h3>Recent projocts</h3>
               {/* <Link to="/admin/Structur+de+recherche"><button>See all <span class="las la-arrow-right"></span></button></Link>  */}
              </div>
              <div class="card-body">
                  <div class="table-responsive">
                  <table width="100%" className="text-center">
                    <thead className="text-center">
                      <tr>
                        <th>Labo/Equipe Title </th>
                        <th>Chef of Labo/Equipe </th>
                        <th>Team </th>
                        <th>Type</th>
                        {/* <th><i class="las la-plus" onclick="addd()"></i> </th> */}
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
                                                        {/* <td><i onClick={(e,a) =>{ e=Lab.id ;a="Labo" ; mixt5(e,a);}} className="las la-trash-alt"></i></td> */}
                                                        {/* <td><i onClick={(e,a) =>{ e=Lab.id ;a="Labo";getID(e);getType(a); mixt();document.getElementById("des").style.display = "none"; document.getElementById("des6").style.display = "block";}} className="las la-user-edit"></i></td> */}
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
                            {/* <td><i onClick={(e,a) =>{ e=Equip.id ;a="Equipe" ; mixt5(e,a);}} className="las la-trash-alt"></i></td>
                            <td><i onClick={(e,a) =>{e=Equip.id ;a="Equipe";getID(e);getType(a); mixt();document.getElementById("des").style.display = "none"; document.getElementById("des6").style.display = "block";}} className="las la-user-edit"></i></td> */}

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
         
   </div>
      //   <main>
           
        
        
      // </main>
    )
}

export default contentSR
