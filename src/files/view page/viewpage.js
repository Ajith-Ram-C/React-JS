import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

function Details()
{
    const[product,setProduct]=useState([])
    const{id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);

    return(
        <>
        <div className="row col-lg-12">
            <div className="col-lg-6 p-5">
            <img className="container col-lg-8" src={product.image} alt="Card image cap"/>
            </div>
            <div className="col-lg-6 p-5">
                <h1 className="text-left col-lg-12 p-1">{product.title}</h1>
                <h3 className="text-left col-lg-12 p-1 text-info">{product.category}</h3>
                <p className="text-left col-lg-12 p-1">{product.description}</p>
                <h1 className="text-left col-lg-12 p-1 ">$ {product.price}</h1>
                <input type="button" className="btn btn-primary m-1" value="Buy Now"/>
                <input type="button" className="btn btn-warning m-1" value="Add Card"/>
                <input type="button" className="btn btn-success m-1" value="Add To Favourite"/>
                {/* <p><StarRatings rating={product.rating.rate} starDimension="25px" starSpacing="10px" starRatedColor="gold" className="text-left col-lg-12 p-1"/></p> */}
            </div>
        </div>
        </>
    )
}

export default Details;