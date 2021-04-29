import React from 'react'

function contact() {
    return (
       <section id="contact">

           <div className="container">
               <h1>Contact Nous</h1>
               <div className="row">
                   <div className="col-md-6">
                       <form action="" className="contact-form">
                            <div className="form-group">
                                <input placeholder="Nom" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input placeholder="Email" type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input placeholder="Sujet" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Message ..." type="text" row="4" className="form-control"/>
                            </div>
                            <button type="submit" className="btns btn-primary">Envoyer</button>
                       </form>
                   </div>
                   <div className="col-md-6 contact-info">
                       <div className="follow"><b>Address : </b><i class="fa fa-map-marker"></i> ------------ </div>
                       <div className="follow"><b>Phone : </b><i class="fa fa-phone"></i> +212 12345678 </div>
                       <div className="follow"><b>Email : </b><i class="fa fa-envelope-o"></i> abc@gmail.com </div>
                       <div className="follow"><label><b>Social : </b></label>
                             <a href=""><i class="fa fa-facebook"></i></a>
                             <a href=""><i class="fa fa-whatsapp"></i></a>
                             <a href=""><i class="fa fa-instagram"></i></a>
                             <a href=""><i class="fa fa-linkedin"></i></a>
                             <a href=""><i class="fa fa-twitter"></i></a>
                        </div>

                   </div>
               </div>
           </div>
       </section>
       
    )
}

export default contact
