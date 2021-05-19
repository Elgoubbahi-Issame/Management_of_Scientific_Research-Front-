import React from 'react'

function P_profile() {
    return (
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 mt-5 pt5">
                    <div className="row z-depth-3">
                        <div className="col-sm-4 bg rouded-left">
                            <div className="card-block text-center text-white">
                                <i className="las la-user-alt la-7x mt-5"></i>
                                <h2 className="font-weight-bold mt-4">Hilmi</h2>
                                <p>Super Admin</p>
                                <i class="lar la-edit la-2x mb-4"></i>
                            </div>

                        </div>
                        <div className="col-sm-8 bg-white rouded-right">
                            <h3 className="mt-3 text-center">Information</h3>
                           <div className="text-center1"> <hr className="badge-primary bg mt-0 m" /> </div> 
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">Email :</p>
                                    <h6 className="text-muted">abc@gmail.com</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">Phone :</p>
                                    <h6 className="text-muted">+212123456789</h6>
                                </div>
                            </div>
                            <h4 className="mt-3">Projects</h4>
                            <hr className=" bg" />
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">Recent :</p>
                                    <h6 className="text-muted">Devlop</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">bla bla :</p>
                                    <h6 className="text-muted">bla bla bla</h6>
                                </div>
                            </div>
                            <hr className=" bg" />
                            <ul className="list-unstyled d-flex justify-content-center mt-4">
                                <li><a href=""><i className="la la-facebook-f px-3 h3 bg1"></i></a></li>
                                <li><a href=""><i className="lab la-instagram px-3 h3 bg1 "></i></a></li>
                                <li><a href=""><i className="lab la-whatsapp px-3 h3 bg1 "></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default P_profile


