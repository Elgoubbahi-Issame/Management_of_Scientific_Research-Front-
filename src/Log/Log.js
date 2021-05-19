import React from 'react';
import './log.css';


export function Cpopup(){
    document.querySelector('.Log_sin').classList.add('hide');
    document.querySelector('.content').classList.add('hide');
    document.body.style.overflowY = '';
    document.getElementById('dd').classList.remove('dbab');

}
export function Spopup(){
    document.body.style.overflowY = 'hidden';
    document.querySelector('.Log_sin').classList.remove('hide');
    document.querySelector('.content').classList.remove('hide');
    document.getElementById('dd').classList.toggle('dbab');

   
}

function Log() {
    return (
        <div className="Log_sin hide" id="Log_sin-1">
            <i className="fa fa-window-close cls" onClick={Cpopup}></i>

            <div className="disin">
                <div id="id1"></div>
                    <a class="navbar-brand" href="#">IBnZZoHR</a>
                    {/* <button className="Log_sin1" >Log In</button> */}
            </div>
            {/* <div className="social">
                <i className="fa fa-facebook" ></i>
                <i className="fa fa-whatsapp"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter"></i>
            </div>  */}
             <form id="My2" className="MyInfo2">
                <div className="textpo">
                    <i class="fa sa fa-at"></i>
                    <input type="email" placeholder="Email adress" className="inpooo"  required  />
                </div>
                <div className="textpo">
                    <i class="fa sa fa-lock"></i> 
                    <input type="password" placeholder="mote de passe" className="inpooo"  required  />
                  </div> 
                {/* <br /> <br /> <br />  <br /> */}
               {/* <input type="checkbox"  className="check" /><span>Remember your password</span> */}
                <button type="submit" className="submit" >Log In</button>
             
            </form> 

               
        </div>
    )
}
export default Log;
