
import React, {useEffect, useState} from 'react'



export const ApiCall =() =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        getData();

    },[])

    const getData = async() =>{

        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();
        setData (data);
    }


    console.log("data value ");
    console.log(data)


    return (
   <div>
   <h1> TEST DAta</h1>
 
    <ul>
  {
        data.map((item) =>(
            <li key={item.id}> {item.name}</li>
        ))
  }
 
     </ul>
   
   </div>
    );



}