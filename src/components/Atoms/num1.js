import React from 'react';
import '../../App.css';

const Num1 = ({value, onChange}) =>{

    return(
        <div>
            <label htmlFor="num1">1° Numero: </label>
            <input className='NumberInput' type="number" id="num1" value={value} onChange={onChange}></input>
        </div>
    )
}

export default Num1