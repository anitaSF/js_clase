console.log('Peticiones!');

// Para hacer una petición usamos el método fetch a una API externa. Esto nos devuelve una promesa
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()) // Este método permite transformar los datos legibles
    .then((data) => console.log(data)) // Este método imprime los datos recopilados por la promesa