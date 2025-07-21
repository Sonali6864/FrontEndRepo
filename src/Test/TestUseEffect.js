import React ,{useEffect,useState}from "react";


const TestUseEffect = () =>{

    const [count,setCount]  =  useState(0);


    useEffect(()=>{

        setTimeout(()=>{
            setCount((count) =>count+1) ;
            console.log("I have updated the value");
        },1000);
    })



    return (
        <>
        <h1> Welcome to journey</h1>

        <h1 > I have updated the count {count} times</h1>
        
        </>

    );




};

export default TestUseEffect;