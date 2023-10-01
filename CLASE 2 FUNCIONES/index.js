//VARIABLES--Espacio en memoria que almacena informacion
//let y const --> depende de lo que necesitemos

//let-->declara variable *******lo que sigue es como yo voy a declarar(es a eleccion pero debe de tener coherencia) forma de declarar que permite cambiar el dato
let firstname = "Nadia" //STRING
console.log(firstname) 

//const--> pide si o si que se inicialice con un valor. toman en cuenta el tipo de dato que aguardan. los datos no pueden cambiar. el año de nacimiento siempre va a ser el mismo
    const yearOfBirth = 1993 //NUMBER

//var--> forma antigua, se dejo de usar

////////////// //////////////
//TIPOS DE DATOS PRIMITIVOS-->string, number, boolean, undifined, null ,NaN

//NaN--> significa no es un numero (not a number)
//parseInt() Number()--> transforma un string a un numero
 //number( mantiene el numero)
         //const num = "20.7"
            //console.log (Number(num))
 //parseInt( quita decimal de tenerlo) 
      //console.log(parseInt(num))

//BOOLEAN --> VERDADERO O FALSO . el true y false son palabras resevadas de js , no necesitan comillas.
   //const meGustanLosGatos = true //boolean

//STRING--> es lo que esta entre comillas


//////////////////////
//CONCATENACION DE VARIABLES -->templete literal. es cuando armas una oracion con datos puesto anterior se usa `` y adentro de ${va la variable que necesito}, la coma separa. SUMA LOS DATOS, ARMA ORACION
 //console.log (`mi nombre es${}`)


 /////////////////////////////
//prompt --> le hacemos preguntas al usuario
    //const userName = prompt ("Ingrese su nombre completo")
    //console.log(`el nombre es ${userName}`)


///////////////////////////////////

//Operadores Aritmeticos -->+ , -, /, *, % (el ultimo es el resto de la divicion)
//TRUE EQUIVALE A 1
//FALSE EQUIVALO A 0
//null = 0
//undifined = no tiene un valor numerico para calculos me devuelve un NaN



///////////////////
//NOMENCLATURA DE VARIABLES
// POR CADA PALABRA, LA PRIMER LETRA DE LA QUE SIGUE VA EN MAYUSCULO.LA PRIMER PALABRA ESEN MINUSCULA. yearOfBirth
//UPER_SNAKE_CASE-- TODO EN MAYUSCULA Y SEPARADA EN GUION BAJO








///////////////////////////////
//FUNCIONES-->LOQUE DDE CODIGO QUE SE EJECUTA Y ES RUTILIZABLE
//Modos
  // forma vieja
   //function saludar() {
    //bloque de codigo qie se ejecutara
    //console.log("hola mundo")
   //}
   //saludar()  //con esto se lo llama, el nimbre que elegimos de la funcion


   //arrow function ----
   //const miFuncion = () => {}
   //const welcom = () => {
    //bloque de codigo que se ejecutara
    //console.log("hello word")
   //}
   //welcom()

  // const sumar = () => {
   // const num1 = 20
    //const num2 = 70
   // console.log(num1+num2)
   //}

   //PARAMETROS O ARGUMENTOS, SE LE DICE QUE ESNTRE LOS () VA A APARECER NOMBRES

   //const saludar = (nombre) => { //es un parametro
   // console.log( `hola, bienvenida ${nombre}`) el usuario no usa la consola
   //return `Hola soy ${nombre}`
   //}

   //saludar("Nadia Juarez") //le di el valor que quiero //es un argumento


   //const sumar = (num1, num2) => {
    //console.log (num1+num2)
    //return num1 + num2
   //}
 //sumar (15, 68)
   //const resultado = sumar (15 , 68)


 //scope --> el alcance de mi codigo
  // const sumar = (num1) => {
    // const number = 20
    // return num1 + number // el return permite tener lo datos diponibles or afuero del scope de la funcion
   //}
   //const resultado = sumar(25) - 50



//le vamos a pedir al usuario dos numeros
 // const num1 = Number(prompt("Ingrese el primer numeer:"))
 //const num2 = Number(prompt("ingrese el segundo numero"))

 //console.log(sumar (num1,num2))
 //console.log(restar(num1, num2))

 //const calculoComplejo = sumar(num1, num2) * restar(num1, num2)
 //console.log(calculoComplejo)

//crear un programa que reciba numero en pesos y devuelva la cantidad de dolares que reprsentan
//const calcularDolares = (pesos) => {
   // return pesos / 738
//}

//crear un programa que reciba los lados de un rectangulo
