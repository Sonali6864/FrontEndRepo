import React, { useMemo, useState } from "react";


// use memo is used to memoize the value .. 
// in the below example the for loop calculation every time
//  executes on every event call so it degrade the performace so 
// that we can memoize the 
// value i.e chache the calculated value so that is optimeze the performace .
//usememo syntax is same as useeffect it takes the two parameters callback 
// funciton and dependacy parameter.

export const DemoUseMemo =() =>{

     const [number ,setNumber ] = useState(0);
     const [dark, setDark] =useState(false);

     const style ={
        backgroundColor : dark ? 'black' : 'white',
        color : dark ? 'white' :'black'
     }



      const cNumber = useMemo (()=>{

       return calculation(number);
      },[])


    //  ?const cNumber = calculation(number);

     return(
        <div style={style}>
            
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            
            <h2 > cNumber</h2>

            <button onClick={()=>setDark(!dark)} >Toggle</button>
             </div>
     );



}

function calculation(number)
{

    console.log("loop");
    for(let i =0;i<1000000;i++)
    {

    }

    return number ;
}