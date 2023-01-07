import React from "react";
import {Link} from 'react-router-dom';

function Main()
{
    return(
        <>
            <div className="d-flex col-lg-12 justify-content-center bg-info">
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav1">
                <ul class="navbar-nav">
                {/* <li class="nav-item">
                <Link to='/Hello' className="m-3 text-danger">Hello</Link>
                </li> */}
                {/* <li class="nav-item">
                <Link to='/Congrats' className="m-3 text-danger">CongratsCard</Link>
                </li> */}
                {/* <li class="nav-item">
                <Link to='/Match' className="m-3 text-danger">Match</Link>
                </li> */}
                {/* <li class="nav-item">
                <Link to='/Button' className="m-3 text-danger">Button</Link>
                </li> */}
                <li class="nav-item">
                <Link to='/Notification' className="m-3 text-danger">Notification</Link>
                </li>
                <li class="nav-item">
                <Link to='/Login' className="m-3 text-danger">Login</Link>
                </li>
                <li class="nav-item">
                <Link to='/Card' className="m-3 text-danger">Card</Link>
                </li>
                <li class="nav-item">
                <Link to='/Responce' className="m-3 text-danger">Single page view</Link>
                </li>
                <li class="nav-item">
                <Link to='/Emoji' className="m-3 text-danger">FeedBack</Link>
                </li>
                {/* <li class="nav-item">
                <Link to='/Fruit' className="m-3 text-danger">Fruits</Link>
                </li> */}
                {/* <li class="nav-item">
                <Link to='/Incrementt' className="m-3 text-danger">Increment</Link>
                </li> */}
                {/* <li class="nav-item">
                <Link to='/Dates' className="m-3 text-danger">Date</Link>
                </li> */}
                <li class="nav-item">
                <Link to='/Crypto' className="m-3 text-danger">Crypto</Link>
                </li>
                <li class="nav-item">
                <Link to='/View' className="m-3 text-danger">View</Link>
                </li>
                <li class="nav-item">
                <Link to='/' className="m-3 text-danger">Portfolio</Link>
                </li>
                </ul>
            </div>
            </nav>
            </div>
        </>    
    )
}
export default Main;