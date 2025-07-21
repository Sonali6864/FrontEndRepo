import react, { useEffect, useState } from "react";

const Program1= ()=>{


    const [value,setValue] =useState(0);

    useEffect(()=>{
  console.log("value" ,value)
    },[])



return (
    <>
<p> Hello world</p>
{/* <div style={{color : 'blue',backgroundColor:'aqua' , fontSize : '50px'}}>This is div</div>
 */}
<div className="heading1">This is div</div>

<input type="text" value={value} onChange={(e)=>setValue(value+1)} />


<p> count {value}</p>

</>
);






}

export default Program1;