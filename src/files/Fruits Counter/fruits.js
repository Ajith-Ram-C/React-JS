import React, { useState } from "react";
import Img1 from '../../images/mango.jpg';
import Img2 from '../../images/ban1.png'

function Fruit()
{
    const[mango,setMango]=useState(0)
    const[banana,setBanana]=useState(0)
    return(
        <div className="bg-warning m-5 p-5">
        <h1>Bob ate <span className="text-danger">{mango}</span>   Mangoes  <span className="text-danger">{banana}</span>  Bananas</h1>
        <div className="row col-lg-12 white">
                <div className="col-lg-6">
                <img src={Img1} className='p-2 col-lg-8' height='360' width='350'/> <br/>
                <button onClick={()=>setMango(mango+1)} className='bg-primary col-lg-7 btn'>Mango</button>
                </div>
                <div className="col-lg-6">
                <img src={Img2} className='p-2 col-lg-8' height='360' width='350'/> <br/>
                <button onClick={()=>setBanana(banana+1)} className='bg-primary col-lg-7 btn'>banana</button>
                </div>
        </div>
        </div>
    )
}

export default Fruit;