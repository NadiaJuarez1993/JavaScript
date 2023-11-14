// while
// while se a ejecutar MIENTRAS la condición sea verdadera, cuando sea FALSA, sale del bucle
// let i = 0;
// while (i < 5) {
//   //bloque de codigo
//   console.log("mi variable ahora vale", i);
//   i++;
// }

// DO WHILE siempre se va a ejecutar por lo menos UNA VEZ, hasta que la condición sea falsa
// let y = 5;
// do {
//   console.log("Hola a todos");
//   y++;
// } while (y < 5);

// console.log("Bucle finalizado");

// do while
// let i = 6;
// do {
//   console.log("Hasta que se cumpla mi condición, voy a saludar");
//   i++;
// } while (i < 5);

// let i = 1;
// do {
//   console.log(
//     "Mientras la variable sea menor o igual a 10, voy a ejecutarme ;D",
//     i
//   );

//   i++;
// } while (i <= 10);

// for (let i = 0; i < 5; i++) {
//     //bloque de codigo

// }

//bucle FOR

// for (let i = 0; i < 5; i++) {
//   //bloque de codigo
//   console.log("esta es la vuelta numero:", i);
// }

const $ = (selector) => document.querySelector(selector);

//bucle for of
// const lenguajes = ["Phyton", "C++", "Java", "C#", "Swift"];

// for (const lenguaje of lenguajes) {
//   $(".list").innerHTML += `<li>${lenguaje}</li>`;
// }

// lenguajes.forEach((element) =>
//   //bloque de codigo
//   console.log(element)
// );

// for (const index in lenguajes) {
//   console.log(index);
// }

// Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

// for (let i = 0; i < 4; i++) {
//   const cancion = prompt("Ingrese una canción");
//   $(".list").innerHTML += `<li>${cancion}</li>`;
// }
