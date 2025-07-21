import React ,{useEffect,useState} from "react"
import { useNavigate  ,Link} from "react-router-dom"

export const DemoForm=()=>{


    const [name ,setName] = useState("");
    const[age,setAge] =useState(0);


    const handleAgeChange =(e) =>{
        
        setAge(e.target.value) ;

      
    }

    const handleInputChange = (e) =>{
        setName (e.target.value)
    }


     const handleSubmit =(e) =>{

        e.preventDefault();
        console.log({name} ,"  " ,{age});
     }


    return (

        <form name="testform" onSubmit={handleSubmit} >

      <label name="username" >Enter username
        <input type="text" name="username" onChange={handleInputChange} />
      </label>
        <br />

     <label name="age" >Enter Age
        <input type="text" name="age" onChange={handleAgeChange} />
      </label>

      <input type ="submit" />
        </form>

    );

}