import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFaceSmile,faFaceSadTear,faFaceFlushed} from '@fortawesome/free-regular-svg-icons'
import './feed.css'

function Emoji()
{
    return(
        <div className="container-fluid p-2 bg-success">          
            <div className="container col-lg-6 bg-white f5">
            <h1>How satisfied are you with our customer support performance</h1>
            <div className="row col-lg-12 p-2 text-center">
            <div className="col-lg-4">
            <Link to='/Emoji2' className="m-3">
                <FontAwesomeIcon icon={faFaceSmile} className='text-warning f1'/>
                <h4 className="text-primary">Smile</h4>
            </Link>
            
            </div>
            <div className="col-lg-4">
            <Link to='/Emoji2' className="m-3">
                <FontAwesomeIcon icon={faFaceSadTear} className='text-warning f1'/>
                <h4 className="text-primary">Sad</h4>
            </Link>
            </div>
            <div className="col-lg-4">
            <Link to='/Emoji2' className="m-3">
                <FontAwesomeIcon icon={faFaceFlushed} className='text-warning f1'/>
                <h4 className="text-primary">None</h4>
            </Link>
            </div>
            </div>
            </div>        
        </div>
    );
}

export default Emoji;