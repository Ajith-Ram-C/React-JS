import React from "react";
import './pro.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Hcj from '../../images/hcj.jpg'
import Java from '../../images/java.jpg'
import Js from '../../images/js.jpg'
import Sc from '../../images/scratch.jpg'
import StarRatings from "react-star-ratings";

function Procerti()
{
    return(
    <div className="pro_bgroundcer container-fluid certificate pt-3">
        <h1 className="pro_text1 pt-5">CERTIFICATE'S</h1>
        <div className="row col-lg-12 justify-content-center">
        {/*    <div className="col-lg-5 p-5">
                <img src={Hcj} className='container'/>
                <h4 className="c-t1 pt-2">Coursera Certificate</h4>
                <h1>HTML, CSS, and Javascript for Web Developers</h1>
            </div>
            <div className="col-lg-5 p-5">
                <img src={Java} className='container'/>
                <h4 className="c-t1 pt-2">Coursera Certificate</h4>
                <h1>Java Classes and Objects</h1>
            </div>
            <div className="col-lg-5 p-5">
                <img src={Js} className='container'/>
                <h4 className="c-t1 pt-2">Coursera Certificate</h4>
                <h1>Programming with JavaScript</h1>
            </div>
            <div className="col-lg-5 p-5">
                <img src={Sc} className='container'/>
                <h4 className="c-t1 pt-2">Coursera Certificate</h4>
                <h1>Programming with Scratch</h1>
            </div>
        </div> */}
             
             <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img className="d-block container" src={Hcj} />
                    </div>
                    <div class="carousel-item">
                    <img className="d-block container" src={Java} />
                    </div>
                    <div class="carousel-item">
                    <img className="d-block container" src={Js} /> 
                    </div>
                    <div class="carousel-item">
                    <img className="d-block container" src={Sc} /> 
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    </div>
    );
}

export default Procerti;

{/* <div class="carousel-item">
                <img className="d-block container" src={Hcj} />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Coursera Certificate</h5>
                    <p>HTML, CSS, and Javascript for Web Developers</p>
                </div>
</div> */}