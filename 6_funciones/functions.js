console.log('Funciones!');

// Las funciones son bloques de código que podemos ejecutar cada vez que necesitemos, para lo cual hay que darle un nombre. Su utilidad es ejecutar muchas líneas de código sólo escribiendo una para llamarla.

// FUNCTION STATEMENT
// Una funcion se crea con "function" + nombre de la funcion + () + {codigo a ejecutar}
function sayHello() {
    console.log('Hola');
    console.log('Hola');
    console.log('Hola');
    console.log('Hola');
}
// Una función no se imprime en pantalla únicamente por crearla, hay que llamarla o ejecutarla. Para ello únicamente se escribe su nombre + ()
// Se puede ejecutar tantas veces como queramos
sayHello();

// Hay funciones más complejas que necesitan un argumento para que ejecuten su código. Este valor se introduce entre los paréntesis escritos tras su nombre
function sayMyName(userName) {
    console.log("Hola", userName);
}

sayMyName('Ana');
sayMyName('Pedro');

function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(5, 10);
sum(20, 6);

// Cuando queremos que una función nos devuelva un valor, definimos su código interno a ejecutar con "return". 
// Este valor lo debemos guardar en una variable para que se pueda mostrar

// Metodo 1 - crear variable fuera del bloque de la funcion (menos recomendable). En el return se define el código a ejecutar.
function multiply(num1, num2) {
    return num1 * num2;
}

let result = multiply(10, 4);
console.log(result);

// Metodo 2 - crear la variable dentro del bloque de la funcion (RECOMENDABLE). La variable recoge el código a ejecutar, y el return devuelve o recoge la variable creada dentro del bloque. Para que se ejecute e imprima el código, debemos crear una nueva variable fuera del bloque que equivalga a la funcion
function multi(number1, number2) {
    let mResult = number1 * number2;
    return mResult;
}
// El return marca el cierre de ejecución del codigo del bloque.

let multiResutl = multi(10, 3);
console.log(multiResutl);

// Funciones con condicionales
// Para poder ejecutar más de un return dentro del bloque de una función debemos utilizar condicionales. La lógica interna de una función puede tener tanta complegidad como necesitemos
function divide(num1, num2) {
    let isEven;
    if (num1 % 2 === 0) {
        isEven = true
    } else {
        isEven = false
    }
    if (isEven) {
        return num1 / num2;
    } else {
        return (num1 + 1) / num2;
    }
}
// Este ejemplo crea una función con argumento "function divide(num1, num2)", dentro se crea una variable "isEven" definida por una primera condición (si num1 es par la variable adquiere el valor true, si no es par le da el valor false). Y añade una segunda condicional (si isEven salió true, hace una división entre num1 y num2, y si isEven salio false, hace la división con num1 +1)

let divResult = divide(10, 5);
console.log(divResult);
// Para utilizar esta función debemos meterla en una variable externa que podamos utilizar en todo nuestro código, pues las variables internas a un bloque de función solo se ejecuta dentro del bloque


function isOutOfAge(user) {
    if (user.age >= 18) return true;
    return false;
}
// El equivante a esta función con condicional pero más sencilla y legible seria:
// function isOutOfAge(user) {
//    if (user.age >= 18) {
//        return true;
//    } else {
//        return false;
//    }
// }

const userObj = {
    username: 'Pepe',
    age: 10,
    isOnLine: true,
};

let isOld = isOutOfAge(userObj);
console.log('¿Es mayor de edad? ', isOld);
console.log('Tiene ' + userObj.age + ' años')

// Funciones con bucles

function numbersSum(nums) {
    let result = 0;

    for (let num of nums) {
        result += num;
    }
    return result;
}

const numbers = [10, 20, 30];

let totalSum = numbersSum(numbers);
console.log('El resultado de la suma del array es: ', totalSum);
// En esta función se suman los valores de un array.
// Para ello le damos un atributo a la funcion al crearla "numbersSum(nums)". Este atributo recibirá los valores que demos a cada array.
// Para sumar los valores, debemos crear una variable que parta de 0 "let result = 0" y definir un bucle que vaya cogiendo cada uno de los valores del array y sumandolos al anterior:
// for (let num of nums) > para cada valor "num" del array "nums" (atributo de la funcion), se ejecuta el código "result += num" (coger la variable result, que es 0, se suma e iguala a cada uno de los valores, es decir, coge el número de cada valor y se lo suma al anterior o al resultado de los anteriores).
// Con "return result" guardamos el resultado de la suma de cada vuelta del bucle para que al iniciarlo de nuevo, se vayan sumando los sucesivos valores. El bucle se reiniciará tantas veces como valores tenga el array


// Se pueden concatenar funciones, es decir crar funciones dentro de otras. NO es practica recomendable
sum(multiply(5, 1.21), multiply(10, 1.21));

// Para crer un código más límpio, estas funciones internas se suelen definir con variables, y la función general se llama a partir de estas
let prod1Price = multiply(5, 1.21);
let prod2Price = multiply(10, 1.21);
sum(prod1Price, prod2Price);


// Otras formas de definir una función

// FUNCTION EXPRESSION
// La función se define con una variable constante: "const variable = function(argumento) {}". Automaticamente la función coge el nombre dado a la variable
// Igualmente debe ser definida antes de usarla
// Se aplica igual que la Statement station. Se debe guardar en una variable y devolverla con return
const sayBay = function () {
    console.log('bye');
}

sayBay()


// ARROW FUNCTIONS
// Se define también como una variable constante pero sin el término function: "const variable = (argumento) => {}"
const sayPotato = () => {
    console.log('Potato');
}

sayPotato();

const concat = (str1, str2) => {
    return str1 + str2;
}

console.log(concat('aaa', 'bbb'));

// En estas funciones se puede compactar la sintaxis eliminando los corchetes y el return
const frase = (word1, word2) => word1 + word2;

console.log(frase('hola', 'mundo'));


// CALLBACKS
// Es una función que se pasa como argumento a otra función. Se ejecutará la función llamada en el argumento de la función (callback)

// Se pueden crear a partir de Function Statement o function Espression
function f() {
    console.log('Estoy dentro de la funcion F');
}
f();

function g() {
    console.log('Estoy dentro de la funcion G');
}
g();

// Ejecuta el mismo código de las funciones "f" y "g" con una sola función callback "caller"
function caller(callback) {
    callback();
}
caller(f);
caller(g);

// El tipo de función Callback tambien se puede crear también partiendo de Arrow Functions.
const a = () => {
    console.log('Soy la funcion A');
}
a();

const b = () => {
    console.log('Soy la función B');
}
b();

function caller(cb) {
    cb();
}

caller(a);

// En el caso que necesitemos que el callback ejecute una función que ya tiene argumento, y necesita un parámetro para que se ejecute, se le debe dar un segundo argumento a la función callback que será este argumento de la función original
function callerWithParams(cb, param) {
    cb(param);
}

const sayYourName = (name) => {
    console.log(name);
}

sayYourName('Ana');

callerWithParams(sayMyName, "Adrian");




