import React , {useState,useEffect} from "react";

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers"
import * as yup from yup

const schema = yup.object().shape({

    fn: yup.string().required(),
    age: yup.number().typeError("age should be number").positive("").required(""),

})

const function1 = () =>{

    const{

        register, handleSubmit, formState:{errors}

    }= useForm ({resolver: yupResolver(schema)});
  
    return (
        <>
        <form name= "demoform" onSubmit={(handleSubmit(onsubmit))}
        >
            <input type="text" name="txtnm" {...register("fn")} />
            </form>       
        </>
    );


}
export default function1;