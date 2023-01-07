import React from "react";
import {Link as Linkroll} from 'react-router-dom';
import pro1 from '../../images/aji.JPG'
import pro2 from '../../images/pro2.gif'
import './pro.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Proskills from "./skills";
import Procerti from "./certificate";
import Proproject from "./project";
import { Link } from "react-scroll";

function Mainpro()
{
    return(
        <div className="container-fluid pro_bground home">
            
        <nav class="navbar navbar-expand-lg navbar-light pmn fixed-top">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav3">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link spy={true} smooth={true} duration={1000} to='home' className="btn pro1">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link spy={true} smooth={true} duration={1000} to='education' className="btn pro1">Education</Link>
                    </li>
                    <li class="nav-item">
                    <Link spy={true} smooth={true} duration={1000}  to='skills' className="btn pro1">Skills</Link>
                    </li>
                    <li class="nav-item">
                    <Link spy={true} smooth={true} duration={1000}  to='certificate' className="btn pro1">Certificate</Link>
                    </li>
                    <li class="nav-item">
                    <Link  spy={true} smooth={true} duration={1000} to='about' className="btn pro1">About</Link>
                    </li>
                    <li class="nav-item">
                    <Linkroll to='/Crypto' className="btn pro1">Project</Linkroll>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container-fluid" id="profile">
            <div className="pro_bgroun1 pt-5">
                <div className="row">
                    <div className="col-lg-12 pt-5">
                        <img src={pro1} height='270' width='270' className='rounded-circle' />
                    </div>
                    <div className="col-lg-12 p-3 pro_text">
                        <h1>AJITH RAM</h1>
                        <h3>Completed FullStack Developer</h3>
                    </div>
                </div>
            </div>
        </div>
        {/* <Proskills/>
        <Procerti/>
        <Procerti/>
        <Proproject/> */}
        </div>    
    )
}
export default Mainpro;