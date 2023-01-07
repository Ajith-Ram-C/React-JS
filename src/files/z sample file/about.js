import React from 'react';
import Dash from './dashboard';
import './about.css';
import Img5 from '../../images/s5.jpg'
import Img6 from '../../images/s6.jpg'
import Img7 from '../../images/s7.jpg'
import Img8 from '../../images/s8.jpg'

function About()
{
    return(
        <>
        <div className='container-fluid p-5 col-lg-12 col-sm-12 bgd2'>
                <h1>ABOUT OUT FARM</h1>
                <p>How ur food is grown or raised can have a major impact on your mental and emontional
                    heakth as well as the environment</p>
                    <div className="card-group col-sm-12">
                    <div className="card m-2">
                        <div className="card-body">
                        <h5 className="card-title">VEGETABLES</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <img src={Img5} className='img3 col-sm-12 d-flex'/>
                        </div>
                    </div>
                    <div className="card m-2">
                        <div className="card-body">
                        <h5 className="card-title">HOW IT WORKS</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <img src={Img6} className='img3  col-sm-12 d-flex'/>
                        </div>
                    </div>
                    <div className="card m-2">
                        <div className="card-body">
                        <h5 className="card-title">FLEXIBILITY</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <img src={Img7} className='img3  col-sm-12 d-flex'/>
                        </div>
                    </div>
                    <div className="card m-2">
                        <div className="card-body">
                        <h5 className="card-title">FARM PRODUCTS</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <img src={Img8} className='img3 col-sm-12  d-flex'/>
                        </div>
                    </div>
                    </div>

        </div>
        </>
    )
}

export default About;

// {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
