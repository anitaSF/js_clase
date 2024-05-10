console.log('Advanced Array Methods!');

// Un método es una función pero que actúa sobre una estructura más compleja. 
// Son funciones ya creadas, por lo que para ejecutarlas unicamente hay que llamarlas, no definirlas "variable.method();" 

// Todos los métodos van seguidos de un (callback), es decir utilizan otra función como atributo. Esta función normalmente es creada en la propia definición del atributo del método (entre los paréntesis), y suelen ser Arrow Functions
// array.method((param) => {codigo a ejecutar});
// donde (param) representa cada uno de los elementos del array

// METODO forEach()
// Es un método que sirve para generar bucles. Repite el código a ejecutar en la función por cada elemento del array
const numbers = [10, 20, 30, 40]; // Definimos variable array

numbers.forEach((number) => {
    console.log(number * 2);
});
// Por cada elemento (number) definido en el parámetro del Array Function del array numbers, multiplicalo por 2 e imprimelo.

const students = ['María', 'Paco', 'Ana', 'Juan'];

students.forEach((student) => {
    console.log(student.toUpperCase());
})
// Por cada elemento (student) definido en el parámetro de la Array Function, imprímelo transformandolo todo en mayúscula

const products = [
    {
        productName: 'reloj',
        price: 20,
        color: 'green',
        isAvailable: true
    },
    {
        productName: 'pulsera',
        price: 40,
        color: 'silver',
        isAvailable: true
    },
    {
        productName: 'pendientes',
        price: 10,
        color: 'blue',
        isAvailable: false
    }
]

products.forEach((product) => {
    console.log(product.productName);
})
// Por cada elemento (product) definido en el parámetro de la Array Function, extrae la propiedad del array objeto "productName" de cada uno de ellos


// MÉTODO map()
// Es un método que construye nuevos arrays a partir de elementos de otro array, bien modificados por el código que ejecuta el return, bien igual (crea una copia)
// Para ello, necesitamos crar una nueva variable array que guarde el resultado del código ejecutado por el método: const nombre_nuevoArray = array.map(callback)
// En la funcion definida como atributo callback se debe incluir un return para que vaya guardando los valores generados en el código del bucle y crear el nuevo array

const tripleNumbers = numbers.map((number) => {
    return number * 3;
})
console.log('Nuevo array numbers * 3: ', tripleNumbers);
// Crea un nuevo array "tripleNumbers" creado a partir de los elementos del array "numbers", multiplicado por 3 (código ejecutado por el return)

const studentCopy = students.map((student) => {
    return student;
})
console.log('Copia del array students: ', studentCopy);
// Crea un nuevo array "studentCopy" COPIA del array "students" ya existente

const productsWithIva = products.map((product) => {
    const newPrice = product.price * 1.21;
    return {
        productName: product.productName,
        price: newPrice,
        color: product.color,
        isAvailable: product.isAvailable
    };
})
console.log('Precio con IVA de products ', productsWithIva);
// Crea un nuevo array objeto, copia del array "products", pero con su propiedad "price" multiplicada por 1.21 para añadirle el IVA. Para guardar esta nueva propiedad tenemos que crer una nueva varible dentro del callback "newPrice", que usaremos para definir la propiedad del array anterior "price"


// SPREAD OPERATOR
// Sirve también para crear copias de un array. Se define con "..." delante del array original: nuevo_array = original_array[...]

const studentCopy2 = [...students];
console.log('Copia array students con spread operator: ', studentCopy2);


// METODO filter()
// Es un método que construye nuevos arrays a partir de elementos de otro array que cumplan una condición definida por el return. Esta es la diferencia con el anterior metodo map()
// Para ello, necesitamos crar una nueva variable array que guarde el resultado del codigo ejecutado por el método: const nombre_nuevoArray = array.filter(callback)

const filteredNumbers = numbers.filter((number) => {
    return number > 25;
})
console.log('Numeros mayores de 25: ', filteredNumbers);
// Nuevo array generado por los elementos del array "numbers" que cumplen la condición de ser mayores a 25

const availableProducts = products.filter((product) => {
    return product.isAvailable;
})
console.log('Productos disponibles: ', availableProducts);

// Se puede aplicar el método para filtrar con varias condiciones. Esto se hace mediante los operadores lógicos && (y lógico) y || (o lógico)

const filterNumber = numbers.filter((number) => {
    return number > 25 && number % 2 === 0;
})
console.log('Números >25 y pares: ', filterNumber);
// En este caso el filtro es doble, se crea un array nuevo "filterNumber" con los números >25 y pares (para lo que utilizamos el operador módulo, al dividir el número entre 2, el resto debe ser 0). El operador lógico utilizado es && (y lógico)

