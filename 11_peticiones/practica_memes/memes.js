console.log('memes!');

const memeList = document.querySelector('.meme-list');

function addMemeItem(meme) {
    const li = document.createElement('li');
    li.setAttribute('id', meme.id);

    const h2 = document.createElement('h2');
    h2.innerHTML = meme.name;

    const img = document.createElement('img');
    img.setAttribute('src', meme.url);
    img.setAttribute('height', 500); // Damos el atributo "height" a la imagen para fijar un tamaño uniforme en todas las imágenes

    li.appendChild(h2);
    li.appendChild(img);

    memeList.appendChild(li);
}

async function getMemes(start = 0, quantity = 1) {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const datos = await response.json(); // Transformamos la información importada en la variable "response" con el método ".json"
        console.log('Datos importados de la API: ', datos);
        const memes = datos.data.memes;
        console.log('Elementos "memes" del objeto "data" importado;', memes);
        const selectedMemes = memes.slice(start, start + quantity); // Seleccionamos "x" memes mediante el método ".slice(indice_elem1, indice_elem1 + cantidad_elem_añadir". Estos argumentos se tienen que añadir también arriba al crear la función. Es recomendable darles valores por defecto, por si al llamar a la función no se definen, no dar error (start = x, quantity = y)
        console.log('Selección de 6 memes: ', selectedMemes);

        selectedMemes.forEach((meme) => {
            addMemeItem(meme);
        });

    } catch (error) {
        console.log(error);
    }
}

// getMemes(10, 6);


// Añadimos un formulario para indicar el intervalo de memes que se deben mostrar

// Seleccionamos los elementos del formulario creado en html para aplicarles el evento
const memesForm = document.querySelector('#memes-form');
const startInput = document.querySelector('#start');
const quantityInput = document.querySelector('#quantity');

memesForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Método para evitar el comportamiento que tienen por defecto los formularios de recargarse automáticamente al clicar el button e impedir que se ejecute el código definido al clicarlo
    const start = startInput.value; // Seleccionamos el valor introducido en el input "#start"
    const quantity = quantityInput.value; // Seleccionamos el valor introducido en el input "#quantity"

    console.log('start: ', start, 'quantity: ', quantity);
    memeList.innerHTML = ""; // Borramos el contenido de memes mostrado en la selección previa, antes de mostrar la nueva seleccion
    getMemes(start, quantity); // Llamamos a la funcion "getMemes", creada para mostrar los memes del intervalo indicado en el argumento, y en este se indican el valor del imput "start" y el valor del input "quantity"
})


// Añadimos un botón para añadir un nuevo meme aleatorio del array de objetos importado de la API

const randomBtn = document.querySelector('#random-btn'); // Seleccionamos el elemento botón creado en html

// Evento aplicado sobre el elemento buttom para crear el nuevo meme
randomBtn.addEventListener("click", () => {
    const maxNum = 100;
    const randomNumber = Math.floor(Math.random() * maxNum); // Metodo "Math.floor(Math.random() * maxNum". maxNum se corresponderá con la cantidad de items que se pueden mostrar
    console.log(randomNumber);
    getMemes(randomNumber); // Llamamos a la funcion "getMemes", creada para mostrar los memes del intervalo indicado en el argumento, y definimos este argumento con la variable del numero aleatorio "randomNumber"
})




