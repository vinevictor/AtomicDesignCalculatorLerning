import React, { useState } from "react";
import Numbers from "../Molecules/numbers";
import Operations from "../Molecules/operations";
import Result from "../Atoms/result"


const OperationsAndResults = () =>{
    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
   

    const handleClick = (operation) =>{
        let result;
        switch (operation) {
            case '+':
              result = num1 + num2;
              console.log(result)
              break;
            case '-':
              result = num1 - num2;
              break;
            case 'x':
              result = num1 * num2;
              break;
            case '/':
              result = num1 / num2;
              break;
            default:
              break;
    }
    setResult(result)
    
    }

    return(
        <>
            <Numbers num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2}/>
            <Operations onClick={handleClick}/>
            <Result result={result} />
        </>
    )
    

}

export default OperationsAndResults
