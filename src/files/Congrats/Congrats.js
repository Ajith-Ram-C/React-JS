import React from "react";
import profile from '../../images/congrats-card-profile-img.png'
import watch from '../../images/congrats-card-watch-img.png'
import './Congrats.css'
import Main from'../reusable/Main';

function Congrats()
{
    return(
        <>
        <Main/>
        <div className="par1">
            <div className="bgg1">
                    <h1>Congratulations</h1>
            <div className="bgg2">
                    <img src={profile}/>
                    <h1>Kiran V</h1>
                    <p>Front End Developer</p>
                    <img src={watch}/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Congrats;
