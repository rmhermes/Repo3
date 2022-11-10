import '../estilos/ejemplo5.css'
import { useEffect, useState } from 'react';

const Ejemplo5 = props=> {
    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([]);
    useEffect ( () => {
        const cargarDatos = async () =>{
            setCargando(true);
            /*Hooks>useEffects, useState 
            fetch >sirve para traer los datos y es nativo de JS, se puede usar tambien AXIOS 
            /async y await sirve para manejar errores */
            const res = await(await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }
        cargarDatos(); 
    }, []);

    return (
        <>
   <h1>Pagina 5</h1>
   {cargando ?  <p>cargando datos</p> :
   <div className="personajes">  
   { personajes.map(personaje=> (
   <div className="personaje" key={personaje}>
        <h4>{personaje.name}    </h4>
        <div className="ficha">
        <div className="foto"> 
        <img src={personaje.image} alt={personaje.name} />
         </div>
        <div className="datos">
            <h6> Especie: {personaje.species==='human' ? 'Humano' : personaje.species}</h6>
            <h6>Vivo :{personaje.status ==='Alive' ? 'Si' : 'No'}</h6>
        </div>
        
        </div>
   </div>
   ))} {/* cierre del map */}
   </div>
   }  {/* cierre del cargando */}
    </>

    )
}


export default Ejemplo5;