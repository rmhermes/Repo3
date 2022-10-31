const texto = document.getElementById('texto');
const contar= document.getElementById('contar');

texto.addEventListener('keyup', function(){
    contar.innerText = texto.value.length;
})

const aprobados = alumnos.fulter(function(alumno){
    return alumno.nota >=7;
});
console.log(aprobados);
console.log(`$(<p>Alumno: ${aprobados[1].nombre}, Nota: ${aprobados[1].nota}</p>`);
