import React,{useEffect,useState} from "react";


export const PrintFunction =({calculateNumber}) =>{

    const [row ,setRow] = useState ([]);
 
     useEffect(() =>{
        
        console.log("table printed");

        setRow(calculateNumber)

     }, [calculateNumber])

    return (

        // <>
        
        // <h1>PrintFunction</h1>
        <div> 
            {row.map(r=>
           <p> {r}</p>

            )}

         </div>

      
    )


}