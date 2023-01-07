import React from "react";
import Dash from "./dashboard";
import './products.css'
import Img9 from '../../images/s9.jpg'
import Img10 from '../../images/s10.jpg'
import Img11 from '../../images/s11.jpg'

function Products()
{
    return(
        <>
        <div className="container-fluid p1 bg-info col-sm-12">
            <div className="card-deck">
            <div className="card">
                <div className="card-body col-sm-12">
                <img src={Img11} className='rounded-circle p-2 container'/>
                <h5 className="card-title">Fresh Fruits</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                
                </div>
            </div>
            <div className="card">
                <div className="card-body col-sm-12">
                <img src={Img11} className='rounded-circle p-2 container'/>
                <h5 className="card-title">Vegetable</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body col-sm-12">
                <img src={Img11} className='rounded-circle p-2 container'/>
                <h5 className="card-title">Fruits</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Products;