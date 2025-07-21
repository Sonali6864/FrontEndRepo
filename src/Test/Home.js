import react from "react";


export const Home= () =>{

    const handleSubmit =() =>{
        console.log("Button clicked..")
    }

return(

    <>
    <h1> Hello Welcome to home</h1>


    <button onClick={handleSubmit}>Click me</button>

</>
)

}