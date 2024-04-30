// Las peticiones sirven para solicitar conjuntos de datos con los que trabajar a una API. En las APIs los datos están el formato .json (lenguaje similar y compatible al JavaScript)


// SINTAXIS async/await
// Para trabajar con esta información tenemos que crear una función async que engloble la petición. Esta petición es una promesa con sus dos callback (try, catch). El código que se ejecuta si la promesa se resuelve (try), o si no se resuelve (catch).
// Si la promesa se resuelve, se define el código a ejecutar con await:
// 1. Solicitar la información a la API. Para ello creamos una variable donde guardarla: const nombre_variable1 = await fetch("url_API");
// 2. Traducir esta información a lenguaje legible. Para ello creamos otra variable: const nombre_variable2 = await response.json();
// 3. Imprimimos en pantalla esta información: console.log(nombre_variable2)
// Por último, se define el código a ejecutar si la función no se resuelve, con catch.

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// Llamamos a la función para que se ejecute
getUsers();

// SINTAXIS .then
// Funciona de la misma manera que la anterior, pero no es necesario crear una función, directamente se ejecuta la promesa para que ejecute un código si se resuelve .then(), o si no se resuelve .catch()

// fetch("https://jsonplaceholder.typicode.com/users");
// .then(() => response.json)
// .then(() => response.data)
// .catch(() => console.log('Ha habido un error');)
