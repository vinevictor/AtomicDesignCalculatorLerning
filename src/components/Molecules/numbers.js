import React from 'react';
import Num1 from '../Atoms/num1';
import Num2 from '../Atoms/num2';
import '../../App.css';


const Numbers = ({num1, setNum1, num2, setNum2}) =>{
    return(
        <div className='flexCollum'>
        <Num1 value={num1} onChange={(e) => setNum1(Number(e.target.value))}/>
        <Num2 value={num2} onChange={(e) => setNum2(Number(e.target.value))}/>
        </div>
    )
}

export default Numbers