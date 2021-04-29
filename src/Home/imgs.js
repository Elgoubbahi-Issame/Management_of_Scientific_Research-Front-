import React from 'react'
import I1 from './img-1.png';
import I2 from './img-2.png';
import I3 from './img-3.png';
import I4 from './img-4.png';
import I5 from './img-5.png';


function imgs() {
    return (
    <div className="imag">
        <img src={I1} alt="" className="pic1 animate__animated animate__zoomIn animate__delay-1s"/>
        <img src={I2} alt="" className="pic2 animate__animated animate__fadeInLeft animate__delay-4s"/>
        <img src={I3} alt="" className="pic3 animate__animated animate__zoomIn animate__delay-3s"/>
        <img src={I4} alt="" className="pic4 animate__animated animate__fadeInDown animate__delay-3s"/>
        <img src={I5} alt="" className="pic5 animate__animated animate__fadeInRight animate__delay-4s"/>
       
    </div>
    )
}

export default imgs
