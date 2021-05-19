import React, { Component } from 'react';
import Pc from '../P_content';


import Pn from '../P_nav';
import '../P_style.css';
import { Link} from 'react-router-dom';

class Admin extends Component{
    value="Home";
    render(){ 
  
    return (
       
            
        <div>
            
            
            <input type="checkbox" id="nav-togl" />
        
            <div className="sidebar" id="bar">
            <div className="sidebar-brand">
                <h2 >
                <span id="bar7">IBnZZoHR</span>
                </h2>
                
            </div>
            <div className="sidebar-menu">
                <ul>
                <li><Link to="/admin" id="bar3" className="active" ><span className="las la-home"></span><span > Home</span></Link></li>
                <li><Link to="/admin/profile" id="bar4" ><span className="las la-user-alt"></span><span > Profile</span></Link></li>
                <li><Link to="/admin/Structur+de+recherche" id="bar5"><span className="las la-clipboard-list"></span><span > Structur de recherche</span></Link></li>
                <li><Link to="/admin/Accounts"  id="bar6"><span className="las la-user-circle"></span><span > Accounts</span></Link></li>
                </ul>
            </div>
            </div>
            <div class="main-content" id="bar1">
                <Pn valur={this.value}/>
              
                <Pc />
            </div>
            
        </div>
      
    )
}
}
export default Admin
