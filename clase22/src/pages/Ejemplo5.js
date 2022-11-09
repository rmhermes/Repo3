import '../estilos/ejemplo5.css'


const Ejemplo5 = props=> {
    return (
        <>
   <h1>Pagina 5</h1>
   <div className="personajes"> 
   <div className="personaje">
        <h4>Nombre del personaje</h4>
        <div className="foto"> 
        <img src="https://via.placeholder.com/100" alt="imagen_dinamico" />
        <div className="datos">
            <h6> Especie: Humano o no</h6>
            <h6>Vivo : si o no</h6>
        </div>
        </div>
        </div>
       
   </div>

    </>

    )
}


export default Ejemplo5;