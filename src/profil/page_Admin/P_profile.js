import React from 'react'
import Hel from './helmi.jpg'
import {mixt} from './P_SR'
import {getAiD} from './Popup/PopupP'


function P_profile({Admin}) {
    return (
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 mt-5 pt5">
                    <div className="row z-depth-3">
                        <div className="d-flex justify-content-center col-sm-4 bg rouded-left">
                            <div className="card-block text-center text-white">
                                <div className="wrraper">
                                    <img src={Hel} className="ism"/>
                                    <input className="myFile" type="file" />
                                </div>
                                {/* <i className="las la-user-alt la-7x mt-5"></i> */}
                                <h3 className="font-weight-bold mt-4">{Admin.username}</h3>
                                <p>{"Super "+ Admin.type}</p>
                                <i onClick={(e)=>{mixt();e=Admin.id;getAiD(e);}} class="lar la-edit la-2x mb-4"></i>
                            </div>

                        </div>
                        <div className="col-sm-8 bg-white rouded-right">
                            <h3 className="mt-3 text-center">Information</h3>
                           <div className="text-center1"> <hr className="badge-primary bg mt-0 m" /> </div> 
                            <div className="row">
                                <div className="col-sm-8">
                                    <p className="font-weight-bold">Email :</p>
                                    <h6 className="text-muted">{Admin.email}</h6>
                                </div>
                                <div className="col-sm-4">
                                    <p className="font-weight-bold">Phone :</p>
                                    <h6 className="text-muted">{Admin.phone}</h6>
                                </div>
                            </div>
                            <br/>
                            <br/>
                           {/*  <h4 className="mt-3">Projects</h4>*/}
                            <hr className=" bg" /> 
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">Prenom :</p>
                                    <h6 className="text-muted">{Admin.first_name}</h6>
                                </div>
                                <div className="col-sm-6">
                                    <p className="font-weight-bold">Nom :</p>
                                    <h6 className="text-muted">{Admin.last_name}</h6>
                                </div>
                            </div>
                            {/* <hr className=" bg" />
                            <ul className="list-unstyled d-flex justify-content-center mt-4">
                                <li><a href=""><i className="la la-facebook-f px-3 h3 bg1"></i></a></li>
                                <li><a href=""><i className="lab la-instagram px-3 h3 bg1 "></i></a></li>
                                <li><a href=""><i className="lab la-whatsapp px-3 h3 bg1 "></i></a></li>
                            </ul> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default P_profile


