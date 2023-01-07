import React from 'react';
import Dash from './dashboard';
import Img2 from '../../images/s2.jpg';
import Img3 from '../../images/s3.jpg';
import Img4 from '../../images/s4.jpeg';
import './works.css'

function Works()
{
    return(
        <>
        <div className='container-fluid bg-success'>
            <h1 className='col-lg-12 col-sm-12'>HOW ITS WORKS?</h1>
            <p className='col-lg-12 col-sm-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium, numquam voluptatum ad rerum? Alias.</p>

            <div className="card-group">
                <div className="card m-2">
                    {/* <div className="card-body"> */}
                    <img src={Img2} className='container-fluid p-1'/>
                    {/* </div> */}
                </div>
                <div className="card m-2">
                    <div className="card-body container">
                    <h5 className="card-title">Organic Farming</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium, numquam voluptatum ad rerum? Alias.</p>
                    </div>
                </div>
                <div className="card m-2">
                <img src={Img3} className='container-fluid p-1'/>
                </div>
            </div> 
            <div className="card-group">
                <div className="card m-2">
                    <div className="card-body">
                    <h5 className="card-title">Animals Husbandry</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium, numquam voluptatum ad rerum? Alias.</p>
                    </div>
                </div>
                <div className="card m-2">
                    <img src={Img4} className='container-fluid p-1'/>
                </div>
                <div className="card m-2">
                    <div className="card-body">
                    <h5 className="card-title">Arable Farming</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium, numquam voluptatum ad rerum? Alias.</p>
                    </div>
                </div>
            </div>            
        </div>
        </>
    )
}

export default Works;