import React from "react";
import Dash from "./dashboard";
import './organicfood.css'

function Organicfood()
{
    return(
        <>
        <div className="container-fluid row">
            <div className='col-lg-6 n1'>
                <h1 className='col-lg-12 text-success'>Organic FARMING</h1>
                <h1 className='col-lg-12 text-left text-warning'>Of Organicfood</h1>
                <p className='col-lg-12'>How ur food is grown or raised can have a major impact on your mental and emontional
                    heakth as well as the environment
                </p>
                <input type='button' value='click' className='btn1 col-lg-2 col-sm-2 bg-warning p-2'/>
            </div>
            <div className="col-lg-6 bgd4">

            </div>
        </div>
        </>
    )
}

export default Organicfood;