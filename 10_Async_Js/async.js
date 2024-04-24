console.log('Async JS!');

// El JavaScript Asyncromo programa acciones de ejecutar código en base a procesos anteriores que se tienen que terminar de ejecutar, o en base a un tiemop definido por el método setTimeout(callback, tiempo);
// El resto del código seguirá ejecutándose

setTimeout(() => {
    console.log('Console log dentro de setTimeout');
}, 500);

console.log('Console log fuera');
// Con este ejemplo vemos como se carga primero el console.log fuera que el escribo líneas arriba, que está programada para esperar 2seg a ejecutarse


// PROMESAS
// Una promesa es una variable objeto con un comportamiento característico. Queda pendiente para ejecutarse hasta que se resuelva un proceso o consulta, que tiene que definir si la promesa se resuelve o no, lo cual provoca que se ejecute un código u otro

// Las promesas se componen de dos callback: resolve (codigo que se ejecuta si la promesa se resuelve) y reject (código que se ejecuta si la promesa no se resuelve). La condición será un valor truthy o falsy
// Se utilizan dentro de una función, es decir, la promesa es el código que devuelve una funcion al ejecutarse.

const condition = true;

function myPromise() {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve();
        } else {
            reject();
        }
    });
}

// Para ejecutar la promesa, se llama a la función que devolverá la promesa aplicándole dos métodos, uno para definir el código a ejecutar si se cumple "then(cb)", y otro para definir el código a utlizar si no se cumple "catch(cb)"
myPromise()
    .then(() => console.log('La promesa se ha resuelto'))
    .catch(() => console.log('Ha habido un error'));



const condRecipe = true;

const recipe = [
    '1. Cortar verduras',
    '2. Meterlas al horno',
    '3. Limpiar la carne',
    '4. Cocinar la carne en la sartén',
    '5. Mezclar la verdura y la carne'
] // Definimos array de pasos de recetas (datos a consultar por la promesa)

function getRecipeStep(step) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(recipe[step]);

            if (recipe[step]) {
                resolve();
            } else {
                reject();
            }
        }, 1000)
    });
} // Definimos la función que nos devolverá la promesa (mostrar los pasos de la receta), resuelta si se cumple la condición (el paso X de la receta existe), o no resuelta si no se cumple (hay un paso de la receta que no existe). El tiempo de espera para la consulta de cada paso es de 1 seg


// SINTAXIS .then
getRecipeStep(0)
    .then(() => getRecipeStep(1))
    .then(() => getRecipeStep(2))
    .then(() => getRecipeStep(3))
    .then(() => getRecipeStep(4))
    .catch(() => console.log('Ha habido un error. No se pueden mostrar los pasos de la receta'))
// Mostramos la información llamando a la función y aplicándo el método de la promesa .then() para ejecutar el código cuando se cumple la condicion (tantas veces se necesite, en este caso tantos pasos de receta haya), o .catch() para ejecutar el código si la promesa no se resuelve


// SINTAXIS async/await
// Es una alternativa al método anterior para mostrar la promesa. 
// Se define una funcion con un bloque "try" donde se define mediante "await" el código a ejecutar si se cumple la promesa, y otro bloque "catch" donde se define el código a ejecutar si la promesa da error

async function getCompleteRecipe() {
    try {
        await getRecipeStep(0);
        await getRecipeStep(1);
        await getRecipeStep(2);
        await getRecipeStep(3);
        await getRecipeStep(4);
        console.log('Buen provecho!');
    } catch {
        console.log('Ha habido un error');
    }
}

getCompleteRecipe(); // Para mostrar el resultado debemos llamar a la función como siempre
