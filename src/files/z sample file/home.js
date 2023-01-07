import React from 'react';
import './home.css';
import Img from '../../images/s1.jpg';


function Home()
{
    return(
        <>
        <div className='container-fluid'>
            <img src={Img} className='img1'/>
            <div className='div1'>
            <h1 className='col-lg-6'>FRESH FOOD</h1>
            <h1 className='col-lg-6'>ORGANIC</h1>
            <p className='col-lg-6'>How ur food is grown or raised can have a major impact on your mental and emontional
                heakth as well as the environment
            </p>
            <input type='button' value='click' className='btn1 col-lg-2 col-sm-2 bg-success p-2'/>
            </div>
        </div>
        </>
    )
}

export default Home;