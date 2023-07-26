import React, { useState } from 'react';
import OperationButton from '../Atoms/operation_button';


const Operations = ({onClick}) =>{
return(
    <>
    <OperationButton onClick={onClick} operation='+'/>
    <OperationButton onClick={onClick} operation='-'/>
    <OperationButton onClick={onClick} operation='x'/>
    <OperationButton onClick={onClick} operation='/'/>
    </>
)    
}

export default Operations
