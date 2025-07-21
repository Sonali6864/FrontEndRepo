import react,{useEffect,useState} from "react";



export const TestTwoCounts =() =>{

    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);


    // useEffect(()=>{

    //     console.log(count1);
    //     console.log(count2);

    //     setCount2(count2 => count2 + 1);

    // },[count1])

    const handleCount1 =() =>{
        setCount1(count1+1)
        setCount2(count1+1)
    }



    return (        
    <>
    <h1> {count1} </h1>
    <button onClick={handleCount1}>Count1</button>

     <h1>{count2}</h1>
    <button >Count2</button>
    </>
    );

}