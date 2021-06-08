import React from 'react'
import Hel from './helmi.jpg'
import { Link } from 'react-router-dom';
import Admin from './AdmPage/Admin';



function P_content({account ,Admin, Equipe , Labo}) {

 
  for(const element of Labo) {
      element.Chef = "";
 }
 for(const element of Equipe) {
  element.Chef = "";
}
 account.map((La) =>{
  // alert(La.team);
  Labo.map((La1) =>{
      if(La.id==La1.C_LAB){
          La1.Chef=La.username;
          
      }
})
})
account.map((La) =>{
  // alert(La.team);
  Equipe.map((La1) =>{
      if(La.id==La1.C_EQ){
          La1.Chef=La.username;
          
      }
})
})
    return (
        <main>
            <div class="cards">
            <div class="card-single">
                <div>
                <h1>{Labo.length}</h1>
                <span>Labo</span>
                </div>
                <div>
                <span class="las la-users"></span>
                </div>
            </div>

            <div class="card-single">
                <div>
                <h1>{Equipe.length}</h1>
                <span>Equipes</span>
                </div>
                <div>
                <span class="las la-users"></span>
                </div>
            </div>
          
            <div class="card-single">
                <div>
                <h1>{account.length}</h1>
                <span>Accounts</span>
                </div>
                <div>
                <span class="las la-user"></span>
                </div>
            </div>
        </div>
        <div class="recent-grid">
          <div class="projects">
            <div class="card">
              <div class="card-header">
                <h3>Recent projocts</h3>
               <Link to="/admin/Structur+de+recherche"><button>See all <span class="las la-arrow-right"></span></button></Link> 
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

                                <tr >
                                    <td>{Lab.theme}</td>
                                    <td >{Lab.Chef}</td>
                                    <td class="td-team">
                                    <div class="img-1"></div>
                                    <div class="img-2"></div>
                                    <div class="img-3"></div>
                                    </td>
                                    <td>
                                    <span class="badge
                                    success">Labo</span>
                                    </td>
                                    {/* <td><i class="las la-trash-alt"></i></td> */}
                                </tr>   
                     </tbody>           
                    ))}
                         {Equipe.map((Equip) =>  {
                              if(!Equip.Lab){
                                return <tbody id="y">
                                  <tr key={Equip.id}>
                                    <td>{Equip.theme}</td>
                                    <td>{Equip.Chef}</td>
                                    <td class="td-team">
                                      <div class="img-1"></div>
                                      <div class="img-2"></div>
                                      <div class="img-3"></div>
                                    </td>
                                    <td>
                                      <span class="badge
                                      warning">Equipe</span>
                                    </td>
                                    {/* <td><i class="las la-trash-alt"></i></td> */}
                                  </tr>
                              </tbody>;
                              }
                          }
                           
                         )
                        }

                  </table>

                </div>
              </div>
            </div>
          </div>
          <div class="customers">
            <div class="card">
              <div class="card-header">
                <h3>New Customers</h3>
                <Link to="/admin/Accounts"><button>See all <span class="las la-arrow-right"></span></button></Link>
              </div>
              <div class="card-body">
              {
                account.slice(0,3).map((account) => {

                 if(account.id!=Admin.id) {
                   return <div class="customer">
                        <div class="info">
                            <img src={Hel} width="50px" height="50px" alt="" />
                            <div>
                              <h4>{account.username}</h4>
                              <small>{account.type}</small>
                            </div>
                        </div>
                        <div class="contact">
                          <span class="las la-user-circle"></span>
                          <span class="las la-comment"></span>
                          <span class="las la-phone"></span>
                        </div>
                    </div> ;
                 }
                  
                }
                ) 
              }
              
            
                   
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default P_content
