/*
EJERCICIO 1
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz"); // Múltiplo de 3 y 5
    } else if (i % 3 === 0) {
        console.log("fizz"); // Múltiplo de 3
    } else if (i % 5 === 0) {
        console.log("buzz"); // Múltiplo de 5
    } else {
        console.log(i); // No es múltiplo de 3 ni de 5
    }
}

// EJERCICIOS OPERADORES
// Ejercicio 2
// crea una variable para cada operacion aritmetica
a = 10
b = 2

suma = a + b
console.log(suma)

resta = a - b
console.log(resta)

mul = a * b
console.log(mul)

div = a/b
console.log(div)

mod = a % b
console.log(mod)

exp = a ** b
console.log(exp)

a++ // incremento
console.log(a)

b-- // decremento
console.log(b)

// 2. Crea una variable para cada tipo de operación de asignación,
// que haga uso de las variables utilizadas para las operaciones aritméticas
myvar = 4
myvar += a
console.log(myvar) // suma

myvar -= b
console.log(myvar) // resta

myvar *= a
console.log(myvar) //multiplicacion

myvar /= b
console.log(myvar) // division

myvar **= a
console.log(a) // exponente

myvar %= b 
console.log(b) // modulo

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a > b)
console.log(a == 11)
console.log(b == 1)
console.log(a == '11')
console.log(b == '1')

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a < b)
console.log(a == b)
console.log(a <= b)
console.log(a == 4)
console.log(b == 6)

// 5. Utiliza el operador lógico and
console.log(a > b && b < a)
console.log(3 == 8 && 5 == 5)
console.log("hola" == "hola" && "HOLA" == "HOLA")
console.log("youtube" == "spotify" && "facebook" == "facebook")
console.log(5 < 6 && a < b && 10 < 8)

// 6. Utiliza el operador lógico or
console.log(a > b || b < a)
console.log(3 == 8 || 5 == 5)
console.log("hola" == "hola" || "HOLA" == "HOLA")
console.log("youtube" == "spotify" || "facebook" == "facebook")
console.log(5 < 6 || a < b || 10 < 8)

// 7. Combina ambos operadores lógicos
console.log(a < b && 3 > 4 || "hola" == "hola")

// 8. Añade alguna negación
console.log(!(a < b && 3 > 4 || "hola" == "hola"))

// 9. Utiliza el operador ternario
isPrimo = true
isPrimo ? console.log("si es primo") : console.log("no es primo")

IWanttoStudy = false
IWanttoStudy ? console.log("si quiero estudiar y hacer que mis padres no me boten de la casa") : console.log("no quiero estudiar, quiero irme de viaje y no volver o mejor morir <3")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(((a + b) < (b * a)) || ((myvar *= a) == (myvar /= a)) && ((a * b) > (b - b)))

// EJERCICIOS DE STRING
// 1. Concatena dos cadenas de texto
name = "Alejandra "
pet = "Manchas <3"
console.log(name + "& " + pet)

// 2. Muestra la longitud de una cadena de texto
console.log(pet.length)

// 3. Muestra el primer y último carácter de un string
console.log(pet[0])
console.log(name[8])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(pet.toUpperCase())
lastName = "GARCIA"
console.log(lastName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
frase = `Hola Manchas, 
gracias por hacerme feliz
estos 8 años, fueron los
mejores de mi vida,
espero poder seguir sin tu compañia <3`
console.log(frase)

// 6. Interpola el valor de una variable en un string
email = "garciaroldanalejandra52a@gmail.com"
console.log(`hola mi nombre es ${name} y este es mi correo electronico ${email}, y por ultimo el nombre de mi gata ${pet}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
frase2 = "hola manchas, ¿como estas?"
console.log(frase2.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase2.includes("hola"))
console.log(frase2.includes("name"))

// 9. Comprueba si dos strings son iguales
console.log(pet == name)
console.log(name == name)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(pet.length == name.length)
console.log(lastName.length == pet.length)

// EJERCICIOS DE CONDICIONALES
// 1. Imprime por consola tu nombre si una variable toma su valor
name2 = "Maria"
if (name2 == "Maria"){
    console.log("Su nombre es Maria")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
user = "manchas_16"
password = "Manchas-3616"

user_ingresado = "alejandra"
password_ingresada = "garcia17"

if(user == user_ingresado && password == password_ingresada){
    console.log("Los datos ingresados con correctos")
} else{
    console.log("Los datos ingresados son incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
num = 9
if (num > 0){
    console.log("El numero es positivo")
} else if (num < 0){
    console.log("El numero es negativo")
} else{
    console.log("El numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
edadMax = 18
edad = 21

if(edad >= edadMax){
    console.log("Usted puede votar")
} else{
    console.log(`Usted no puede votar le hacen falta ${edadMax - edad} años`)

}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
// dependiendo de la edad 
etapa = 20
const message = etapa >= 18 ? "Usted es un adulto" : "Usted es menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes1 = 11; // Cambia este número para probar diferentes meses
let estacion1;

if (mes1 === 12 || mes1 === 1 || mes1 === 2) {
  estacion1 = "Invierno";
} else if (mes1 >= 3 && mes1 <= 5) {
  estacion1 = "Primavera";
} else if (mes1 >= 6 && mes1 <= 8) {
  estacion1 = "Verano";
} else if (mes1 >= 9 && mes1 <= 11) {
  estacion1 = "Otoño";
} else {
  estacion1 = "Mes inválido"; // Por si el mes no es válido
}

console.log(`Estamos en ${estacion1}`);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mes2 = 12; // Cambia este número para probar diferentes meses
let dias;

if (mes2 === 1 || mes2 === 3 || mes2 === 5 || mes2 === 7 || mes2 === 8 || mes2 === 10 || mes2 === 12) {
  dias = 31;
} else if (mes2 === 4 || mes2 === 6 || mes2 === 9 || mes2 === 11) {
  dias = 30;
} else if (mes2 === 2) {
  // Suponemos que no es año bisiesto
  dias = 28;
} else {
  dias = "Mes inválido"; // Para números fuera del rango 1-12
}

console.log(`El mes ${mes2} tiene ${dias} días.`);

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
idioma = "Frances"
saludo = ""
switch (idioma){
    case "Español":
        saludo = "Hola"
        break
    case "Ingles":
        saludo = "Hello"
        break
    case "Frances":
        saludo = "Bonjour"
        break
    case "Italiano":
        saludo = "Ciao"
        break
    case "Aleman":
        saludo = "Hallo"
        break
    default:
        saludo = "Ese idioma no se encuentras disponible"
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = 4; // Cambia este número para probar diferentes meses
let estacion;

switch (mes) {
  case 12:
  case 1:
  case 2:
    estacion = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  default:
    estacion = "Mes inválido"; // Por si el mes no está entre 1 y 12
}

console.log(`Estamos en ${estacion}`);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mes3 = 2; 
let dias2;

switch (mes3) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    dias2 = 31;
    break;
  case 4: case 6: case 9: case 11:
    dias2 = 30;
    break;
  case 2:
    dias2 = 28; 
    break;
  default:
    dias2 = "Mes inválido"; 
}

console.log(`El mes ${mes3} tiene ${dias2} días.`);

// APUNTES DE ARREGLOS
// push agrega elementos al arreglo
// pop elimina el ultimo elemento del arreglo
// shift elimina el primer elemento del arreglo
// onshift agrega elementos al array, pero desde el comienzo
// Explicación de los parámetros de splice():
// Primer parámetro (2): Índice desde donde comienza a eliminar (el índice de JavaScript empieza en 0).
// Segundo parámetro (1): Cantidad de elementos a eliminar

// SET
// add añade elementos al set
// delete elimina elementos, pero le tengo que decir directamente lo que quiero borrar
// has nos dice si un elemento esta o no
// Size sirve para medir la longitud
// from convierte de set a array y viseversa
// los set no permiten duplicados

// MAP
// set agrega cosas => random = x
// si la clase existe la actualiza, sino la agrega
// get busca por la clave "random"
// has sirve para saber si tenemos o no algo en el Map
// delete elimina un elemento del Map llamdo desde las claves "random"
// clear elimina todo del Map
// keys manda un Map solo de las claves
// values solo imprime los valores 

// EJERCICIOS DE ESTRUCTURAS
// 1. Crea un array que almacene cinco animales
myArray = ["Gato", "Perro", "Tigre", "Oso", "Tiburon"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Leon")
myArray.push("Tucan")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
mySet = new Set(["Orgullo y Prejuicio", "Persuacion", "Mujercitas", "Sentido y Sensibilidad", "El cortejo"])

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Norte y Sur")
mySet.add("Ana de las tejas verdes")
mySet.add("Norte y Sur")
console.log(mySet)
// 6. Elimina uno concreto a tu elección
mySet.delete("Ana de las tejas verdes")
console.log(mySet)
// 7. Crea un mapa que asocie el número del mes a su nombre
myMap = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
])
console.log(myMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log(myMap.set("Meses", [6, 7, 8]))
console.log(myMap.get("Meses"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
materias = ["Fisica", "Tecnocas de programacion", "Ingenieria de requerimientos de software"]
mySet = new Set(materias)
console.log(mySet)

// BUCLES FOR Y WHILE
// 1. Crea un bucle que imprima los números del 1 al 20
for(i=1;i<= 20; i++){
  console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma2 = 0
for(i=1;i<= 100; i++){
  suma2 += i
}
console.log(suma2)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(i=0;i<=50;i++){
  if(i % 2 == 0)
    console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ["Alejandra", "Sofia", "Valentina", "Karen", "Katty", "Ricardo"]
for(i=0; i< nombres.length; i++){
  console.log(nombres[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
string = "Manchas"
let contadorVocales = 0; // Inicializamos un contador para las vocales

for (let i = 0; i < string.length; i++) {
  let caracter = string[i].toLowerCase();
  if ("aeiou".includes(caracter)) {
    contadorVocales++; 
  }
}
console.log(`El número de vocales es: ${contadorVocales}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let mult = [2, 3, 4];
let producto = 1;

for (let i = 0; i < mult.length; i++) {
  producto *= mult[i];
}
console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10