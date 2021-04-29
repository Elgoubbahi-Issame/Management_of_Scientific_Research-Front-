import React from 'react'
import Me from './me1.jpg'
import Hi from './hil.jpg'
import Ja from './jan.jpg'



function Team() {
    return (
        <section id="team">
            <div className="container">
                <h1>Our Team</h1>
                <div className="row">
                    <div className="col-md-4 profile-pic text-center">
                        <div className="img-box">
                            <img src={Hi}  className="img-fluid"/>
                            <ul>
                                <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                                <a href="#"><li><i class="fa fa-instagram"></i></li></a>
                                <a href="#"><li><i class="fa fa-whatsapp"></i></li></a>
                            </ul>
                        </div>
                            <h2>Hilmi Abdelfattah</h2>
                            <h3>// Samurai</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit.
                                Id, quod non impedit.</p>
                    </div>
                    <div className="col-md-4 profile-pic text-center">
                        <div className="img-box">
                            <img src={Me}  className="img-fluid l1"/>
                            <ul>
                                <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                                <a href="#"><li><i class="fa fa-instagram"></i></li></a>
                                <a href="#"><li><i class="fa fa-whatsapp"></i></li></a>
                            </ul>
                        </div>
                            <h2>ELgoubbahi Issam</h2>
                            <h3>The Boss</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit.
                                Id, quod non impedit.</p>
                    </div>
                    <div className="col-md-4 profile-pic text-center">
                        <div className="img-box">
                            <img src={Ja}  className="img-fluid l1"/>
                            <ul>
                                <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                                <a href="#"><li><i class="fa fa-instagram"></i></li></a>
                                <a href="#"><li><i class="fa fa-whatsapp"></i></li></a>
                            </ul>
                        </div>
                            <h2>Janboubi Abderrahim</h2>
                            <h3>// Assassin</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit.
                                Id, quod non impedit.</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Team
