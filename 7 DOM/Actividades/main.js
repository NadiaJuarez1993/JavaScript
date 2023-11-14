/*DOM
Ejercicios
saludo
Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

color
Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

rgb
Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

imagen
Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

Opción elegida	Ancho de imagen
chica	200px
mediana	500px
grande	800px
// const tamanio = prompt("Ingrese chica, mediana o grande")

// const imagen = document.querySelector(".image")

// if (tamanio === "chica") {
//     imagen.style.width = "200px"
// } else if (tamanio === "mediana") {
//     imagen.style.width = "500px"
// } else if (tamanio === "grande") {
//     imagen.style.width = "800px"
// } else {
//     alert("Tamaño invalido")
// }


temperatura
Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

Temperatura	Color
Menor a 0°	Azul
Mayor o igual a 0° y menor a 15°	Celeste
Mayor o igual a 15° y menor a 25°	Verde
Mayor o igual a 25° y menor a 30°	Amarillo
Mayor o igual a 30° y menor a 35°	Naranja
Mayor a 35°	Rojo


progreso
Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)
// const porcentaje = prompt("Ingrese el porcentaje de progreso:")
// const progressBar = document.querySelector(".progress")

// progressBar.style.width = porcentaje



reacciones
En un documento html hacer un post de una red social que contenga:

un h3 con la usuaria
un p con un lorem ipsum
3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
Dar estilos para que

la tipografía sea distinta a la default
los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

card
Hacer un programa que al iniciarse pregunte mediante prompts por

un título
una url de una imagen
una url a un artículo
Utilizar esos datos para completar en el html una card que tenga

una imagen, con la url de la imagen ingresada
un título, con el texto del título ingresado
un link que diga Leer más, con la url al artículo ingresado
Dar algunos estilos mínimos a la card:

centrarla con respecto a la pantalla
agregarle un borde
agregarle un sombreado
cambiarle la tipografía
cambiarle los tamaños de fuente
cambiarle los colores por defecto

// url imagen => https://www.infobae.com/new-resizer/Z8GSH-u2S9HCdXTY9oVxztR1VII=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/RLYRP6WVKRMD3N6VMGCW5JNW24.jpg
// url articulo => https://www.infobae.com/deportes/2023/10/02/el-mensaje-de-edinson-cavani-luego-de-la-dura-derrota-boca-ante-river/

// const titulo = document.querySelector("h1")
// const imagen = document.querySelector("img")
// const link = document.querySelector("a")

// const texto = prompt("Ingrese un titulo")
// const urlImagen = prompt("Ingrese una url de una imagen")
// const urlArticulo = prompt("Ingrese una url de un articulo")

// titulo.innerText = texto
// imagen.src = urlImagen
// link.href = urlArticulo

*/