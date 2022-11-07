import { useState } from "react";
const Ejemplo1Estado = props => {
    const [activo, setActivo] = useState(true);
    const toggleActivo = e => {
        setActivo(!activo);
    }

    return (
        <div>
            <input type="text" placeholder="clickear botón" disabled={!activo} /> {/*  ! =negacion , booleano, setea el activo al contrario (desactivado) */}
            <button onClick={toggleActivo}> {activo ? 'Deshabilitar' : 'Activar'} </button>
        </div>
    )
}
/*ejemplo 2 */
function Ejemplo2Estado(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div className="contenedor">
            <div className="counter">
                <h3>{`Contador : ${counter}`}</h3>
            </div>
            <div className="buttonGroup">
                <button className="success" onClick={() => setCounter(counter+1 )}> + </button>
                <button className="error" onClick={()=> setCounter(counter-1)}> - </button>
            </div>
        </div>
    )
}


export {
    Ejemplo1Estado,
    Ejemplo2Estado
}