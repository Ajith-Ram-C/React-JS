import React,{useState} from "react";

function Incrementt()
{
    const[increment,setIncrement]=useState(0);
    return(
        <>
        <h1>count:{increment}</h1>
        <button className="btn bg-warning m-2" onClick={()=>setIncrement(increment+1)}>increment</button>
        <button className="btn bg-danger m-2" onClick={()=>setIncrement(increment-1)}>decrement</button>
        <button className="btn bg-info m-2" onClick={()=>setIncrement(increment*0)}>Reset</button> <br/>
        {/* <input type='button' onClick={()=>setIncrement(increment+1)} value='Increment'/>
        <input type='button' onClick={()=>setIncrement(increment-1)} value='Decrement'/>
        <input type='button' onClick={()=>setIncrement(increment*0)} value='Reset'/> */}
        </> 
    );
}
export default Incrementt;