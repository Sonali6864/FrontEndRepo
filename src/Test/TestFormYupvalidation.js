import React,{useState,useEffect} from "react";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'



const schema = yup.object().shape ({
    firstname : yup.string().required("Required firstname"),
    email:yup.string().email().required("Required Email"),

    age: yup.number().typeError("Age should be a number").positive("Age must be positive").
    integer("Age should be number").min(18,"Minimum 18 years allowed") .max(60,"maximim 60 years allowed")
    .required("required age"),
})

export const  TestFormYupValidation = () =>{


    const {
        register,
        handleSubmit,
        formState   :{errors},
    } = useForm({ 
        resolver:yupResolver(schema),
    })


    const onsubmit =(data) =>{

        console.log("inside onsubmit")
        console.log(data);
    }

    return(

       
        <div className="Form" >
        <form name="testform" onSubmit={handleSubmit(onsubmit)} >

      <label name="firstnamelabel" >Enter username
        <input {...register("firstname")} type="text" placeholder="Enter name"/>
          <p style={{ color: "red" }}>{errors.firstname?.message}</p>
      </label>
        <br />

<label name="emaillabel" >Enter username
        <input {...register("email")} type="text" name="email" placeholder="Enter email"/>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
      </label>
        <br />

     <label name="age" >Enter Age
        <input {...register("age")} type="text" name="age" placeholder="Enter age"/>
          <p style={{ color: "red" }}>{errors.age?.message}</p>
      </label>

      <input type ="submit" />
        </form>
        </div>



    );
    
    

}