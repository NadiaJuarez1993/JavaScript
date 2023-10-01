////REPASO////
/*+= SUMAR Y ACUMULAR A ESA VARIABLE (LO MISMO CON -) SUGAR SYNTAX
*/


//JS ES CASE SEBSITIVE, DISTINGUE ENTRE MINUSCULAS Y MAYUSCULAS







/*CONDICIONES-->estructuras de cosigo que van a permitir ejecutar algo si las condiciones se cumplen y que si no,pasen otras
*/
//if, if else,switch

/*if(condicion ){
    //bloque de codigo que se ejecutaria si mi condicion se cumple
}*/

const number1 = 20
const number2 = 50
const number3 = "20"
const boolean = true

//compara datos siemre devuelve booleanos

/*== igualdad   ( se fija en el valor)
console.log (number1 == number2) false
console.log (number1 == number3) true


=== igualdad estricta   (se fija en el tipo del dato y en el valor)
console.log (number1 === number3) false

!= distinto de (se fija en el valor)
console.log (number1 != number3) false

!== distinto estricto(se fija en el tipo de dato y en el valor)
console.log (number1 !== number3)

< menor que (solo se fija en el valor, no es comparacion estricta)
console.log (number1 < number3) true


> mayor que (solo se fija en el valor, no es comparacion estricta)
console.log (number1 > number3)  false


<= menor o igual (solo se fija en el valor, no es comparacion estricta)
console.log (number1 <= number3) true

>= mayor o igual (solo se fija en el valor, no es comparacion estricta)
console.log (number1 >= number3)false

! negacion (nega la variable, da el valor contrario)
console.log (!boolean) false
console.log (!!boolean) true
*/

/*if else (que pasa si se cumole y qeu pasa si no)
const age =18

if (age >=){
    console.log("ya podes votar")
} else{
    //lo que sucede si la condicion no se cumple
    console.log("todavia no cumpleste la edad ncesaria")
}
*/

/* decirle al usuario segun que año naciste que generacion es

const yearOfBirth = 1992

if (yearOfBirth <= 1993){
    console.log("Soy mileneal")
} else if (yearOfBirth >= 1994){
    console.log("Soy Centenial") /// pueden haber muchos else if
} else {
    console.log ("no se de qu genaracion sos") // este es el ultimo. no se pone condicion 
}

*/

/*
const fullname = prompt ("como te llamas?")

if (fullname === "Pedro"){
console.log ("Hola Pedro!")
} 

si el usuario pone con minuscula no se va a ejecutar distingre entre mayuscula y minuscula


para atajarnos, ponemos toLowerCase para que ponga lo que ponga quede en minuscula 

if (fullname.toLowerCase ()=== "pedro"){
console.log ("Hola Pedro!")
} 

*/ 


/*VALORES TRUTHY O FALSE 
const fullname = "Nadia" // TRUE PORQUE IENE CARACTERES
const empty = "" //FALSE PORQUE NO TIENE CARACTERES
const zero = 0 // FALSE PORQUE EL FALSE VALE CERo . cualquier otro valor que no sea cero es verdadero
const one = 1 // TRUE
const negative = -5 //TRUE
const nulo=null //
const indefinido = undifined //FALSE
const notAnumber = NaN //FALSE
const verdader = true //TRUE
const false = false //FALSE

LO QUE SE PONE EN ( ES LE VALOR DE REFERENCIA : FULLNAME, EMPTY ETC)   

if (){
    console.log ("Cai en IF")
} else {
    console.log("Cai en el ELSE")
}

*/

/*- Crear un programa que calcule la suma de dos numeros, valide el resultado
y retorne verdadero si el resultado es positivo, o retorne falso si el
 resultado es negativo


const esSumaMayorQueCero = (a, b) => {
    const resultado = a + b
    if (resultado > 0) {
        return true
    } else {
        return false
    }
}
*/


// Optimizando codigo
const esSumaMayorQueCero2 = (a, b) => {
    const resultado = a + b
    if (resultado > 0) {
        return true
    }
    return false
}

// Optimizando codigo
const esSumaMayorQueCero3 = (a, b) => {
    const resultado = a + b
    return resultado > 0
}

// console.log(esSumaMayorQueCero(-20, 40))
// console.log(esSumaMayorQueCero(-20, -40))

/*
- Crear un programa que reciba un numero y devuelva true si es par, y false si es impar- Crear un programa que reciba una contrasena y valide si su longitud es mayor o igual a 8 caracteres.
Si no es mayor, solicitar que ingrese de nuevo la contrasena


const esPar = (number) => {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

// console.log(esPar(7))
// console.log(esPar(4))

/*

*/



// Recursividad

/* const userPassword = prompt("Ingrese su contraseña:")

 const validatePassword = (password) => {
    if (password.length >= 8) {
        return true
    } else {
        let secondPassword = prompt("Contraseña invalida, ingrese nuevamente:")
         validatePassword(secondPassword)
     }
 }

 console.log(validatePassword(userPassword))
*/



//OPERADORES LOGICOS => && (and)  ,  || (or)

/* && (and)=> pregunta si TODAS mis condiciones son verdaderas

const age = 18
const sabeConducir = true

if (age >= 18 && sabeConducir) {
     console.log("Podes sacar la licencia")
} else {
     console.log("Todavia no podes")
 }

*/


/*|| (or)

|| => con que al menos una de mis condiciones se cumpla, ya da verdadero
=> el unico caso en el que no se cumple, es que todas las condiciones sean falsas

const age = 16
const vaAcompaniado = false

if (age >= 18 || vaAcompaniado) {
     console.log("Podes ver la peli de terror")
 } else {
     console.log("Todavia no podes")
 }

*/