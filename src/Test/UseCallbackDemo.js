import React ,{useState,useCallback} from "react";
import { PrintFunction } from "./PrintFunction";
 //here when we change the number then only child 
 // component is called so we can use usecallbak for that
 //   withoit using the callback it continuly
 //  hit the child component even i perform other options like toggle operation


 //useCallback memoize the entire funtion to execute so it will optizise the performace.
 //it prevents the re-rendering.

export const UseCallbackDemo =() =>{

   

    const [number ,setNumber] =useState (0);
    const [dark ,setDark] =useState (false) ;
     const  style ={
        backgroundColor : dark ? 'black' :'white' ,
        color : dark ? 'white' :'black'
    }


    const calculateNumber =   useCallback (()=>{
 return  [number*1 ,number*2 ,number*3] ;
    },[number])

    // const calculateNumber =() =>{
    //     return  [number*1 ,number*2 ,number*3] ;
    // }

    return(
<div style={style}>
<input type="number" value= {number} onChange={(e) =>setNumber(e.target.value)} />


<PrintFunction  calculateNumber ={calculateNumber} > </PrintFunction>

<button onClick={()=>setDark(!dark)} > Toggle</button>

 </div>

    );



}