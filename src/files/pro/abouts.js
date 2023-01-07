import React from "react";
import './pro.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from '@fortawesome/free-regular-svg-icons'
import {faPhone,faEnvelope,faCodeCompare,faLink} from '@fortawesome/free-solid-svg-icons'

function Proabout()
{
    return(
        <>
            <div className="pro_bgroundcer1 about">
            <div className="container-fluid pt-3">
                    <h1 className="pro_text1 pt-5">ABOUT ME</h1>
                    <div className="row col-lg-12 pt-5 container">
                        <div className="col-lg-6">
                            <div className="row col-lg-12 text-left"> 
                            <FontAwesomeIcon icon={faPhone} className='col-lg-2'/>  
                            <p className="pl-4 pb-2 col-lg-8">+91 8754997270</p>
                            <FontAwesomeIcon icon={faEnvelope} className='col-lg-2'/>  
                            <p className="pl-4 pb-2 col-lg-8">ajithram.je@gmail.com</p>
                            <FontAwesomeIcon icon={faCodeCompare} className='col-lg-2'/>  
                            <p className="pl-4 pb-2 col-lg-8">https://github.com/Ajith-Ram-C</p>
                            <FontAwesomeIcon icon={faLink} className='col-lg-2'/>  
                            <p className="pl-4 pb-2 col-lg-8">https://www.linkedin.com/in/ajith-ram-c-b198b625b/</p>


                            </div>
                        </div>

                    <div className="col-lg-6">
                    <p>A self-motivated and result-oriented individual with good technical knowledge and experience in freelance websites, banking, hardware and software services. I am interested in exploring new sectors of work and, pursued a  certification course on Full Stack Development to expand my skillset in the field of information technology to promote professional and personal growth.</p>
                    <button className="btn"><a href="https://www.canva.com/design/DAFWJkpVJQQ/JWBnoKIRgexIMmO9PJEAtA/view?utm_content=DAFWJkpVJQQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank' className="btn btn-primary">View Resume</a></button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proabout;