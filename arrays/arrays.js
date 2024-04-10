console.log('Arrays!');

// Un Array es una sucesion de valores, cada uno tiene un lugar, y se puede acceder al Array entero con todos su valores, o a uno de sus elementos
// Se suelen definir como variables constantes "const" ya que lo que se suele cambiar de valro son sus elementos, no su composicion

// Array tipo numerico
const numArray = [10, 20, 30, 40];

console.log(numArray);
console.log(numArray[3]); //Muestra el elemento en 3ª posición (40), ya que empieza a conar por 0.

// Array tipo string
const countries = ['Spain', 'Mexico', 'Francia', 'Italia'];

console.log(countries);
console.log(countries[0]);

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

console.log(products);
console.log(products[2]);

// METODOS ARRAY

// Push.- sirve para añadir elementos a un array. Se define con la variable.push(nuevo_elemento);
numArray.push(50);
console.log(numArray);

countries.push('EEUU');
console.log(countries);

products.push({
    productName: 'ring',
    price: 100,
    isForSale: true
})
console.log(products);

// Length.- sirve para sacar el número de elementos que compone una variable tipo Array. Se define al imprimir la variable con console.log(variable.length());
console.log('Elementos numéricos:', + numArray.length);
console.log('Paises elegidos: ' + countries.length);
console.log('Productos disponibles: ' + products.length);

// Pop.- elimina el último elemento de un Array. Se define al imprimir la variable con console.log(variable.pop()); 
numArray.pop();
console.log(numArray);

countries.pop();
console.log(countries);

products.pop();
console.log(products);

// Unshift.- añade elementos al principio de un array. Se define con la variable.unsifht(nuevo:elemento);
numArray.unshift(00);
console.log(numArray);

countries.unshift('Venezuela');
console.log(countries);

products.unshift({
    productName: 'car',
    price: 500,
    isForSale: false
})
console.log(products);

// Shift.- elimina el primer elemento de un Array. Se define con la variable.shift(); al imprimirla en pantalla

// Splice.- elimina y añade elementos en una determinada posición. Se define con la variable.splice(posición_elemento_ref, elemento_eliminarAPartirDeLaRef, elemento_añadirAPartirDeLaRef)
numArray.splice(1, 2, 99);
console.log(numArray);

countries.splice(2, 1, 'London');
console.log(countries);

// Reverse.- muestra los elementos en orden inverso al introducido. Se define al imprimir la variable con variable.reverse();
console.log(countries.reverse());

// Concat.- une los elementos de diferentes Arrays. Se define con variable1.concat(variable2)

const number = [75, 85, 95];

const allNumber = numArray.concat(number);
console.log(allNumber);

// Slice.- Muestra los elementos a partir de la posición indicada con console.log(variable.slice(2));, o entre dos posiciones indicadas si se muestran dos valores con console.log(variable.slice(1, 4));

console.log(numArray);
console.log(numArray.slice(2));

console.log(countries);
console.log(countries.slice(1, 3));

// Join.- Muestra los elementos de un array separados por el caracter que introduczcamos entre comillas. Se define al imprimir la variable con console.log(variable.join("-"));
console.log(numArray.join(" / "));
console.log(countries.join(" -- "));
console.log(products.join(" | "));

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

console.log('¿Existe el numero 20? ' numArray.includes(20));
console.log('' ountries.includes('London'));
console.log(countries.includes('Costa Rica'));