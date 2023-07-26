import React from 'react';

const Num1 = ({value, onChange}) =>{

    return(
        <>
            <label htmlFor="num1">1° Numero</label>
            <input type="number" id="num1" value={value} onChange={onChange}></input>
        </>
    )
}

export default Num1