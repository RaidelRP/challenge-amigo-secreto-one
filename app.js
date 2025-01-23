// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let ulAmigos = document.getElementById("listaAmigos");

    let nombre = document.getElementById("amigo").value;
    nombre = nombre.trim(); // Eliminar espacios iniciales. Evitar que se quiera crear un nombre vacío con varios espacios

    if (nombre == "") { // Validar que no se quede vacío
        alert("Debe ingresar un nombre");
    } else {
        if (!amigos.includes(nombre)) {  // Validar que no se haya insertado ya
            amigos.push(nombre);
            
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(nombre));
            ulAmigos.appendChild(li);
        }else{
            alert(`${nombre} ya está entre tus amigos`)
        }
    }
    document.getElementById("amigo").value = "";
}