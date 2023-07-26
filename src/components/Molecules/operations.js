import React, { useState } from 'react';
import OperationButton from '../Atoms/operation_button';
import '../../App.css';



const Operations = ({onClick}) =>{
return(
    <div div className='flexRow operationsBox'>
    <OperationButton onClick={onClick} operation='+'/>
    <OperationButton onClick={onClick} operation='-'/>
    <OperationButton onClick={onClick} operation='x'/>
    <OperationButton onClick={onClick} operation='/'/>
    </div>
)    
}

export default Operations
