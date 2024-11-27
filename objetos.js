// EJERCICIO 1
// Para comenzar vamos a crear un objeto sencillo que se usa para guardar información 
// sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, 
// programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en 
// cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones

// Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, 
// programacion: 8, HTML: 7. Sacará Nota media de Juan 8
class Student {

    constructor(name, ingles, html, programacion) {
        this.name = name
        this.ingles = ingles
        this.html = html
        this.programacion = programacion
    }

    calcularMedia() {
        return (this.ingles + this.html + this.programacion) / 3;
      }

}
let student1 = new Student("Juan", 10, 8, 7)
console.log(student1)
console.log(`Nombre del estudiante: ${student1.name}`);

const media = student1.calcularMedia();
console.log(`Nota media de ${student1.name}: ${media.toFixed(2)}`);

// EJERCICIO 2
// Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. 
// El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado

// Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como 
// resultado 360 (400 - 10*400/100).
class Vestido{
    constructor(precio, descuento){
        this.precio = precio
        this.descuento = descuento
    }

    total(){
        return (this.precio - (this.descuento * this.precio/100))
    }

}
let vestido1 = new Vestido(400, 10)
console.log(vestido1)
const Total = vestido1.total()
console.log(Total)

// EJERCICIO 3
// En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos 
// propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). Luego instancia al 
// menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.

// Por ejemplo objeto oro, masa de la muestra 194 gr y volumen 10 cc. Densidad deberá devolver 19,4.
class Piedra{
    constructor(objeto, masa, volumen){
        this.objeto = objeto
        this.masa = masa
        this.volumen = volumen
    }

    densidad(){
        return (this.masa/this.volumen)
    }
}
piedra1 = new Piedra("oro", 194, 10)
console.log(piedra1)
console.log(piedra1.densidad())

// EJERCICIO 3
// Construye una clase usando function para implementar una cuenta de efectivo. Poseerá dos 
// propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar(). 
// El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. 
// No se puede sacar más de lo que exista en el saldo. .

// A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) Tras ingresar el saldo será 
// 1000 y trs retirar el saldo será 900.
class Banco{
    constructor(name, saldo){
        this.name = name
        this.saldo = saldo
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
          this.saldo += cantidad; 
          return `Nuevo saldo: ${this.saldo}`;
        } else {
          return "La cantidad a ingresar debe ser mayor a 0.";
        }
      }
    
    retirar(cantidad) {
        if (cantidad > this.saldo) {
          return "No se puede retirar, ya que le falta dinero (pobre xd).";
        } else if (cantidad > 0) {
          this.saldo -= cantidad; 
          return `Nuevo saldo: ${this.saldo}`;
        } else {
          return "La cantidad a retirar debe ser mayor a 0.";
        }
      }
}
cuenta1 = new Banco("Alejandra", 2000)
console.log(cuenta1)
console.log(cuenta1.ingresar(1000))
console.log(cuenta1.retirar(4000))
console.log(cuenta1.retirar(500))

// Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos 
// por una persona en cada sesión de ejercicios. Las propiedades de la clase serán
// - nombre
// - sesiones
// - numsesioens
// El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada 
// sesión y numsesiones contiene el número de sesiones anotadas.

// Tiene dos métodos:

// - anotar: anota los kilómetros
// - media: calcula la media de kilómetros recorridos
// Cada persona tendrá su ficha construída con esta clase.

// Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.

// Si escribo media() devolverá 8 ((8+10+6)/3).

// En la solución se usa el camino má primitivo posible: arrays y bucles básicos

class Ficha{
    constructor(nombre, sesiones, numsesiones){
        this.nombre = nombre
        this.sesiones = []
        this.numsesiones = 0
    }

    anotar(km){
        this.sesiones[this.numsesiones] = km;
        this.numsesiones++;
    }

    media(){
        let media = 0;

        for(let i=0; i< this.sesiones.length;i++){
            media += this.sesiones[i];
        }
        return media/this.numsesiones

    }
}
let ficha1 = new Ficha("Juan")
console.log(ficha1.nombre)
ficha1.anotar(8)
ficha1.anotar(10)
ficha1.anotar(6)
console.log(ficha1)
console.log("Media de Km: " + ficha1.media())

// EJERCICIO 5
// Crea una clase que lamaremos Bus. Sus atributos serán:
// - capacidad: número máximo de pasajeros
// - pasajeros: número de pasajeros (inicialmente 0)
// - conductor: objeto conductor.
// Sus métodos
// - subir(pasajeros): aumenta el numero de pasajeros
// - bajar(pasajaeros): disminuye el número de pasajeros
// - conductor: asigna un objeto conductor.
// El ojeto conductor es de una clase (Conductor) cuyos atributos son:
// - nombre: nombre del conductor
// - licencia: un número que identifica al condcutor.

// Al crear el objeto se asigna también el conductor

// No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

// El autobús linea1 puede llevar 40 pasajeros y su conductor se llama José su licencia es la 1234.

// Si se pide subir(25) , el atributo pasajeros valdrá 25.

// Si a continuación se pide subir(35) solo subirán 15, (2 + 15 son los 40 de máximo)

// Si pedimos bajar 45, el autobús se queda vacío.

// Si teniendo 35 pasajeros se pide que bajen 40 el autobús se queda vacío.

class Bus{
    constructor(capacidad, pasajeros, conductor){
        this.capacidad = capacidad
        this.pasajeros = 0
        this.conductor = conductor
    }

    subir(num) {
        if (this.pasajeros + num <= this.capacidad) {
          this.pasajeros += num;
          return `Pasajeros actuales: ${this.pasajeros}`;
        } else {
          const espacioDisponible = this.capacidad - this.pasajeros;
          this.pasajeros = this.capacidad;
          return `Solo subieron ${espacioDisponible} pasajeros. Autobús lleno: ${this.pasajeros}/${this.capacidad}`;
        }
      }
    
      bajar(num) {
        if (num <= this.pasajeros) {
          this.pasajeros -= num;
          return `Pasajeros actuales: ${this.pasajeros}`;
        } else {
          this.pasajeros = 0;
          return `Todos los pasajeros bajaron. Autobús vacío: ${this.pasajeros}`;
        }
      }
}

class Conductor{
    constructor(nombre, licencia){
        this.nombre = nombre
        this.licencia = licencia
    }
}
let conductor1 = new Conductor("José", 1234);
console.log(conductor1);

let linea1 = new Bus(40, conductor1);
console.log("Estado inicial del autobús:", linea1);

console.log(linea1.subir(25)); 
console.log(linea1.subir(35)); 

console.log(linea1.bajar(45)); 
console.log(linea1.bajar(5)); 

// EJERCICIO 6
// Un artículo tiene un nombre, un proveedor y un precio. Y un proveedor tiene un nombre, email y telefono. 
// Se pide definir una clase (Proveedor) para implementar el objeto proveedor y otra (Articulo) para el obejto 
// artículo. Este objeto tiene los siguientes atributos o propiedades:
// - proveedor: un objeto proveedor, a quien se compra el artículo
// - nombre: una cadena, nombre del artículo
// - precio: un número, precio del artículo
// Y métodos:
// telefono(): devuelve un objeto con el nombre y teléfono del proveedor
// Por su parte el objeto proveedor tiene como propiedades
// - nombre: cadena de texto, nombre del proveedor
// - email: un email, correo del proveedor
// - teléfono: una cadena de dígitos, teléfono del proveedor
// Puedes implementarlo con create, function o con class

// Por ejemplo podríamos tener un artículo monitor que vale 200€ y el proveedor es TecnoShop, con email: 
// tcn@tecno.com y telefono 1234567.

// Si hacemos articulo.telefono() nos dará  nombre y teléfono del proveedor: Teléfono de TenoShop es 1234567

class Articulo{
  constructor(proveedor, nombreA, precio){
    this.proveedor = proveedor
    this.nombreA = nombreA
    this.precio = precio
  }

  telefono(){
    return {nombre: this.proveedor.nombre,
      telefono: this.proveedor.numeroT
    }
  }
}

class Proveedor{
  constructor(nombre, email, numeroT){
    this.nombre = nombre
    this.email = email
    this.numeroT = numeroT
  }
}
let proveedor1 = new Proveedor("TecnoShop", "tecnoshop@gmail.com", 123456789)
console.log(proveedor1)
let articulo1 = new Articulo(proveedor1, "computadora", 200)
console.log(articulo1)
console.log(articulo1.telefono())

// EJERCICIO 7
// Para implementar un grupo de alumnos de un curso se crea una lista de objetos alumno. Cada objeto alumno se 
// caracteriza por el nombre del alumno, su número de matrícula y su calificacion.
// El objeto tiene un método para poner la calificación: calificar(nota).
// Crea el script para implementar  un grupo de 4 alumnos.
// Por ejemplo un alumno de nombre "Juan", número de matrícula 124 y su nota la pondríamos como 
// alumno.calificar(5) para ponerle un 5.
let grupo = new Array(4)
class Alumnos{
  constructor(nombre, numMatricula, calificacion){
    this.nombre = nombre
    this.numMatricula = numMatricula
    this.calificacion = calificacion
  }

  calificar(nota){
    return this.calificacion = nota
  }
}

grupo[0] = new Alumnos("Maria", 1234)
console.log(grupo[0].calificar(10))
console.log(grupo[0])

// Ejercicio 7
// En esta ocasión tienes una lista de clientes, cada cliente es un objeto con atributos: nombre, email, 
// telefono.

// Se quiere crear una clase Factura para gestionar las facturas emitidas a los clientes. Las propiedades de 
// esta clase son

// - idCliente: número de cliente (su lugar en la lista de clientes)
// - total: número con el imorte total de la factura
// - estado: pagada o pendiente
// Los métodos serán

// - cobrar(): pone el estado en pagada.
// - imprimir(): imprime los datos de la factura
// Para probar crea tres clieentes y al menos una factura.

// Podemos tener los siguietnes clientes

// - Juan, juan#mail.com, 3456718
// - Marisa, marisa@mail.com, 5556123
// - Luis, luis@mail.com, 2354322
// Emitimos una factura al cliente 1, o sea, a Juan. el importe es 300 euros. Si se imprime factura.estado 
// saldrá "pendiente".

// Depués de hacer factura.pagar() al imprimir factura.estado saldrá "pagada".
class Cliente{
  constructor(nombre, email, telefono){
    this.nombre = nombre
    this.email = email
    this.telefono = telefono
  }
}

class Facturas{
  constructor(idCliente, total, estado){
    this.idCliente = idCliente
    this.total = total
    this.estado = estado
  }

  cobrar(){
    console.log("Factura para "+ this.idCliente.nombre);
    console.log("Total "+ this.total);
    console.log("Estado "+ this.estado);
  }

  imprimir(){
    this.estado = "pagada"
  }
}

const cliente1 = new Cliente("Pedro", "pedronieto@gmail.com", 123456)
console.log(cliente1)
const factura1 = new Facturas(cliente1, 3, 200)
console.log(factura1)
console.log(factura1.imprimir())

// Ejercicio 1: Gestión de Estudiantes
// Crea una clase ClaseEstudiantes que gestione una lista de estudiantes. Debe permitir:

// Agregar un estudiante (nombre y calificación).
// Mostrar a los estudiantes aprobados (calificación >= 6).
// Calcular el promedio de calificaciones de la clase.
// Si intentas agregar una calificación que no sea un número, lanza un error manejado con try-catch.

class Estudiantes{
  constructor(){
    this.estudiantes = []
  }

  agregar(nombre, calificacion){
    try{
      if(isNaN(calificacion)){
        throw new Error("La calificacion debe ser un numero")
      }
      this.estudiantes.push({nombre, calificacion})
    } catch(error){
      console.error(error.message)
    }    
  }

  aprobados(){
    return this.estudiantes.filter(e => e.calificacion >= 6)
  }

  promedio(){
      const total = this.estudiantes.reduce((sum, e) => sum + e.calificacion, 0);
      return total / this.estudiantes.length || 0;
  }
}
let clase = new Estudiantes()
clase.agregar("Juan", 10)
clase.agregar("Timon", 5)
clase.agregar("Federico", "ayuda")
console.log(clase)
console.log("Promedio de la clase: " + clase.promedio())

// Ejercicio 2: Tienda Online con Carrito
// Crea una clase Tienda que permita:

// Agregar productos al carrito.
// Quitar productos del carrito.
// Mostrar el total del carrito en el DOM.
// Usa un método get para obtener el total del carrito y un método set para añadir un descuento.
class Tienda{
  constructor(){
    this.carrito = []
    this.descuento = 0
  }

  agregar(nombre, precio){
    this.carrito.push({nombre, precio})
  }

  quitar(nombre){
    this.carrito = this.carrito.filter(p => p.nombre !== nombre);
  }

  get total() {
    const totalSinDescuento = this.carrito.reduce((sum, p) => sum + p.precio, 0);
    return totalSinDescuento - this.descuento;
  }

  set aplicarDescuento(descuento) {
    this.descuento = descuento;
  }
}

const tienda = new Tienda();
document.getElementById("agregar").addEventListener("click", () => {
  tienda.agregarProducto("Producto1", 20);
  actualizarDOM();
});
document.getElementById("descuento").addEventListener("click", () => {
  tienda.aplicarDescuento(5);
  actualizarDOM();
});

function actualizarDOM() {
  document.getElementById("total").innerText = `Total: $${tienda.total}`;
}