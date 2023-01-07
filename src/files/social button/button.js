import React from 'react';
import './button.css'
import Main from'../reusable/Main';

function Button()
{
    return(
        <>
        <Main/>
        <div className='di1'>
            <div className='div2'>
            <h1>Social Buttons</h1>
            <input type="button" value={"Like"} className='b1'/>
            <input type="button" value={"Comment"} className='b2'/>
            <input type="button" value={"Share"} className='b3'/>
            </div>
        </div>
        </>
    )
}

export default Button;