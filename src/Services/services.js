import React from 'react'
import {Spopup} from '../Log/Log'
// import Sear from '../search/Search'
import {Link} from 'react-router-dom'

function services() {
    return (
        // <section id="services" className="animate__animated animate__fadeInDown animate__delay-1s*/">
        <section id="services">
            {/* <div className="container animate__animated animate__zoomIn animate__delay-3s"> */}
            <div className="container">
                <h1>Our Services</h1>
               <di className="row services">
                   <div className="col-md-6 text-center">
                       <div className="icon">
                       <Link to="/search/articles" ><i onClick={()=>{document.querySelector(".App").classList.add('doo');}} class="fa fa-search"></i></Link>
                       </div>
                       <h3>Recherche</h3>
                       <p> Trouver tous les membres ou articles</p>
                   </div>
                   <div className="col-md-6 text-center" >
                       <div className="icon">
                           <a href="#" onClick={Spopup}><i class="fa fa-sign-in" ></i></a>
                       </div>
                       <h3>Connectez-vous</h3>
                       <p>Pour en savoir plus</p>
                   </div>

               </di>
            </div>
        </section>
    )
}

export default services
