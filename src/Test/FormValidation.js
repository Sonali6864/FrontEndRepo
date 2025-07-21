import react from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form'

const schema= yup.object().shape({
  fname: yup.string().required("Name is required"),
  email:yup.email("Invalid email ").required("Email is required.."),
  age: yup.number().positive().required(),
})

const {
    register,
    handleSubmit,
    formState: {error}
} = useForm({resolver:yupResolver(schema)})


export const FormValidation =() =>{


    const onsubmit=(data)=>{
        console.log(data);
    }


return (
    <>
    
    <form name="demForm"  onSubmit={handleSubmit(onsubmit)}>

<div>
        <label>Enter name</label>
        <input type="text"placeholder="Name...." {...register("fname")} />

        <p style={{color:"red"}}>error?.fname</p>

        </div>

<div>        <label>Enter Email</label>
        <input type="text"placeholder="Email...." {...register("email")} />
          <p style={{color:"red"}}>error?.email</p>

          </div>

<div>

        <label>Enter Age</label>
        <input type="number"placeholder="Age...." {...register("age")} />
        <p style={{color:"red"}}>error?.age</p>
</div>


        <input type="submit" /> 

    </form>
    </>
);

}
