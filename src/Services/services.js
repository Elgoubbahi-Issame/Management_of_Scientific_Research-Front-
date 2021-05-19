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
                       <Link to="/search" ><i class="fa fa-search"></i></Link>
                       </div>
                       <h3>Recherch</h3>
                       <p>Lorem, ipsum dolor sit amet consectetur 
                           adipisicing elit. Quia fugiat, distinction 
                           animi excepturi!</p>
                   </div>
                   <div className="col-md-6 text-center" >
                       <div className="icon">
                           <a href="#" onClick={Spopup}><i class="fa fa-sign-in" ></i></a>
                       </div>
                       <h3>Login for more</h3>
                       <p>Lorem, ipsum dolor sit amet consectetur 
                           adipisicing elit. Quia fugiat, distinction 
                           animi excepturi!</p>
                   </div>

               </di>
            </div>
        </section>
    )
}

export default services
