// UNIVERSIDAD ESTATAL DE MILAGRO
// FACULTAD DE CIENCIAS E INGENIERIA
// CARRERA INGENIERIA EN SOFTWARE
// TAREA #4
// MARIA ALEJANDRA GARCIA ROLDAN
// TECNICAS DE PROGRAMACION
// ING. RODRIGO JOSUE GUEVARA REYES
// 14 DE OCTUBRE DEL 2024
// SEGUNDO SEMESTRE
// AGOSTO - DICIEMBRE 2024

// 1. Define una clase Coche que tenga propiedades para marca, modelo
// y año.
class Coche{
    constructor(marca, modelo, año){
        this.marca =  marca
        this.modelo = modelo
        this.año = año
    }
}

coche_1 = new Coche('Toyota', 'Toyota Hilux', 2024)
console.log(coche_1)

// 2.  Descripción: Escribe una función que tome un array de nombres y los
// transforme a mayúsculas
function transformarMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
}

const nombres = ['Alejandra', 'Sofia', 'Valentina'];
const nombresMayusculas = transformarMayusculas(nombres);
console.log(nombresMayusculas); // ['ALEJANDRA', 'JUAN', 'CARLOS']

// 3. Descripción: Crea una función que reciba un arreglo de números y devuelva un nuevo 
// arreglo que solo contenga los números mayores que 10.
function MayorDiez(numeros) {
    return numeros.filter(numero => numero > 10);
}

const numeros = [5, 13, 8, 20, 3, 24];
const mayoresQueDiez = MayorDiez(numeros);
console.log(mayoresQueDiez); // [12, 20, 15]

// 4.  Descripción: Escribe una función que imprima los primeros 10 números naturales 
// usando un bucle while.
function NumerosNaturales() {
    let numero = 1;
    while (numero <= 10) {
      console.log(numero);
      numero++;
    }
}
NumerosNaturales();

// 5. Descripción: Utiliza filter y map para encontrar todos los números en un arreglo 
// que sean mayores que 10 y luego multiplícalos por 2.
function filtrarYMultiplicar(numeros2) {
    return numeros2
        .filter(numero => numero > 10)
        .map(numero => numero * 2);
}
const numeros2 = [5, 13, 8, 20, 3, 24];
const resultado = filtrarYMultiplicar(numeros2);
console.log(resultado);

// 6. Descripción: Implementa una función que recorra una lista hasta encontrar el número 
// 0, momento en el que el bucle deberá terminar. 
function recorrerCero(numeros) {
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] === 0) {
        break;
      }
      console.log(numeros[i]);
    }
}
const lista = [3, 5, 7, 0, 9, 10];
recorrerCero(lista);
// 7. Descripción: Crea una clase Persona que tenga propiedades para nombre, edad y un
// método que devuelva una descripción básica de la persona.
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    descripcion() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad} años`;
    }
}

const persona1 = new Persona('Alejandra', 18);
console.log(persona1.descripcion())

// 8. Descripción: Define una clase Libro con propiedades para título, autor, y año. 
// Agrega un método que devuelva un string con el título y el autor del libro. 
class Libro{
    constructor(titulo, autor, año){
        this.titulo = titulo
        this.autor = autor
        this.año = año
    }

    descripcion2() {
        return `Titulo: ${this.titulo}, Autor: ${this.autor} años.`;
    }
}
const libro1 = new Libro('Orgullo y Prejuicio', 'Jane Austen');
console.log(libro1.descripcion2())

// 9. Descripción: En la clase CuentaBancaria, añade propiedades privadas para titular y 
// saldo. Usa getters y setters para modificar el saldo. 
class CuentaBancaria {
    #titular;
    #saldo;
  
    constructor(titular, saldoInicial) {
      this.#titular = titular;
      this.#saldo = saldoInicial;
    }

    get saldo() {
      return this.#saldo;
    }

    set saldo(nuevoSaldo) {
      if (nuevoSaldo >= 0) {
        this.#saldo = nuevoSaldo;
      } else {
        console.log('El saldo no puede ser negativo.');
      }
    }

    getTitular() {
      return this.#titular;
    }
}
  
const cuenta = new CuentaBancaria('Alejandra', 1000);  
console.log(cuenta.saldo);
  
cuenta.saldo = 500;
console.log(cuenta.saldo);
  
cuenta.saldo = -100;
console.log(cuenta.saldo);

// 10. Descripción: Crea una clase Utilidad que tenga un método estático que convierta 
// grados Celsius a Fahrenheit. 
class Utilidad {
    static celsiusAFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    }
}
 
const Celsius = 25;
const fahrenheit = Utilidad.celsiusAFahrenheit(Celsius);
console.log(`${Celsius}°C son ${fahrenheit}°F`);

// 11.  Descripción: Define una clase Empleado que herede de la clase Persona y añade 
// una propiedad salario.
class Empleado extends Persona{
    constructor(nombre, edad, salario){
        super(nombre, edad)
        this.salario = salario
    }

    descripcionEmpleado() {
        return `${super.descripcion()}, Salario: $${this.salario}.`;
    }
}
const persona2 = new Empleado('Alejandra', 19, 1500)
console.log(persona2.descripcionEmpleado())

// 12. Descripción: Implementa una clase Coche que encapsule las propiedades marca, 
// modelo, y kilometraje y prevenga el acceso directo a kilometraje. 
class Auto {
    #kilometraje;
  
    constructor(marca, modelo, kilometrajeInicial) {
      this.marca = marca;
      this.modelo = modelo;
      this.#kilometraje = kilometrajeInicial;
    }
  
    get kilometraje() {
      return this.#kilometraje;
    }

    aumentarKilometraje(cantidad) {
        this.#kilometraje += cantidad;
    }
  
    descripcionAuto() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Kilometraje: ${this.#kilometraje} km.`;
    }
  }

const coche1 = new Auto('Toyota', 'Corolla', 5000);
console.log(coche1.descripcionAuto()); 
  
coche1.aumentarKilometraje(150);
console.log(coche1.kilometraje);

// 13. Descripción: Crea una clase Tienda que contenga un array de objetos de la clase 
// Producto. Implementa métodos para añadir, remover y buscar productos.
class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }

    descripcionProducto() {
      return `Producto: ${this.nombre}, Precio: $${this.precio}`;
    }
  }

  class Tienda {
    constructor() {
      this.productos = []; 
    }
    
    agregarProducto(producto) {
      this.productos.push(producto);
      console.log(`Producto ${producto.nombre} añadido.`);
    }

    removerProducto(nombreProducto) {
      const index = this.productos.findIndex(producto => producto.nombre === nombreProducto);
      if (index !== -1) {
        const productoRemovido = this.productos.splice(index, 1);
        console.log(`Producto ${productoRemovido[0].nombre} removido.`);
      } else {
        console.log(`Producto ${nombreProducto} no encontrado.`);
      }
    }
    
    buscarProducto(nombreProducto) {
      const productoEncontrado = this.productos.find(producto => producto.nombre === nombreProducto);
      if (productoEncontrado) {
        console.log(`Producto encontrado: ${productoEncontrado.descripcionProducto()}`);
      } else {
        console.log(`Producto ${nombreProducto} no encontrado.`);
      }
    }

    mostrarProductos() {
      if (this.productos.length > 0) {
        console.log('Lista de productos en la tienda:');
        this.productos.forEach(producto => console.log(producto.descripcionProducto()));
      } else {
        console.log('No hay productos en la tienda.');
      }
    }
  }
  
  const tienda = new Tienda();
  const producto1 = new Producto('Laptop', 1000);
  const producto2 = new Producto('Teléfono', 600);

  tienda.agregarProducto(producto1);
  tienda.agregarProducto(producto2);

  tienda.mostrarProductos();

  tienda.buscarProducto('Laptop'); 
  tienda.buscarProducto('Tablet');

  tienda.removerProducto('Teléfono');
  tienda.mostrarProductos();

// 14. Descripción: En la clase Usuario, permite que se añadan propiedades dinámicas 
// que no están definidas en el constructor como hobbies o intereses. 
class Usuario {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    descripcionUsuario() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad} años.`;
    }
  }

  const usuario1 = new Usuario('Alejandra', 18);

  usuario1.hobbies = ['Dormir', 'Programar'];
  usuario1.intereses = ['Tecnología', 'Música'];

  console.log(usuario1.descripcionUsuario());
  
  console.log(`Hobbies: ${usuario1.hobbies.join(', ')}`);

  console.log(`Intereses: ${usuario1.intereses.join(', ')}`);

// 15. Descripción: Define una clase Configuracion donde ciertas propiedades como 
/// nombreDeUsuario no puedan modificarse después de ser inicializadas. 
class Configuracion {
    constructor(nombreDeUsuario) {
      this._nombreDeUsuario = nombreDeUsuario;
    }

    get nombreDeUsuario() {
      return this._nombreDeUsuario;
    }

    mostrarConfiguracion() {
      return `Nombre de usuario: ${this.nombreDeUsuario}`;
    }
  }

  const config = new Configuracion('Alejandra123');
  
  console.log(config.mostrarConfiguracion());
  
  config.nombreDeUsuario = 'NuevoUsuario';
  
  console.log(config.mostrarConfiguracion()); 
  
// 16. Descripción: En la clase Persona, asegura que la edad no pueda ser menor que 0 ni 
// mayor que 120 usando setters. 
// class Persona {
//     constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }
    
//     get edad() {
//       return this._edad;
//     }

//     set edad(valor) {
//       if (valor < 0 || valor > 120) {
//         console.log('La edad debe estar entre 0 y 120 años.');
//         this._edad = 0;
//       } else {
//         this._edad = valor;
//       }
//     }

//     descripcion() {
//       return `Nombre: ${this.nombre}, Edad: ${this.edad} años`;
//     }
//   }
  
//   const persona3 = new Persona('Alejandra', 25);
//   console.log(persona3.descripcion()); 
 
//   const persona4 = new Persona('Juan', 130); 
//   console.log(persona4.descripcion()); 

// 17. Descripción: Implementa una clase Cadena que tenga métodos para contar número de 
// vocales, invertir la cadena, y verificar si es un palíndromo. 
class Cadena {
    constructor(texto) {
      this.texto = texto.toLowerCase();
    }

    contarVocales() {
      const vocales = ['a', 'e', 'i', 'o', 'u'];
      let contador = 0;
  
      for (let letra of this.texto) {
        if (vocales.includes(letra)) {
          contador++;
        }
      }
      return contador;
    }
  
    invertir() {
      return this.texto.split('').reverse().join('');
    }
  
    esPalindromo() {
      const textoSinEspacios = this.texto.replace(/\s+/g, '');
      const textoInvertido = this.invertir().replace(/\s+/g, '');
      return textoSinEspacios === textoInvertido;
    }
  }
  
  const cadena1 = new Cadena('Anita lava la tina');
  
  console.log(`Número de vocales: ${cadena1.contarVocales()}`);
  
  console.log(`Cadena invertida: ${cadena1.invertir()}`);
  
  console.log(`Es palíndromo: ${cadena1.esPalindromo()}`);

// 18. Descripción: Implementa la clase Calculadora de modo que se puedan encadenar métodos 
// como sumar, restar, etc.
class Calculadora {
    constructor() {
      this.resultado = 0;
    }

    sumar(valor) {
      this.resultado += valor;
      return this;
    }

    restar(valor) {
      this.resultado -= valor;
      return this; 
    }
  
    multiplicar(valor) {
      this.resultado *= valor;
      return this;
    }

    dividir(valor) {
      if (valor === 0) {
        console.log("No se puede dividir por 0.");
        return this;
      }
      this.resultado /= valor;
      return this;
    }

    resetear() {
      this.resultado = 0;
      return this;
    }

    obtenerResultado() {
      return this.resultado;
    }
  }

  const calculadora = new Calculadora();
  
  const result = calculadora
    .sumar(10)
    .restar(5)
    .multiplicar(2)
    .dividir(3)
    .obtenerResultado();
  
  console.log(`El resultado es: ${result}`);