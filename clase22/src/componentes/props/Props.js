const Ejemplo1Props = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}
const Ejemplo2Props = props => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    )
}

const Ejemplo3Props = ({ titulo, subtitulo, cuerpo }) => {
    return (
        <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{cuerpo}</p>
        </div>
    )
}

const Ejemplo4Props = props => {
    return (/* CUANDO EJECUTAMOS EL EVENTO ONCHANGE EL INPUT TOMA LO QUE SUCEDE EN LA FUNCION CAMBIAR VALOR - RECIBIMOS PROPIEDAD CAMBIARVALOR */
        <label>ver en consola : <input type="text" onChange={(e) =>
            props.cambiarValor(e.target.value)} />
        </label>
    )
}
/*define funcion que va a manejar el evento del click */
const Ejemplo5Props = props =>{    
    const handleClick = c =>{      /* if > validar que este pasando la propiedad /evento click/  */
        if(props.eventoClick){
            props.eventoClick('me clickeaste');
        }
    }
    return (
        <p>
            <button onClick={handleClick}> Clickeame </button>
        </p>
    )
}
export {
    Ejemplo1Props,
    Ejemplo2Props,
    Ejemplo3Props, 
    Ejemplo4Props,
    Ejemplo5Props
}