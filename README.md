# challenge-amigo-secreto-one
![imagen del desafio](assets/ff043987-239b-4661-bdb1-7f4ca6092c48.webp)

## Descripción del proyecto
En este proyecto se hace uso de los fundamentos de Javascript para proveer nombres de amigos para un sorteo de amigo secreto. Se llevan a cabo las siguientes acciones:
1. Agregar nombres desde un campo de texto.
2. Mostrar los nombres introducidos en una lista visible en la página.
3. Seleccionar uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

## Tecnologías utilizadas
1. HTML.
2. CSS.
3. JavaScript.

## Funcionalidades
### 1. Agregar nombres desde un campo de texto.
Al hacer clic en el botón <strong>Añadir</strong> se realiza la llamada a la función `agregarAmigo()`; en la que se obtiene el nombre escrito en el campo de texto, este nombre es validado para verificar que haya sido introducido correctamente, luego se comprueba si no ha sido insertado anteriormente para entonces insertarlo en el arreglo de nombres que se crea al principio del programa. Finalmente esta función limpia el campo de texto para prepararlo para la próxima inserción.


### 2. Validación de nombres.
Se realiza la validación de los nombres para que no se envíe un texto en blanco o compuesto solamente por espacios. En caso de que los primeros carácteres sean espacios, estos son eliminados mediante la función `trim` de Javascript.

### 3. Mostrar en una lista los nombres insertados.
Cada vez que se introduzca un nombre correctamente, se manipula el DOM agregando un hijo a la lista que contiene los nombres. Este hijo, que corresponde a una etiqueta `li` de html, contiene el nuevo nombre agregado. Este proceso se realiza en la función `crearLi()`, pasándole como parámetros el id del elemento padre y el nombre que va a almacenar el hijo.
```js
function crearLi(idPadre, nombre) {
    let ul = document.getElementById(idPadre);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
}
```

### 4. Sorteo de amigo secreto.
La función `sortearAmigo()` asociada a hacer clic en el botón con la misma etiqueta, comprueba si el arreglo de nombres no está vacío para mostrar en el elemento con id "resultado" el nombre obtenido al azar entre las posisciones del arreglo de amigos. En caso de que la lista esté vacía se envía un `alert()` informando de esta situación.