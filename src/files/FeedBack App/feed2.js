import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import './feed.css'

function Emoji2()
{
    return(
        <div className="container-fluid bg-success p-5 mt-5">
            <div className="col-lg-12 bg-white f3 p-4">
                <div className="col-lg-12 col-sm-12 p-5 mt-5">
                <FontAwesomeIcon icon={faHeart} className='text-danger col-sm-12 col-lg-12 f2'/>
                <h1 className="col-lg-12 col-sm-12">Thank You</h1>
                <p className="col-lg-12 col-sm-12">We will use your feedback to improve our customer support performance</p>
                </div>
            </div>        
        </div>
    );
}

export default Emoji2;