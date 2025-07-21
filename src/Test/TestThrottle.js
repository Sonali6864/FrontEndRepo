import React from "react";


export const TestThrottle =() =>{
 let count =0;

  let isapi = false;
   const throttle =(fn,time) =>{

   if(isapi) return
   isapi =true;

   setTimeout(() => {
   
    fn();
    isapi =false;

   }, time);


   }

    const sendEmail=()=>{


        throttle (()=>{
        console.log("send email clicked:" ,count++)},1000);
    }

    return(
<>
   <button onClick={sendEmail} > Send Email</button> 
</>
    );


}