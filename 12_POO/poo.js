console.log('POO - clases!');

// La programación destinada a objetos consiste en crear nuevos objetos a partir de clases previamente definidas, para obtener un código más esquematizado y sencillo

// Definimos la clase a partir de la cual crearemos nuevos objetos según su tipo y propiedades marcadas: class nombre_clase{prop1; prop2;...}
class Book {
    // Estas propiedades no son nececsario escribirlas, con llamarlas en el método constructor mediante this ya se están creando
    title;
    #author; // Para convertir una propiedad en privada y que no se pueda acceder desde fuera de la definición de la clase, añadimos antes "#"

    pages = 100; // Se pueden definir propiedades con valor fijo para todos los objetos

    // Hay que aplicar un método para que se ejecute la creación de un nuevo objeto: "constructor(prop1, prop2...) {this.prop1 = prop1; this.prop2 = prop2;}"
    constructor(title, author) {
        this.title = title;
        this.#author = author; // Cada propiedad se itera mediante una variable (this.prop)
    }

    // La POO tiene diferentes MÉTODOS. Se deben definir dentro de la clase creada
    // Son funciones que ejecutan un código con las variables ${this.prop} definidas para iterar cada propiedad

    // GET: Métodos para recuperar propiedades del objeto
    getInfo() {
        console.log(`Libro: ${this.title}, Author: ${this.#author}, Pages: ${this.pages}`)
    }

    // SET: Metodos para modificar propiedades del objeto.
    // Esto es muy util para modificar valores de propiedades privadas
    setAuthor(author) {
        this.#author = author;
    }

}

// Para crar un nuevo objeto, creamos una variable donde guardarlo, y mediante el método "new nombre_clase('valor_prop1', 'valor_prop2')"
const book1 = new Book('Harry Potter', 'J.K.Rowling');
console.log(book1);

const book2 = new Book('1984', 'George Orwell');
console.log(book2);

book1.getInfo();

book2.setAuthor("Orwell");
book2.getInfo();


// Se pueden crear clases por herencia, SUBCLASES o clases hija, a partir de las propiedades ya definidas por una clase padre o superclase: 
// class nombre_subclase extends nombre_superclase {
// constructor(prop_heredadas + prop_nuevas)
// super(prop_heredadas)
// this.prop_nueva = prop_nueva (esto se repetira tantas veces como propiedades nuevas se definan)
// }
class Novel extends Book {
    constructor(title, author, genre) {
        super(title, author);
        this.genre = genre;
    }
}

const book3 = new Novel('El Código Da Vinci', 'Dan Brown', 'Novela negra');
console.log(book3);

// Automáticamente los objetos creados con una subclase, heredan a parte de las propiedades, los métodos definidos en la clase padre
book3.getInfo();











