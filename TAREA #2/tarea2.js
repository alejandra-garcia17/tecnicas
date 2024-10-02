// UNIVERSIDAD ESTATAL DE MILAGRO
// FACULTAD DE CIENCIAS E INGENIERIA
// CARRERA INGENIERIA EN SOFTWARE
// TALLER #2
// MARIA ALEJANDRA GARCIA ROLDAN
// TECNICAS DE PROGRAMACION
// ING. RODRIGO JOSUE GUEVARA REYES
// 1 DE OCTUBRE DEL 2024
// SEGUNDO SEMESTRE
// AGOSTO - DICIEMBRE 2024

// 1. Crea una función nombrada que sume dos números.
function sumar(){
    let a = 4, b = 8
    let result = a + b

    return result
}
console.log(sumar())

// 2. Escribe una función nombrada que reste dos números
function restar(){
    let c = 10, d = 5
    let result = c - d

    return result
}
console.log(restar())

// 3. Desarrolla una función nombrada que multiplique dos números
function multiplicar(){
    let e = 4, f = 8
    let result = e * f

    return result
}
console.log(multiplicar())

// 4. Implementa una función nombrada que divida dos números.
function dividir(){
    let g = 72, h = 8
    let result = g/h 

    return result
}
console.log(dividir())

// 5. Diseña una función nombrada que calcule el módulo de dos números.
function dividir(){
    let i = 72, j = 8
    let result = i % j 

    return result
}
console.log(dividir())

// 6. Asigna una función anónima a una variable que eleve un número al cuadrado.
const elevar = function(){
    let num = 5
    let result = num * num
    return result
}
console.log(elevar())

// 7. Usa una función anónima para convertir grados Celsius a Fahrenheit.
const grados = function(){
    let grados = 9
    let result = (grados * (9/5)) + 32
    
    return result
}

console.log(grados())

// 8. Crea una función anónima que calcule el perímetro de un rectángulo
const perimetro = function(){
    let base = 9, altura = 4
    let result = 2*(base + altura)

    return result
}
console.log(perimetro())

// 9. Implementa una función anónima que determine si un número es par o impar.
const parImpar = function(){
    let num = 9, result
    if (num % 2 == 0){
        result = num + " es par"
    } else{
        result = num + " es impar"
    }

    return result
}
console.log(parImpar())

// 10. Escribe una función anónima que devuelva el número mayor entre dos números.
const mayor = function(){
    let k = 10, i = 50, result
    if(k > i){
        result = k + " es mayor"
    } else{
        result = i + " es mayor"
    }

    return result
}
console.log(mayor())

// 11. Desarrolla una función flecha que calcule el área de un círculo.
const areaCirculo = radio => (Math.PI * radio * radio).toFixed(2);
console.log(areaCirculo(5));

// 12. Crea una función flecha que convierta kilómetros a millas.
const km_m = km => (km/1.609).toFixed(2)
console.log(km_m(4))

// 13. Escribe una función flecha que retorne el nombre completo dado un nombre y apellido.
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`
console.log(nombreCompleto("Alejandra", "García"));

// 14. Implementa una función flecha que verifique si un texto contiene la letra 'a'.
const contA = texto => texto.includes('a');

console.log(contA("Hola"))
console.log(contA("Hola mundo"))

// 15. Diseña una función flecha que cuente cuántos elementos en un array son números.
const contarNumeros = array => array.filter(elemento => typeof elemento === 'number').length;

const Array = [1, 'hola', 3.5, true, 42, null, 'mundo', 7];
console.log(contarNumeros(Array));

// 16. Escribe una función de orden superior que tome una función y la aplique a todos 
// los elementos de un array.
const mult5 = (array, funcion) => array.map(funcion);
const mul = num => num * 5;
const Array2 = [1, 2, 3, 4, 5];
console.log(mult5(Array2, mul));

// 17. Crea una función de orden superior que filtre elementos de un array basándose en 
// una condición dada.
const filtrar = (array, condicion) => array.filter(condicion);
// numeros mayores de 20
const mayor20 = num => num > 20;
const Array3 = [5, 65, 8, 21, 3, 42];
console.log(filtrar(Array3, mayor20));

// 18. Desarrolla una función de orden superior que retorne una nueva función
// incrementadora.
const inc = incremento => {
    return numero => numero + incremento;
};
const incrementar = inc(7);

console.log(incrementar(10));
console.log(incrementar(20));

// 19. Implementa una función de orden superior que tome dos funciones como argumentos
// y elija una para ejecutar basada en una condición.
const Funcioncondicion = (condicion, funcionTrue, funcionFalse) => {
    return condicion ? funcionTrue() : funcionFalse();
};

const saludar = () => "¡Hola!";
const despedir = () => "¡Adiós!";

const condicion = false;
const resultado = Funcioncondicion(condicion, saludar, despedir);
console.log(resultado);

// 20. Diseña una función de orden superior que modifique un objeto utilizando otra función
// proporcionada.
const modificarObjeto = (objeto, modificador) => {
    modificador(objeto);
};

// Ejemplo de un objeto
const persona = {
    nombre: "Alejandra",
    edad: 18
};

const aumentarEdad = obj => {
    obj.edad += 1;
};

console.log("Antes de modificar:", persona);
modificarObjeto(persona, aumentarEdad);
console.log("Después de modificar:", persona);

// 21. Define una función constructora para un objeto "Coche" que tenga propiedades como
// marca, modelo y año.
function Coche(marca, modelo, año) {
    this.marca = marca;   
    this.modelo = modelo; 
    this.año = año;      
}

const miCoche = new Coche("Hyundai", "Accent", 2003);

console.log(miCoche); 

// 22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título
// y año de publicación.
function Libro(autor, titulo, añoP){
    this.autor = autor
    this.titulo = titulo
    this.añoP = añoP
}

const libro = new Libro("Jane Austen", "Orgullo y Prejuicio", "1813")
console.log(libro)

// 23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo
// electrónico y contraseña.
function Usuario(nombre, Correo_Electronico, contraseña){
    this.nombre = nombre
    this.Correo_Electronico = Correo_Electronico
    this.contraseña = contraseña
}

const usuario = new Usuario("Alejandra Garcia", "garciaroldanalejandra520@gmail.com", "progrmacion2024")
console.log(usuario)

// 24. Escribe una función constructora para "Producto" con propiedades de nombre, 
// precio y cantidad.
function Producto(nombre, precio, cantidad){
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}

const pro = new Producto("Clorox", "$2,50", "1")
console.log(pro)

// 25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre,
// matrícula y carrera.
function Estudiante(nombre, matricula, carrera){
    this.nombre = nombre
    this.matricula = matricula
    this.carrera = carrera
}

const estudent = new Estudiante("Alejandra Garcia", "20", "Ingenieria en software")
console.log(estudent)

// 26. Escribe una función recursiva para calcular el factorial de un número.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(6));

// 27. Crea una función recursiva que sume todos los números hasta un número dado.
function sumarHasta(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumarHasta(n - 1);
}

console.log(sumarHasta(5));

// 28. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de
// dos números.
function mcd(a, b) {
    if (b === 0) {
        return a;
    }
    return mcd(b, a % b);
}

console.log(mcd(48, 18));

// 29. Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número
// específico.
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 10;
for (let i = 0; i <= n; i++) {
    console.log(fibonacci(i));
}

// 30. Desarrolla una función recursiva que invierta una cadena de texto.
function invertirCadena(cadena) {
    if (cadena.length <= 1) {
        return cadena;
    }
    return invertirCadena(cadena.slice(1)) + cadena[0];
}

console.log(invertirCadena("Masnchas"));

// 31. Demuestra el uso de una variable global modificándola dentro de una función.
// Declarar una variable global
let num = 10

function sum(){
    s = num + 30
    console.log(s)
}
sum()

// 32. Escribe un código donde una variable local oculte una variable global del mismo 
// nombre.
let msg = "Hola desde afuera"

function menLocal(){
    let msg = "Hola desde la función"
    console.log(msg)
}
menLocal()

console.log(msg)

// 33. Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de
// nombres.
let usu = "Sofia";

function saludo() {
    let usu = "Katty";
    console.log("Hola, " + usu);
}

function despedirse() {
    let usu = "Ricardo"; 
    console.log("Adiós, " + usu);
}

saludo();     
despedirse();   
console.log("Usuario global: " + usu);

// 34. Implementa un contador utilizando una variable global.

let cont = 0;

function incre() {
    cont++;
    console.log("Contador incrementado: " + cont);
}

incre();    
incre();  

// 35. Crea una función que intente modificar una variable local definida en otra función.
let valorG = 0;

function definirVariable() {
    let valorL = 5;
    
    function modificarLocal() {
        valorL++;
        console.log("Intentando modificar valorLocal: " + valorL);
    }

    modificarLocal(); 
    console.log("Valor local dentro de definirVariable: " + valorL);
}
definirVariable();

// 36. Escribe una función que determine si un año es bisiesto.
function bisiesto(año) {
    // Verificar si el año es bisiesto
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        return true; // El año es bisiesto
    } else {
        return false; // El año no es bisiesto
    }
}

const año1 = 2020;
const año2 = 2005;
const año3 = 2008;

console.log(año1 + " es bisiesto: " + bisiesto(año1));
console.log(año2 + " es bisiesto: " + bisiesto(año2));
console.log(año3 + " es bisiesto: " + bisiesto(año3));

// 37. Implementa una función que evalúe tres números y retorne el mayor.
function mayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

const result = mayorDeTres(24, 20, 13);
console.log("El mayor número es: " + result); 

// 38. Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota.
function evaluarNota(nota) {
    if (nota >= 70) {
        return "El estudiante aprueba.";
    } else {
        return "El estudiante reprueba.";
    }
}

const resultado1 = evaluarNota(85);
console.log(resultado1); 

const resultado2 = evaluarNota(42);
console.log(resultado2); 

// 39. Crea una función que clasifique una edad en categorías (niño, adolescente, adulto,
// anciano).
function clasedad(edad) {
    if (edad >= 0 && edad <= 12) {
        return "Niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        return "Adulto";
    } else {
        return "Anciano";
    }
}

console.log(clasedad(3));
console.log(clasedad(13));
console.log(clasedad(20));
console.log(clasedad(65));

// 40. Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.
function verificarAcceso(edad) {
    if (edad >= 18) {
        return "Acceso concedido.";
    } else {
        return "Acceso denegado.";
    }
}

console.log(verificarAcceso(19));
console.log(verificarAcceso(17));

// 41. Escribe un bucle while que cuente de 1 a 100
let cont2 = 1;

while (cont2 <= 100) { 
    console.log(cont2);
    cont2++;
}

// 42. Implementa un bucle while que sume los primeros 50 números naturales
let suma = 0;
let cont3 = 1;

while (cont3 <= 50) {
    suma += cont3; 
    cont3++; 
}

console.log("La suma de los primeros 50 números naturales es: " + suma);

// 43. Crea un bucle while que repita un saludo hasta que el usuario decida parar.
let continuar = true;

while (continuar) {
    console.log("¡Hola!");
    continuar = console.log("¿Quieres repetir el saludo?"); // se usa confirm. sirve en el navegador
}

console.log("¡Hasta luego!");

// 44. Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango.
let num4 = 1;
let encon1 = false;

while (num4 <= 100 && !encon1) {
    if (num4 % 7 === 0) { 
        console.log("El primer número divisible por 7 es: " + num4);
        encon1 = true;
    }
    num4++;
}

// 45. Diseña un bucle while que verifique la entrada del usuario hasta que sea válida.
let num1 = "hola"
while (true) { // Inicia un bucle infinito
    
    if (!isNaN(num1) && num1 > 0) {
        console.log("Número válido: " + num1);
        break;
    } else {
        console.log("Entrada no válida. Intenta de nuevo."); 
    }
}

// 46. Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en puntos
function Calificacion(puntos) {
    let calificacion;

    switch (true) {
        case (puntos >= 90):
            calificacion = 'A';
            break;
        case (puntos >= 80):
            calificacion = 'B';
            break;
        case (puntos >= 70):
            calificacion = 'C';
            break;
        case (puntos >= 60):
            calificacion = 'D';
            break;
        case (puntos < 60):
            calificacion = 'F';
            break;
        default:
            calificacion = 'Entrada no válida';
            break;
    }

    return calificacion;
}

console.log(Calificacion(95));
console.log(Calificacion(85));
console.log(Calificacion(71));
console.log(Calificacion(65));
console.log(Calificacion(55));

// 47. Implementa una función que use switch para responder a diferentes comandos de un
// chatbot.
function responderComando(comando) {
    let respuesta;

    switch (comando) {
        case 'saludar':
            respuesta = '¡Hola! ¿Cómo puedo ayudarte hoy?';
            break;
        case 'adiós':
            respuesta = '¡Adiós! Que tengas un buen día.';
            break;
        case 'hora':
            const fecha = new Date();
            respuesta = `La hora actual es: ${fecha.getHours()}:${fecha.getMinutes()}`;
            break;
        case 'clima':
            respuesta = 'El clima es soleado con una temperatura de 25°C.';
            break;
        case 'ayuda':
            respuesta = 'Aquí tienes una lista de comandos: saludar, adiós, hora, clima, ayuda.';
            break;
        default:
            respuesta = 'Lo siento, no reconozco ese comando. Intenta con "ayuda" para ver la lista de comandos.';
            break;
    }

    return respuesta;
}

console.log(responderComando('saludar'));
console.log(responderComando('hora'));
console.log(responderComando('clima'));
console.log(responderComando('adiós'));
console.log(responderComando('desconocido'));
console.log(responderComando('ayuda'));

// 48. Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta,
// cheque).
function procesarPago(metodoPago) {
    let mensaje;

    switch (metodoPago) {
        case 'efectivo':
            mensaje = 'Pago procesado en efectivo. ¡Gracias!';
            break;
        case 'tarjeta':
            mensaje = 'Pago procesado con tarjeta. Asegúrese de que su tarjeta esté habilitada.';
            break;
        case 'cheque':
            mensaje = 'Pago procesado por cheque. Tenga en cuenta que el cheque puede tardar en liquidarse.';
            break;
        default:
            mensaje = 'Método de pago no reconocido. Por favor elija efectivo, tarjeta o cheque.';
            break;
    }

    return mensaje;
}

// Ejemplo de uso
console.log(procesarPago('efectivo'));
console.log(procesarPago('tarjeta'));
console.log(procesarPago('cheque'));
console.log(procesarPago('bitcoin'));

// 49. Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /).
function calcular(num1, num2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            return 'Operador no reconocido. Por favor usa +, -, * o /.';
    }

    return resultado;
}

console.log(calcular(10, 15, '+'));
console.log(calcular(76, 5, '-')); 
console.log(calcular(12, 12, '*')); 
console.log(calcular(75, 5, '/'));
console.log(calcular(80, 5, '%'));

// 50. Diseña un switch para cambiar entre diferentes idiomas de un sitio web.
function cambiarIdioma(idioma) {
    let mensaje;

    switch (idioma) {
        case 'es':
            mensaje = '¡Bienvenido a nuestro sitio web!';
            break;
        case 'en':
            mensaje = 'Welcome to our website!';
            break;
        case 'fr':
            mensaje = 'Bienvenue sur notre site web!';
            break;
        case 'de':
            mensaje = 'Willkommen auf unserer Website!';
            break;
        case 'pt':
            mensaje = 'Bem-vindo ao nosso site!';
            break;
        default:
            mensaje = 'Idioma no reconocido. Por favor seleccione un idioma válido.';
            break;
    }

    return mensaje;
}

console.log(cambiarIdioma('es'));
console.log(cambiarIdioma('en'));
console.log(cambiarIdioma('fr'));
console.log(cambiarIdioma('de'));
console.log(cambiarIdioma('pt'));
console.log(cambiarIdioma('it'));

// 51. Implementa un bucle for que imprima todos los elementos de un array.
const arrayElementos = [18, 20, 34, 43, 50];

for (let i = 0; i < arrayElementos.length; i++) {
    console.log(arrayElementos[i]);
}

// 52. Escribe un bucle for que multiplique todos los elementos de un array
const numeros = [2, 4, 6, 8];
let producto = 1;
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
}

console.log("El producto de los elementos es: " + producto);

// 53. Crea un bucle for para encontrar el menor número en un array.
const nums = [45, 12, 78, 4, 23];
let menor = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < menor) {
        menor = nums[i];
    }
}

console.log("El número menor es: " + menor);

// 54. Desarrolla un bucle for para verificar si un array contiene un elemento específico.
const nums3 = [13, 24, 35, 40, 55];
const buscar = 35;
let encontrado = false;

for (let i = 0; i < nums3.length; i++) {
    if (nums3[i] === buscar) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("El elemento " + buscar + " está en el array.");
} else {
    console.log("El elemento " + buscar + " no está en el array.");
}

// 55. Diseña un bucle for que copie un array en otro.
const arrayOriginal = [5, 10, 15, 20, 25];
const arrayCopia = []; 

for (let i = 0; i < arrayOriginal.length; i++) {
    arrayCopia[i] = arrayOriginal[i];
}

console.log("Array original:", arrayOriginal);
console.log("Array copiado:", arrayCopia);

// 56. Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea
// mayor que 10.
let numero = 23;

do {
    console.log("El número actual es:", numero);
    numero++; 
} while (numero <= 10);

console.log("El número es mayor que 10:", numero);

// 57. Implementa un for-in para mostrar todas las propiedades de un objeto.
const cancion = {
    titulo: "La nave del olvido",
    artista: "Jose Jose",
    año: 1970
};

for (let propiedad in cancion) {
    console.log(propiedad + ": " + cancion[propiedad]);
}

// 58. Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.
const nombres = ["Alejandra", "Sofia", "Karen", "Valentina"];

for (let nombre of nombres) {
    console.log("Hola, " + nombre + "!");
}

// 59. Crea un forEach para aplicar un descuento del 10% a precios en un array.
const precios = [120, 260, 305, 435, 527];
const descuento = 0.10;

const preciosDescuento = [];

precios.forEach(precio => {
    const precioDescuento = precio - (precio * descuento);
    preciosDescuento.push(precioDescuento); // Agregar el nuevo precio al array
});

console.log("Precios originales: ", precios);
console.log("Precios con descuento: ", preciosDescuento);

// 60. Escribe un código que use map para convertir todas las temperaturas de un array de
// Celsius a Fahrenheit.
const Celsius = [0, 20, 37, 100]; 

const celsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;

const Fahrenheit = Celsius.map(celsiusAFahrenheit);

console.log("Temperaturas en Celsius: ", Celsius);
console.log("Temperaturas en Fahrenheit: ", Fahrenheit);
