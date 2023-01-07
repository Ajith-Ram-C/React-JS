import React from "react";

function Dates()
{
        function Gett()
        {
            var inp=document.getElementById("d1").value;
            var inpp=new Date(inp);
            inpp.setDate(inpp.getDate()+90);
            document.getElementById("ih1").innerHTML=inpp.getDate()+"/"+inpp.getMonth()+"/"+inpp.getFullYear();
        }

    return(
        <div>
            <label>Current Date</label>
            <input type="date" id="d1"/>
            <br/>
            <button onClick={Gett}>submit</button>
            <h1 id="ih1"></h1>
        </div>
    );

}

export default Dates;