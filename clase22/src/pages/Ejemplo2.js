import { Ejemplo1Estado, Ejemplo2Estado } from "../componentes/Estado/Estado";
import '../estilos/estilo.css'
const Ejemplo2 = props =>{
    return(
        <div>
          <h1>Ejemplos Estados </h1>
          <Ejemplo1Estado/>
          <hr/>
          <Ejemplo2Estado/>
        </div>
    )
}

export default Ejemplo2;