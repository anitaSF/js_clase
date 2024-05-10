console.log('Arrays!');

// Un Array es una sucesion de valores, cada uno tiene un lugar, y se puede acceder al Array entero con todos su valores, o a uno de sus elementos
// Se suelen definir como variables constantes "const" ya que lo que se suele cambiar de valro son sus elementos, no su composicion

// Array tipo numerico
const numArray = [10, 20, 30, 40];

console.log('Array numérico', numArray);
console.log('numero con índice 3: ', numArray[3]); // Para acceder a un elemento de un array se debe llamar mediante su índice, indicándolo entre corchetes: array[i]. La primera posición por defecto es [0]

// Array tipo string
const countries = ['Spain', 'Mexico', 'Francia', 'Italia'];

console.log('Array string paises: ', countries);
console.log('Pais con índice 3: ', countries[0]);

// Array tipo objeto.- todos los elementos tienen la misma estructura de datos
const products = [
    {
        productName: 'zapatillas',
        price: 50,
        isForSale: false
    },
    {
        productName: 'libro',
        price: 20,
        isForSale: false
    },
    {
        productName: 'videojuego',
        price: 60,
        isForSale: true
    },
]

console.log('Array objeto productos: ', products);
console.log('Producto con índice 2: ', products[2]);

// Modificar valores de una propiedad.
// Se llama al elemento mediante su índice y se le asigna un nuevo valor: array[i] = 'nuevo_valor'
const cars = ['Saab', 'Volvo', 'BMW'];
console.log('Listado coches: ', cars);

cars[0] = 'Seat';
console.log('Cambio coche Saab por Seat: ', cars);

// Podemos mostrar los elementos de un array solo con sus valores, sin estructura array. Para ello, lo llamamos con "..." delante del array

console.log('Paises sin estructura array: ', ...countries);


// METODOS ARRAY

// LENGHT.- sirve para sacar el número de elementos que compone una variable tipo Array. Se define al imprimir la variable con console.log(variable.length());
console.log('Elementos numéricos:', + numArray.length);
console.log('Paises elegidos: ' + countries.length);
console.log('Productos disponibles: ' + products.length);

// Para acceder al último elemento de una variable array, si no conocemos cuantos elementos tiene, se puede hacer con este método y se le resta 1: array.lenght -1
const ultimoPais = countries.length - 1;
console.log('Último elemento array paises: ', ultimoPais);


// PUSH.- sirve para añadir elementos al final de un array. Se define con la variable.push(nuevo_elemento);
numArray.push(50);
console.log('Añadir elemento numerico al final: ', numArray);

// Se pueden añadir más de un elemento, separando por comas
countries.push('EEUU', 'Germany');
console.log('Añadir 2 paises al array string al final: ', countries);

products.push({
    productName: 'ring',
    price: 100,
    isForSale: true
})
console.log('Añadir producto al array objeto al final: ', products);



// POP.- elimina el último elemento de un Array. Se define al imprimir la variable con console.log(variable.pop()); 
numArray.pop();
console.log('Eliminado ultimo elemento numerico: ', numArray);

countries.pop();
console.log('Eliminado ultimo pais: ', countries);

products.pop();
console.log('Eliminado ultimo producto: ', products);


// UNSHIFT.- añade elementos al principio de un array. Se define con la variable.unsifht(nuevo:elemento);
numArray.unshift(00);
console.log('Añadir elemento numerico al inicio: ', numArray);

countries.unshift('Venezuela');
console.log('Añadir 1 pais al array string al inicio: ', countries);

products.unshift({
    productName: 'car',
    price: 500,
    isForSale: false
})
console.log('Añadir 1 producto al array objeto al inicio: ', products);


// SHIFT.- elimina el primer elemento de un Array. Se define con la variable.shift(); al imprimirla en pantalla


// SPLICE.- elimina y/o añade elementos en una determinada posición. Se define con la variable.splice(indice_elem_eliminar, cantidad_elem_eliminar). 
numArray.splice(1, 2);
console.log('Eliminado 2 elementos a partir del indice 1: ', numArray);

// Para añadir un elemento nuevo, se inserta en último lugar dentro del paréntesis variable.splice(indice_elem_eliminar, cantidad_elem_eliminar, nuevo elemento)
countries.splice(2, 1, 'London');
console.log('Eliminado 1 pais a partir del indice 2 + añado nuevo pais: ', countries);


// REVERSE.- muestra los elementos en orden inverso al introducido. Se define al imprimir la variable con variable.reverse();
console.log('Mostrar elementos array orden inverso', countries.reverse());


// CONCAT.- une los elementos de diferentes Arrays. Se define con variable1.concat(variable2)
const number = [75, 85, 95];
const allNumber = numArray.concat(number);
console.log('Unir elementos 2 array; ', allNumber);


// SLICE.- Muestra los elementos a partir de la posición indicada con console.log(variable.slice(2));, o entre dos posiciones indicadas si se muestran dos valores con console.log(variable.slice(1, 4));

console.log(numArray);
console.log(numArray.slice(2));

console.log(countries);
console.log(countries.slice(1, 3));


// JOIN.- Muestra los elementos de un array separados por el caracter que introduczcamos entre comillas. Se define al imprimir la variable con console.log(variable.join("-"));
console.log('Elementos numericos separados por / ', numArray.join(" / "));
console.log('Paises separados por -- ', countries.join(" -- "));
console.log('Productos separados por | ', products.join(" | "));


// indexOf.- Da la posición que tiene un determinado elemento. Se define al imprimir una variable con console.log(variable.indexOf(elemento)); 
// Si buscamos un elemento que no existe en el Array devuelve el valor -1
// Solo devuelve la posición del primer elemento con el valor definido
// Con los array de tipo objeto no funciiona bien

console.log(numArray);
console.log('posicion num 30: ' + numArray.indexOf(30));

console.log(countries);
console.log('posicion pais Venezuela: ' + countries.indexOf('Venezuela'));

// Includes.- Nos revela si existe un elemento o no en un determinado Array. Se define al imprimir una variable con console.log(variable.includes(elemento)); Devuelve valor booleano: true (si se incluye el elemento en el array) o false (si no se incluye el elemento en el array)
// Con los array de tipo objeto no funiona bien

console.log('¿Existe el numero 20? ' + numArray.includes(20));
console.log('¿Existe el pais London? ' + countries.includes('London'));
console.log(countries.includes('Costa Rica'));