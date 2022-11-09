import alumnos from '../data/alumnos.json';

const Ejemplo4 = props => {
    return (
        <>
            <h1>HOLA SOY PAG 4</h1>
            <ul>
                {alumnos.map(alumno => (
                    <li>
                        {alumno.nombre} {alumno.apellido} - ({alumno.edad})
                    </li>
                )
                )}
            </ul>

        </>
    )
}
export default Ejemplo4;
