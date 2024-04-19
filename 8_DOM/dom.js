console.log('DOM!');

// DOM significa Document Element Mode (Modelo de Objetos del documento). Es el arbol o jerarquia de elementos que constituye un doumento html
// Estos elementos pueden ser modificados con JavaScript mediante métodos

// SELECCIÓN DE ELEMENTOS HTML
// Para poder modificar un elemento, debemos seleccionarlo mediante un objeto "document" asociado a un método que buscará en el documento los elementos asociados al Id, Class, TagName (etiqueta html), selector css... definido entre el párentesis

// getElementById()

const h1ById = document.getElementById('title');
console.log('Selección del h1 Id = title: ', h1ById);
// Selecciona el elemento del html definido con el Id = "title"


// getElementsByTagName()

const pElements = document.getElementsByTagName('p');
console.log('Selección de todas las etiquetas p: ', pElements);
// Selecciona todos los elementos definidos por una etiqueta <p></p>. Al haber varios, muestra un HTML Collection (una colección de elementos Html)

// Para seleccionar un elemento determinado de esta colección devuelta por el método selector, funciona igual que al mostrar los elementos de un array.
// Creamos una variable y la igualamos a la colección de HTML con un índice determiando definido entre los corchetes (nueva_variable = variable_HTMLCollectio[n])
const p0 = pElements[0];
const p1 = pElements[1];
console.log('Selección del <p> con índice 1: ', p1);


// getElementsByTagName()

const textElements = document.getElementsByClassName('text');
console.log('Selección de todas las etiquetas class = text: ', textElements);
// Selecciona los elementos del html definidos con la class = "text"
// Igual que el anterior, selecciona una HtmlCollection, por lo que para atacar a un elemento determinado deberemos de crear una variable que llame a su índice
const h1Text = textElements[0];
console.log('Selección del elemento class = text con índice 0: ', h1Text);


// Actualmente, los métodos que más se utilizan porque sirven para atacar a todos los elementos del html, son los métodos selector css. Dentro del paréntesis se define el selector css del elemento al que queremos atacar

// querySelector()
const titleElem = document.querySelector('#title');
console.log(titleElem);
// Selecciona el elemento con id = title

const h1TitleElem = document.querySelector('h1.text');
console.log(h1TitleElem);
// Selecciona el elemento h1 con class = text


// querySelectorAll()

const divElems = document.querySelectorAll('div');
console.log('Selección de todos los elementos <div>: ', divElems);
// Selecciona todos los elementos con selector css <div></div>. Dará de resultado un NodeList, lista de elementos div del html

// Para atacar a un elemento determinado deberemos de crear una variable que llame a su índice
const div1 = divElems[0];
console.log('Selección del div índice 0: ', div1);


// MODIFICAR ELEMENTOS HTML
// Una vez seleccionado un elemento, podemos atacar a una de sus propiedades o contenido llamándolo por la variable definida para llamarlo


// innerHTML 
// Cambia el contenido de la etiqueta por el nuevo definido

titleElem.innerHTML = 'Nuevo Título';


// setAttribute('atributo', 'nuevo_valor')
// Cambia los atributos de una etiqueta definidos en el html original

titleElem.setAttribute('id', 'patata');
console.log('Nuevo atributo id para el h1: ', titleElem);


// classList.add('nuevaClase')
// Asigna una clase definida en css a un elemento html

titleElem.classList.add('big');
p1.classList.add('red');

// classList.remove('claseEliminar')
// Le quita una clase asignada a un elemento html
p1.classList.remove('red');


// CREAR ELEMENTOS HTML
// Para crear un nuevo elemento en html, debemos seguir 3 pasos:
// 1. Crear una nueva variable que lo guarde donde creamos el nuevo element > document.createElement()
// 2. Dar contenido al elemento variableElem.innerHTML
// 3. Ubicamos el elemento en la estructura del HTML > elemPadre.appendChild(). Por defecto se ubican al final del elemento padre
// * Si necesitamos definir la ubicación exacta del elemento HTML dentro del contenedor, utilizaremos este otro método > insertBefore()

// document.createElement('nuevoElemento')
const h2elem = document.createElement('h2'); //Creamos el elemento h2

h2elem.innerHTML = 'Contenido creado dinámicamente'; // Damos contenido al nuevo elemento
console.log('Nuevo elemento h2 creado: ', h2elem);

// appendChild('nuevoElemento')
div1.appendChild(h2elem); // Ubicamos el nuevo elemento dentro de un contenedor (elemento padre) del html

const section = document.createElement('section');
const h3elem = document.createElement('h3');

h3elem.innerHTML = 'Texto para el h3 de la seccion';
section.appendChild(h3elem);
console.log(h3elem);

const body = document.querySelector('body'); // Debemos seleccionar el elemento html body, que previamente no habiamos hecho
body.appendChild(section);

// setAttribute('atributo', 'valorAtr')
// Asigna un atributo a un nuevo elemento html creado o a uno ya existente

section.setAttribute('id', 'my-section');
// Se le ha asignado el atributo id = my-section al nuevo elemento 'section'


// insertBefore(nuevoElem, elemRef)
// Define exactamente la ubicación del nuevo elemento html respecto a un elemento existente, encima del cual se colocará

const newP = document.createElement('p');
newP.innerHTML = 'Esto es un parrafo dinamico';

div1.insertBefore(newP, p1); // El nuevo párrafo se ubicará dentro del contenedor div1 arriba del p1 ya existente


// ELIMINAR ELEMENTOS HTML

// removeChild()

// body.removeChild(section);
// Elimina el elemento section dentro del contenedor body


// div1.innerHTML = '';
// Elimina todo el contenido de la etiqueta div1, pero el elemento contenedor la mantiene







