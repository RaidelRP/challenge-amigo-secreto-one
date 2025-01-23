// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    nombre = nombre.trim(); // Eliminar espacios iniciales. Evitar que se quiera crear un nombre vacío con varios espacios
    if (nombre == "") {
        alert("Debe ingresar un nombre");
    } else {
        amigos.push(nombre);
    }
    document.getElementById("amigo").value = "";
}