import React from 'react'
window.addEventListener("scroll" , function(){
    var header =document.getElementById("nav-bar");
    header.classList.toggle("sticky" , window.scrollY > 0);
})


function Navbaar() {
    return (
        <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">IBnZZoHR</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Acceuil</a>
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
        </section>
    )
}

export default Navbaar
