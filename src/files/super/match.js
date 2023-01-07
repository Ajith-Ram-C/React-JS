import React from "react";
import Rcb from '../../images/rcb.png'
import Csk from '../../images/csk.png'
import './match.css'
import Main from'../reusable/Main';

function Match()
{
    return(
        <>
        <Main/>
        <div>
            <div className="bbg1">
                <h1 className="text">SUPER OVER LEAGUE</h1>
                <img src={Rcb}/>
                <img src={Csk}/>
            </div>
        </div>
        </>
    )
}

export default Match;