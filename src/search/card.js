import React from 'react'
import Hil from './hil.jpg'

function card() {
    return (
        <div className="row main-row p-2">
        <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="blog-img">
                <img src={Hil} className="img-fluid" />
            </div>
            <div className="row">
                <div className="col-sm-12 mb-2">
                    <ul className="list-group list-group-horizontal ul-cls">
                        <li className="list-goup-item"><i className="fa fa-github fa-2x" aria-hidden="true"></i></li>
                        <li className="list-goup-item"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
                        <li className="list-goup-item"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="blog-title mb-3">
                <h3>bla bla bla</h3>
            </div>
            <div className="blog-date mb-2">
                <span>Wednesday</span>
                <span>  May 4 2021</span>
            </div>
            <div className="blog-desc mb-2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque debitis molestias esse neque commodi officia similique 
                    cupiditate corrupti deserunt fuga, nesciunt totam reiciendis 
                    inventore! Voluptate, 
                    doloremque? Aspernatur veniam accusamus dolores?
                </p>
            </div>
            <div className="blog-read-more mb-2">
                <button className="btn btn-outline-dark">Read More</button>
            </div>
        </div>

    </div>
    )
}

export default card
