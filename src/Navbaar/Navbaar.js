import React from 'react'
import {Link} from 'react-router-dom'


// window.addEventListener("scroll" , function(){
//     var head =document.getElementById("nav-bar");
//     var head1 =document.getElementById("bar2");
//     head.classList.toggle("sticky" , window.scrollY > 0);
//     head1.classList.toggle("sticky" , window.scrollY > 0);
// })


function Navbaar() {
    return (
        <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/#">IBnZZoHR</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/#">Acceuil</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Nos services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">Our team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="dd" ></div>

        </section>
    )
}

export default Navbaar
