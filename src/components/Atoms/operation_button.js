import React from "react"
import '../../App.css';

const OperationButton = ({onClick,operation}) =>{
  return <button className="operationButton" onClick={() => onClick(operation)}>{operation}</button>  
  
}

export default OperationButton