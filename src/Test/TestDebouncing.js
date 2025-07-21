import React from "react";

export const TestDebouncing =() =>{


    const getData =(event)=>{
        console.log(event.target.value);
    }


    // const debounce =(fn,wait) =>{
    // let timer ;
   
    //     return((...args)=>{
    //          clearTimeout(timer);
    //  timer =  setTimeout(() => {
    //             fn(...args)
    //         }, wait);
    //     })


    // }

    const debounce =(fn,wait ) =>{

        let timer ;
       return((...args) => {
        clearTimeout(timer);
    timer =  setTimeout(() => {
                fn(...args);
            }, wait);
       });


    }



    const datadebounce = debounce(getData ,2000);



    return(


<>
<input type="text" onChange={datadebounce}  />

 </>

    )
    
    ;



}