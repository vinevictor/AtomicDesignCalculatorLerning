import React from "react"
const OperationButton = ({onClick,operation}) =>{
  return <button onClick={() => onClick(operation)}>{operation}</button>  
  
}

export default OperationButton