/* REPASO */

// Operadores relaciones
// If, ifelse
// Operadores logicos
// && ||

// const condicion = true 

// Variables globales  => aquella que esta suelta y accesible en el scope de todo mi proyecto. var es una variable global

// Variables locales => solo pertenece al scope del bloque de codigo en donde se definio

// var no se puede repetir nombre , no se usa en front 

// scope--> el alcance que una variable tendrá en tu código

// if (condicion) {
//     // bloque de codigo
//     let nombre = "Pilar" -->local
// }

// console.log(nombre)





//if --> ejecutar un codigo  en base auna condicion 

//uso de if y && (todos los terminos tienen que ser verdaderos)

// const age = 61

//evaluo esta condicion
//     |         or--> si ubiera or se ejecutaria a la primera
// if (age >= 18 && age <= 59) { 
    //61    es mayor o igual que 18, dio true, la segunda pide que la edad sea mayor o igual que 59 y no lo comple como el && pide que todos los terminos sean verdaderos para que pueda entrar en mi condicion. aca tenemos uno v y un f entonce pasa el if else

//     console.log("Cmprar alchol")
// } else if (age >= 60) {
//     console.log("te podes jubilar") cae aca 
// } else {
    //sucederia otra cosa
//     console.log("Cai en el else")
// }

//usemo el console.log para ver si fincopna


// const age = 10         ---> de 17 para abajo cae si o se en el else
// if (age >= 18 && age <= 59) {
//     console.log("Cai en el if")
// } else if (age >= 60) {
//     console.log("Cai en el else if")
// } else {
//     console.log("Cai en el else")
// }






// const condicion = true
// const condicion2 = true

// if (condicion) {
//     if (condicion2) {

//     }
// }




// function --> ya no se usa por el orden

// console.log(sumar(20, 5))

// function sumar(a, b) {
//     return a + b
// }


// console.log(restar(10, 5))

// const restar = (a, b) => {  // arrow function --> si se usa
//     return a - b
// }


//el codigo debe de ser
// 1- declaracion de variables
// 2-declaracion de funciones
// 3-eventos





// return implicito--> forma sintetica de tener retorno aunque no este escrito. funciona solo si tengo una linea se borra las llaves y donde iria el return

// const sumar = (a, b) => a + b
// console.log(sumar(20, 30))




/* switch */
//no se usa
// const diaDeLaSemana = parseInt(prompt("Ingrese un numero de dia correspondiente al dia de la semana"))

// switch (diaDeLaSemana) {
//     case 1:
//         console.log("Domingo")
//         break
//     case 2:
//         console.log("Lunes")
//         break
//     case 3:
//         console.log("Martes")
//         break
//     case 4:
//         console.log("Miercoles")
//         break
//     case 5:
//         console.log("Jueves")
//         break
//     case 6:
//         console.log("Viernes")
//         break
//     case 7:
//         console.log("Sabado")
//         break
//     default:
//         console.log("Dia invalido")
//         break
// }








// Operador ternario --> se pone ? (seria como if) 

// condicion ?(if) pasa esto :(else) pasa esto otro

// const esParOImpar = (numero) => numero % 2 === 0 ? "Es par" : "Es impar"




// Regex => expresiones regulares

// [aeiouAEIOU]




// constructor
// const regex = new RegExp('[aeiouAEIOU]')

// test => devuelve true si pasa el test, o false si no lo pasa

// const letra = prompt("Ingresa una letra")

// if (regex.test(letra)) {
//     console.log("Es una vocal")
// } else {
//     console.log("Es una consonante")
// }

// if (/[aeiouAEIOU]/.test("a")) {
//     console.log("Soy una vocal")
// }

// const validarPassword = (password) => {
//     if (password.length >= 8 && regex.test(password)) {
//         // envio el form
//     }
// }

// if (letra.toLowerCase() === "a" || letra.toLowerCase() === "e" || letra.toLowerCase() === "i" || letra.toLowerCase() === "o" || letra.toLowerCase() === "u") {
//     console.log("Es una vocal")
// }

