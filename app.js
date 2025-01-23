// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function crearLi(idPadre, nombre) {
    let ul = document.getElementById(idPadre);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
}

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    nombre = nombre.trim(); // Eliminar espacios iniciales. Evitar que se quiera crear un nombre vacío con varios espacios

    if (nombre == "") { // Validar que no se quede vacío
        alert("Debe ingresar un nombre");
    } else {
        if (!amigos.includes(nombre)) {  // Validar que no se haya insertado ya
            amigos.push(nombre);

            crearLi("listaAmigos", nombre)
        } else {
            alert(`${nombre} ya está entre tus amigos`)
        }
    }
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let posicion = Math.floor(Math.random() * amigos.length);
    let nombre = amigos[posicion];
    let mensaje = `Tu amigo secreto es ${nombre}`;

    document.getElementById("resultado").innerHTML = mensaje;
}