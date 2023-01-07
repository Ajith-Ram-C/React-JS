import React from "react";
import {Link} from 'react-router-dom';

export default function Dash()
{
    return(
        <>
        <div className="d-flex flex-row bg-light justify-content-end">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                <Link to='/Home' className="m-3">Home</Link>
                </li>
                <li class="nav-item">
                <Link to='/Works' className="m-3">Works</Link>
                </li>
                <li class="nav-item">
                <Link to='/Form' className="m-3">Form</Link>
                </li>
                <li class="nav-item">
                <Link to='/About' className="m-3">About</Link>
                </li>
                <li class="nav-item">
                <Link to='/Testimonial' className="m-3">Testimonial</Link>
                </li>
                <li class="nav-item">
                <Link to='/Organicfood' className="m-3">Organicfood</Link>
                </li>
                <li class="nav-item">
                <Link to='/Products' className="m-3">Products</Link>
                </li>
                <li class="nav-item">
                <Link to='/Responce' className="m-3">Responce</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
        </>    
    );
}


