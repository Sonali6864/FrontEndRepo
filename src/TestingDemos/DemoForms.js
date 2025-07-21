import React, { useState } from 'react'

export  function DemoForms() {



    const [name,setName] = useState('');
    const [msg,setMsg] =useState('');
    const [listname,setListname] =useState("")



     const checkErrorMessage =(e) =>{

      if(!isNaN(e.target.value) && e.target.value.length ){
        setMsg("Not a number");
      }
      else
        setMsg("");
        setName(e.target.value);
     }


     const submitMessage =() =>{
      console.log("added");
      setMsg("Added");


      setTimeout(() => {
        setListname("Test List1");
      }, 1000);

      
     }

  return (
    <div className="divabs">

        <p data-testid="success">{msg}</p>
        <input  type ="text" value={name}  placeholder='Enter name'  onChange={checkErrorMessage}/>

        <br />

        <br />


   <input type="submit" disabled={msg.length? true: false} onClick={submitMessage} />

   <br />
   <br />

   {
    listname ? 
    <ul><li data-testid="li-01">{listname}</li></ul> : null
   }

    </div>
  )
}
