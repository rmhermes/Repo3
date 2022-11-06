import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from "../componentes/props/Props";
const nombre2 = 'Martín'
const lista = ['manzana', 'banana', 'pera', 'sandia', 'melon']
const mostrarValor = valor =>{
    console.log(valor)
}


const Ejemplo1 = props =>{
    return(
        <div>
            <h1>Ejemplos de Propiedades</h1>
            <Ejemplo1Props nombre='Ramiro' /> {/* ejemplo de propiedad simple y reutilizable */}
            <Ejemplo1Props nombre= {nombre2}/>  
            <hr/>
            <hr/>
            <Ejemplo2Props elementos = {lista}/>{/* ejemplo de pasar a lista los elementos de un array con map */}
            <hr/>
            <hr/>
            <Ejemplo3Props titulo="La noticia" subtitulo="Aca va el subtitulo de la noticia" cuerpo="Aca va el cuerpo de la noticia" /> {/* ejemplo de pasar propiedades  */}

            <hr/>
            <hr/>
            <Ejemplo4Props cambiarValor ={mostrarValor}/>
            <hr/>
            <hr/>
            <Ejemplo5Props eventoClick={mostrarValor}/>

        </div>
    )
}

export default Ejemplo1;
