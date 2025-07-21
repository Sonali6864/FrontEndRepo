import react, { useEffect, useState } from "react";

function UseEffectDemo(){


    const [count,setCount] =useState(0)


useEffect(()=>{


    // setTimeout(()=>{

    //     setCount((count) => count +1);
    //     console.log("I have updated the ")

    // },1000)

})


const number =[1,2,3,4,5];
 const result  = number.map((number)=> (number*2))

console.log(result);

return (
<>
    <h1>I have updated the state {count} times</h1>
    <h1> Mapped numbers</h1>
    {number.map((i,num)=> 
    <li> {num*2}</li>
    )}
   
  </> 
);




}


export default UseEffectDemo
