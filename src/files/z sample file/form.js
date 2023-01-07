import React from 'react';
import Dash from './dashboard';
import './form.css'

function Form()
{
    return(
        <>
        <div className='container-fluid row'>
            <div className='col-lg-6 bgd1'> </div>
            <div className='col-lg-6 n1'>
                <h1 className='col-lg-12 text-success'>ORGANIC FARM</h1>
                <h1 className='col-lg-12 text-left text-warning'>Our Promise</h1>
                <p className='col-lg-12'>How ur food is grown or raised can have a major impact on your mental and emontional
                    heakth as well as the environment
                </p>
                <input type='button' value='click' className='btn1 col-lg-2 col-sm-2 bg-warning p-2'/>
            </div>
        </div>
        </>
    )
}

export default Form;