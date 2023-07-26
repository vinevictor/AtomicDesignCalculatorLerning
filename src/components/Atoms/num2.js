import React from 'react';

const Num2 = ({value, onChange}) =>{
    return(
        <>
            <label htmlFor="num2">2° Numero</label>
            <input type="number" id="num2" value={value} onChange={onChange}></input>
        </>
    )
}

export default Num2