console.log("Hola mundo");

// Mensaje de alerta
// alert("Hola");

// Mensaje de alerta con caja para escribir contenido
// let userName = prompt("¿Como te llamas?");

// Mensaje de alerta con una pregunta y los botones "Rechazar" y "Aceptar"
// onfirm("¿Es correcto?");

// Para comentarios poner delante doble barra
/* Tambien se puede encerrar entre /* */

//VARIABLES

// String.- el valor se tiene que dar entre comillas
let userName = "Ana";

// Number
let userAge = 36;

// Booleano
let isOnline = true;

console.log("Nombre: ", userName);
console.log("Edad: ", userAge);
console.log("¿Está en línea?: ", isOnline);

// Se puede dar más valores a una variable ya creada, pero ya no utilizamos "let", directamente el nombre de la variable y su nuevo valor.
// Javascript permite cambiar el tipo de dato, pero no es buena practica. Si la variable se define con un valor tipo string, es recomendable siempre cambiarlo a valores tipo string.
userName = "Paco"
console.log("Nuevo usuario: ", userName);

// VARIABLES CONSTANTES.- No se puede redefinir su valor. Para todo el código tendrá el mismo
const pi = 3.1416;
console.log("Numero PI: ", pi)


// JavaScript permite hacer operaciones mezclando varios tipos de datos pero no es buena practica.
console.log(10 + 5); // Hará una operación de suma que da 15
console.log(10 + "5");  // Mostrará 105 ya que concatena (enlaza) valores no suma

// OPERADORES LÓGICOS.- El resultado será siempre true o false dependiendo si se cumple o no la condicion.
let num1 = 10;
let num2 = 15;
let num3 = "10"

// Comparación
console.log("num1 > num2: ", num1 > num2); // Mayor que
console.log("num1 >= num2: ", num1 >= num2); // Mayor o igual que
console.log("num1 < num2: ", num1 < num2); // Menor que
console.log("num1 <= num2: ", num1 <= num2); // Menor o igual que
console.log("num1 == num2: ", num1 == num2); // Igualdad solo de valor
console.log("num1 === num2: ", num1 === num2);  // Igualdad de valor y tipo de dato. Se recomienda siempre utilizar esta
console.log("num1 === num3", num1 === num3); // No se cumple la condición porque aunque el valor es 10 en ambas variables, una es de tipo number y otra string. 

// && ("y" lógico).- Devolverá true si todos sus operandos son true. Si uno de ellos es false, el resultado será false
console.log("&&", (true && true) && true);

// || ("o" lógico).- Devolverá true con que uno de sus operandos sean true
console.log("||", false || true);

// OPERACIONES ARITMETICAS
let number1 = 5;
let number2 = 10;

let sumResult = number1 + number2; // Suma
console.log("Suma Resultado: ", sumResult);

let subResult = number2 - number1; // Resta
console.log("Resta Resultado: ", subResult);

let multResult = number1 * number2; // Multiplicación
console.log("Multi Resultado: ", multResult);

let divResult = number2 / number1; // División
console.log("División Resultado: ", divResult);

let expResult = 2 ** 3; // Potencia.- numero elevado a otro n*
console.log("Potencia Result: ", expResult);

let moduleResult = 5 % 2;  // Módulo.- es el resto de la división
console.log("Modulo Result: ", moduleResult);

// OPERACIONES CON STRINGS.- Concatenación de variables. 
// Se pueden utilizar comillas dobles "" o comillas simples ''

let myName = 'Ana Isabel';
let myLastName = 'Santos';

const fullName = myName + ' ' + myLastName;
console.log('Me llamo ' + fullName);

// Se pueden utilizar caracteres especiales para modificar el contenido:
// Contrabarra \ .- Anula la función de las comillas de abrir y cerrar el string.
// Contrabarra +  \n .- Salto de línea
let myString = "Esto es\n \"un string\"";
console.log(myString);

// STRINGS SOLO CON VARIABLES.- Se encierran entre comillas angulares y cada variable irá precedida con símbolo dolar y entre corchetes `${variable1} + ${varoable2}`
const completeName = `${myName} ${myLastName}`;
console.log(completeName);

// MÉTODOS DE LOS STRINGS
// Sirven para obtener información de un string, aplicar una transformación de caraccteres...

// Método para saber longitud string
let myStr = 'Hola Mundo';
console.log('Mi String tiene ' + myStr.length + ' caracteres');

// Método para convertir en mayusculas
let upperStr = myStr.toUpperCase();
console.log(upperStr);




