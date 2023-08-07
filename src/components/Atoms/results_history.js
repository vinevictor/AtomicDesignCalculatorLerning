import React from "react";
import '../../App.css';


const ResultsHistory = ({history}) =>{
    return(
        <div className='results flexCollum'>
            <h3>Historico de Resultados:</h3>
            <ul>
                {history.map((value, index) =>(
                    <li key={index}>Resultado {index +1}°: {value}</li>
                ))}
            </ul>
        </div>
    )
}

export default ResultsHistory