console.log('object');

// Variables tipo Objeto.- Se componen de varios datos de información que definen un producto

let book = {
    title: '1984',
    author: 'George Orwell',
    isGood: true
}

console.log(book);
console.log(book.title);

let hotelRoom = {
    name: 'Suit',
    price: 100,
    fee: 20,
    luxury: {
        pool: true,
        tv: false,
    }
}

console.log('¿Tiene piscina? ' + hotelRoom.luxury.pool);

console.log(hotelRoom.price);
console.log(hotelRoom.price + hotelRoom.fee);

let property = 'price';
console.log('Precio Suit: ' + hotelRoom[property] + '€');