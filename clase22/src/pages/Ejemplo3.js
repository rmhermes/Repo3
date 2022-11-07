import '../estilos/estilo.css'

const Ejemplo3 =props =>{
    return(
        <div>
            <h1>Ejemplo Google Maps </h1>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.21923322086!2d-58.42010759999998!3d-34.5986174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca62d4cf1563%3A0x686de505d84c67e6!2sAv.%20Medrano%20951%2C%20C1179AAQ%20CABA!5e0!3m2!1ses-419!2sar!4v1667830828641!5m2!1ses-419!2sar" style={{width: 900, height: 450, border: 1}} ></iframe>
            </div>
        </div>
    )
}
export default Ejemplo3;
