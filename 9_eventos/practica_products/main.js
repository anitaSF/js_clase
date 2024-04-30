console.log('Productos!');

const products = [
    {
        name: 'Ordenador',
        price: 100,
        isAvailable: true
    },
    {
        name: 'Television',
        price: 500,
        isAvailable: true
    },
    {
        name: 'Teclado',
        price: 40,
        isAvailable: false
    }
]

const productList = document.querySelector('.product-list');
const shoppingCart = document.querySelector('.shopping-cart');

// Creamos una funcion que englobe todos los métodos necesarios para crear los elementos html necesarios para mostrar un producto
function addProduct(product) {
    const li = document.createElement('li'); // Creamos elemento html "li" (cada producto será un elemento de la lista)
    li.classList.add('product-items');

    const h2 = document.createElement('h2'); // Creamos "h2" para nombre de producto
    h2.innerHTML = product.name; // Damos contenido al "h2" con la propiedad "name" de cada elemento del array objeto (product.name)
    if (product.isAvailable) {
        h2.classList.add('available');
    } else {
        h2.classList.add('unavailable');
    } // Definimos la condicion que si está disponible el texto "h2" tenga una clase css o no

    const p = document.createElement('p'); // Creamos "p" para mostrar el precio del producto
    p.innerHTML = product.price + '€'; // Damos contenido al "p" con la propiedad "price" de cada elemento del array objeto (product.list)

    li.appendChild(h2); // Colocamos el elemento "h2" dentro del elemento padre "li"
    li.appendChild(p); // Colocamos el elemento "p" dentro del elemento padre "li"

    productList.appendChild(li); // Colocamos el elemento "li" con todos los productos dentro del contenedor lista "ul"
}

// Definimos un bucle con método forEach con la función anterior definida, para que se cree un nuevo elemento html "li" con el contenido definido para cada elemento "product" del array objeto "products"
products.forEach((product) => {
    addProduct(product);
})

// Evento definido para ejecutar un código x al hacer click sobre cada producto. En este caso, mostrar en consola las propiedades, eliminar de la lista de productos, y añadir a la ul del carrito de la compra 
const productItems = document.querySelectorAll('.product-items');

productItems.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item);
        // productList.removeChild(item);
        shoppingCart.appendChild(item.cloneNode(true));
    })
})

// Si en vez de pasar el item de la <ul class=productList> a la <ul class=shoppingCart>, queremos que se mantenga en ambas, usaremos el método para clonar nodo (item.cloneNode(true))