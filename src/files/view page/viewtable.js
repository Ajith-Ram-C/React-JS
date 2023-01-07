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
                <table>
                    <tr>
                        <th>{value.title}</th>
                    </tr>
                    <tr>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                    </tr>
                </table>
            ))}
        </div>
        </>
    )
}

export default View;

{/* <p><StarRatings rating={value.rating.rate} starDimension="25px" starSpacing="10px" starRatedColor="gold"/></p>
<Link to={`/Details/${value.id}`}><a className="btn btn-primary">view more</a></Link> */}