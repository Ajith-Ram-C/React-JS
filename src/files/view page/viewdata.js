import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import './viewdata.css'

function View()
{
    const[product,setProduct]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(pro=>pro.json())
        .then(data=>setProduct(data))
    },[])

    return(
        <>
        <div className="row col-lg-12 justify-content-center">
            {product.map((value,index)=>(
                <div className="card col-lg-3 m-5 ho1">
                <img className="card-img-top container" src={value.image} height='250' width='200' alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <h4 className="card-title">{value.price}</h4>
                  <p><StarRatings rating={value.rating.rate} starDimension="25px" starSpacing="10px" starRatedColor="gold"/></p>
                  <Link to={`/Details/${value.id}`}><a className="btn btn-primary">view more</a></Link>
                </div>
              </div>
            ))}
        </div>
        </>
    )
}

export default View;