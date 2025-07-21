import React ,{useEffect,useState} from "react"

import {Link, useNavigate} from "react-router-dom" ;
const Twowaybinding =() =>{

    const navigate = useNavigate();

   const[name, setName]  = useState(0);

   const handleClick =() =>{

    console.log("button clicked");
    navigate("/formDemo");

   }


   return(
    <>
<p>Enter name:</p>

<input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <h1> Hello {name}</h1>
<br />
 
   <button onClick={handleClick}>Click here</button>
   <br />

   <Link to ="/formDemo" >Click here to reach to form</Link>
</>
   );



}
export default Twowaybinding;