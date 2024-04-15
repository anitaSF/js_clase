console.log('Conditionals!');

// METODO 1 : IF - ELSE

// Los condicionales marcan requisitos que se tienen que cumplir para que se ejecute el código insertado entre llaves {}. El condicional es "if" (si)
// Se define con if (condicion) {}. Las condiciones se  componen de variable + comparador + valor.
let gender = 'female';

if (gender = 'female') {
    console.log('Eres una mujer');
}

// Se puede completar con más líneas que hacen que ejecuten otro código en los casos que no se cumpla la condición principal. El condicional utilizado en este caso es "else" (sino)
if (gender = 'male') {
    console.log('Eres un hombre');
} else {
    console.log('Eres una mujer');
}

// Se pueden definir condicionales aun más complejos utilizando nuevas condiciones para que se ejecute el código en caso de que la anterior no se cumpla. Las condiciones se ejecutarán en orden escrito
// El condicional utilizado es "else if" y se debe colocar entre los anteriores, ya que "if" abre condicional y "else" lo cierra
let age = 200;

if (age > 100) {
    console.log('Nadie ha vivido tanto');
} else if (age < 0) {
    console.log('Edad incorrecta');
} else if (age >= 18) {
    console.log('Eres mayor de edad');
}
else {
    console.log('Eres menor de edad');
}


// Este es un ejemplo de uso del operador Modulo. Si comparamos el resto de dividir 10 con 0 podremos saber si un número es par (se cumple la condicion) o impar (no se cumple)
let number = 10;

if (number % 2 === 0) {
    console.log('El número ' + number + ' es par');
} else {
    console.log('El número ' + number + ' es impar');
}

// Condicionales estrictos con String.- Para que se ejecute el código, se debe cumplir igualdad estricta entre el valor de la variable y el introducido en la condición
// Las condiciones de string se suelen escribir en minúscula por lo que cualquier valor de la variable que comience por mayúscula no cumplirá la condición. Para solventar este problema se utiliza el método variable.toLowerCase, para convertir el valor de la variable en minúscula y que se cumpla la condición
let country = 'España';

if (country.toLocaleLowerCase() === 'españa') {
    console.log('El país es España');
} else if (country.toLowerCase() === 'mexico') {
    console.log('El país es México');
} else {
    console.log('El pais es otro');
}

// Condicionales con "O lógico" (||).- El operador O lógico sirve para incluir dos posibilidades en la condición. El código se ejecutará si la variable cumple una de estas posibilidades.
// Es muy util para aceptar valores de variable de diferentes idiomas

let animal = 'pajaro';

if (animal === 'pajaro' || animal === bird) {
    console.log('Mi mascota es un pájaro');
}

// Condicionales con "Y lógico" (&).- El operador Y lógico sirve para aplicar varias condiciones. Se tiene que cumplir la condición de dos variables con X valor, o de varias propiedades de un objeto para que se ejecute el código
let hasUser = true;
let isPremiumUser = true;

if (hasUser && isPremiumUser) {
    console.log('Mostrando contenido Premium');
} else {
    console.log('No puede acceder a este contenido');
}

// VALORES TRUTHY & VALORES FALSY

// Hay valores de variable que JS por defecto considera true o false, con lo que se cumplirá o no la condición para ejecutar el código:
// - Valores Truthy: 'decseraset' (que haya texto en un string), 12345 (cualquier número que no sea 0), true, [] (cualquier array vacio o no), {} (cualquier objeto vacio o no)
// - Valores Falsy: '' (cadena string vacia), 0, false, undifined, null

// La condición únicamente incluye el nombre de la variable, sin operador. Si la variable tiene valor truthy se ejecutará el codigo

let myCondition = '';

if (myCondition) {
    console.log('Se cumple la condición');
} else {
    console.log('No se cumple la condicion');
}

// Se puede utilizar para comprobar si hay un usuario creado o no
let userName = '';

if (userName) {
    console.log('Usuario creado');
} else {
    console.log('No existe usuario');
}

// Se usa para mostrar los productos agregados a un carrito o para mostrar que carrito está vacío (si el valor es falsy 0)
let cartProduct = 3;
if (cartProduct) {
    console.log('Su carrito tiene ' + cartProduct + ' productos');
} else {
    console.log('Su carrito está vacío');
}


// METODO 2 : SWITCH -  CASE
// Es otro método para definir condicionales, en este caso solo de igualdad. 
// Con "switch" llamamos a la variable, y con "case" ponemos la condición, es decir, el valor que tiene que tener para que se ejecute el código. Cada "case" se cierra con "break". Pueden definirse varios "case".
// El último condicional para ejecutar un código en caso de que no se cumplan los anteriores requisitos, se define con "default".
// switch = if; case-break = ()-{}; default = else; 

let day = 'viernes';

switch (day) {
    case "lunes":
        console.log('Hoy es lunes');
        break;
    case "martes":
        console.log('Hoy es martes');
        break;
    default:
        console.log('Es cualquier otro dia');
        break;
}

// Equivalencia bloque anterior a if - else

// if (day = lunes) {
//    console.log('Hoy es lunes');
// } else if (day = martes) {
//    console.log('Hoy es martes');
// } else {
//    console.log('Es cualquier otro día')
// }


// METODO 3 : OPERADORES TERNARIOS
// Es un tercer método para definir condiconales. Se parte de un operador con la variable de tal forma: conidción ? (codigo que ejecuta si la condición es cierta) : (código que ejecuta si no se cumple)

let Myage = 37;

Myage > 18 ? console.log('Soy mayor de edad') : console.log('Soy menor de edad');