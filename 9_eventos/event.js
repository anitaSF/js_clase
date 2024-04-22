console.log('events!');

// Un Evento es todo lo que pasa en una página web
// Se definen con el método "addEventListener" ejecutado sobre un elemento seleccionado en una variable.
// Se necesitan dos argumentos indicados dentro del paréntesis ("action", callback (arrow sentence)).

const title = document.querySelector('#title');

title.addEventListener('click', () => {
    console.log('Soy un titulo clicado');
})



const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log('Se ha pulsado un botón');
        console.log(e.target.id);
    })
})
// De ha creado un bucle con el metodo forEach para definir un evento sobre cada uno de los elementos de la coleccion html obtenidos en un selector. Así nos ahorramos definir un evento para cada uno de los índices de la colección html.
// Cada vez que se haga click sobre uno de los btn seleccionados en el html, se ejecuta el código del evento (en este caso mostrar una frase)

const form = document.querySelector('form');
const user = document.querySelector('#username');
const submit = document.querySelector('#submit');
console.log(form, user, submit);




