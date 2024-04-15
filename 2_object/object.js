console.log('object');

// Variables tipo Objeto.- Se componen de varios datos de información (propiedades) que definen un producto. Estas propiedades se separan con comas ",". La última propiedad puede tereminar o no con "."
// La consola del navegador imprime las propiedades ordenadas por orden alfabético.

const book = {
    title: '1984',
    author: 'George Orwell',
    isGood: true
}

console.log(book);
console.log(book.title);

// Para mostrar la propiedad de una variable Objeto se llama con console.log(variable.propiedad);
const hotelRoom = {
    name: 'Suit',
    price: 100,
    fee: 20,
    luxury: {
        pool: true,
        tv: false,
    },
    isAvailable: false,
}

console.log(hotelRoom);
console.log('¿Tiene piscina? ' + hotelRoom.luxury.pool);
console.log(hotelRoom.price);
console.log(hotelRoom.price + hotelRoom.fee);

// Las variables Objeto se suelen definir con constantes (const) ya que se suelen modificar el valor de sus propiedades pero no estas propiedades que lo difinen.
console.log('¿Está disponible mañana? ' + hotelRoom.isAvailable);

hotelRoom.isAvailable = true;
console.log('¿Está disponible el 04/05? ' + hotelRoom.isAvailable);

let property = 'price';
console.log('Precio Suit: ' + hotelRoom[property] + '€');

console.log('Precio Suit: ' + hotelRoom.price + '€');

// Se pueden definir propiedades de variables con arrays (serie de datos) e igualmente imprimir el dato que guarda determinada posición o índice) con console.log(variable.propiedad[índice])
const deportiva = {
    name: 'Adidas Runfalcon',
    color: 'black',
    numDispon: [36, 37, 39, 40],
    isFoam: true,
}

console.log(deportiva);
console.log(deportiva.numDispon[2]);

