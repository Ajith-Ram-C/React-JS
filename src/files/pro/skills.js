import React from "react";
import './pro.css'
import html from '../../images/html.png'
import css from '../../images/css3.png'
import js from '../../images/javascript.png'
import java from '../../images/java.png'
import react from '../../images/React-icon.svg.png'
import node from '../../images/node.png'

function Proskills()
{
    return(
    <>
    <div className="container-fluid pro_bgroundsof skills pt-5">
        <h1 className="pro_text1 pt-5">TECHNICAL SKILLS</h1>
        <div className="row col-lg-12 justify-content-center psr">
        <div class="col-lg-3 m-2 p-4 bg-white psb" >
        <img src={html} className='container' height='200' width='200' alt="Card image cap"/>
        <div class="progress">
         <div class="progress-bar html" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
        </div>
        <p className="text-center pt-3"><b>HTML</b></p>
        <p>I would rate myself 4.5/5. I could able to do most of the pages in HTML with almost zero errors.</p>
        </div>

        <div class="col-lg-3 m-2 p-4 bg-white psb" >
        <img src={css} className='container' height='200' width='200'  alt="Card image cap"/>
        <div class="progress">
         <div class="progress-bar css" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
        </div>
        <p className="text-center pt-3"><b>CSS</b></p>
        <p>I almost give 4 when it comes to CSS, using CSS I can let out my creative skill.</p>
        </div>

        <div class="col-lg-3 m-2 pt-5 bg-white psb" >
        <img src={js}  height='160' width='300'  alt="Card image cap"/>
        <div className="pt-3">
        <div class="progress">
         <div class="progress-bar js" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
        <p className="text-center pt-3"><b>JAVA SCRIPT</b></p>
        <p>I carry over Frontend logics using JS, but I yet need to dig a bit deeper to get pro. So I rate 3.5.</p>
        </div>
        </div>

        <div class="col-lg-3 m-2 p-4 bg-white psb" >
        <img src={java} className='container' height='200' width='200'  alt="Card image cap"/>
        <div className="pt-3">
        <div class="progress">
         <div class="progress-bar java" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        </div>
        <p className="text-center pt-3"><b>JAVA</b></p>
        <p></p>
        </div>
        </div>

        <div class="col-lg-3 m-2 p-4 bg-white psb" >
        <img src={react} height='170' width='220'  alt="Card image cap"/>
        <div className="pt-5">
        <div class="progress">
         <div class="progress-bar react" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
        </div>
        <p className="text-center pt-3"><b>REACT JS</b></p>
        <p></p>
        </div>
        </div>

        <div class="col-lg-3 m-2 p-4 bg-white psb" >
        <img src={node} className='container' height='200' width='200'  alt="Card image cap"/>
        <div className="pt-3">
        <div class="progress">
         <div class="progress-bar node" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
        </div>
        <p className="text-center pt-3"><b>NODE JS</b></p>
        <p></p>
        </div>
        </div>
        </div>
    </div>
    </>
    );
}

export default Proskills;