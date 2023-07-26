import React from 'react';
import '../../App.css';


const Num2 = ({value, onChange}) =>{
    return(
        <div>
            <label htmlFor="num2">2° Numero: </label>
            <input className='NumberInput'type="number" id="num2" value={value} onChange={onChange}></input>
        </div>
    )
}

export default Num2