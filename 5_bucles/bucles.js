console.log('bucles!');

// Los bucles permiten reducir mucho código, ya que repiten líneas de código todas las veces que queramos, sin necesidad de volver a escribirlas. Se define el código una vez y se mete en un bucle
// Existen diferentes métodos para definir un bucle:

// METODO 1 : FOR
// Se define con for(variable a repetir que sirve de inicio; condicion para definir cuando para el bucle, operación con la variable a imprimir)

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('Se ha terminado el bucle')
// Este ejemplo sería, la variable i = 0, hasta que i coja el valor de 10, debe imprimir i +1.

const students = ['Maria', 'Ana', 'Jose', 'Juan'];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
console.log('No hay más estudiantes');
// Este 2º ejemplo parte de la variable i = 0, y hasta que termine el array (students.length), debe imprimir un valor más desde i

let movies = [
    'Harry Potter',
    'Star Wars',
    'Star Trek',
    'El Señor de los Anillos',
    'Scream',
    'Dune',
    'El Rey León'
]

console.log('Películas que empiezan por S del índice 2 al 5')
for (let i = 2; i <= 5; i++) {
    if (movies[i].charAt(0) === 'S') {
        console.log(movies[i]);
    }
}

// MÉTODO 2 : WHILE
// Este método necesita definir la variable fuera del bucle.
// El bucle se define con while (condición) {codigo a ejecutar; acción del bucle}
// Si el valor de la variable no entra en la condición, no se imprime nada, es decir, no se ejecuta el código

let counter = 0;

while (counter < 5) {
    console.log('Counter: ' + counter);
    counter++;
}
// Este ejemplo imprime la variable counter desde su valor 0, mientras sea menor que 5, añadiendo un valor más en cada nueva línea


// MÉTODO 3 : DO - WHILE
// Es un método practicamente igual al anterior, se define el código a ejecutar antes que la condición, por lo que se ejecuta por al menos una vez
// Se define con do {código a ejecutar; acción del bucle} while (condición)

counter = 9;
do {
    console.log('Do while counter: ' + counter);
    counter++
} while (counter < 15)
// Esto se lee, muestra el valor de counter, sumándo 1 cada nueva línea, mientras que counter sea menor que 15


// MÉTODO 3 : FOR - OF
// Se utiliza para extraer los elementos de una variable array.
// Es equivalente al método FOR, pero tiene una síntaxis mas sencilla. Se define con for (let nueva_variable of variable_array). 

const animals = ['pajaro', 'perro', 'gato', 'pez', 'tortuga'];

for (let element of animals) {
    console.log(element);
}
// Extrae mediante una nueva variable element, cada uno de los componentes de la variable array animals.

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

console.log('Listado de productos con precio');
for (let product of products) {
    let fullPrice = product.price * 1.21;
    console.log(product.productName, '-', fullPrice + '€');
}
// Este bucle sobre array objeto es más complejo. Permite sacar el listado de productos con precio, definiendo una nueva variable "product" que extraiga las propiedades de cada elemento del array objeto que define el código a ejecutar (console.log).
// En este caso se ha creado una nueva variable "fullPrice" en el bucle con la operación de multiplicar el precio base por 1.21, para mostrar el precio con IVA

// Es equivalente al siguiente bucle FOR, pero en este establecemos la condición de que pare cuando la variable i a imprimir sea igual a la cantidad de elementos del array.
// for (let i = 0; i < products.length; i++) {
// let fullprice = products[i].price * 0.21;    
//    console.log(products[i].productName, '-', fullPrice);
// }


// MÉTODO 4 : FOR - IN
// Sirve para obtener las claves o propiedades de un array objeto

const book = {
    title: '1984',
    author: 'George Orwell',
    pages: 100
}

// Para cada propiedad ('key') del array ('book') ejecuta el código ('mostrar por consola'):
console.log('Propiedades de los libros')
for (let key in book) {
    console.log(key); // Muestra propiedades
    console.log(book[key]); // Muestra el valor de cada propiedad. Para ello se define con el array y la varible creada para las propiedades entre []: (array[key])
}

// METODO BUCLE - FOREACH 
// Es un método de los array para extraer un listado de los elementos del array, y en caso de los array objeto también sus propiedades

console.log('Listado de productos')
products.forEach((product) => {
    console.log(product);
})