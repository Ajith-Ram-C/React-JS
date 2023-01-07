import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import StarRatings from "react-star-ratings";

function Crypto()
{
    const[detail,setDetail]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/FEcard.json')
                .then(info=>info.json())
                .then(data=>setDetail(data))
    },[])

    return(
        <>
        <h1 className="text-danger bg-dark">CryptoCurrency</h1>
        <div className="row col-lg-12">
            {detail.map((value,index)=>(
                <div className="card col-lg-3 m-5">
                <p><StarRatings rating={value.star} starDimension="25px" starSpacing="10px" starRatedColor="gold"/></p>
                <img className="card-img-top container" src={value.image} height='250' width='200' alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <h4 className="card-title">{value.price}</h4>
                  <h3 className="card-title">{value.marketcap}</h3>
                  <a href={value.url} className="btn btn-primary">View More</a>
                </div>
              </div>
            ))}
        </div>
        </>
    );
}

export default Crypto;