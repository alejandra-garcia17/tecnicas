// UNIVERSIDAD ESTATAL DE MILAGRO
// FACULTAD DE CIENCIAS E INGENIERIA
// CARRERA INGENIERIA EN SOFTWARE
// TALLER #1
// MARIA ALEJANDRA GARCIA ROLDAN
// TECNICAS DE PROGRAMACION
// ING. RODRIGO JOSUE GUEVARA REYES
// 28 DE AGOSTO DEL 2024
// SEGUNDO SEMESTRE
// AGOSTO - DICIEMBRE 2024

// 1. Declara una variable llamada nombre y asígnale tu nombre como valor. 
let nombre = "Alejandra"
console.log("Mi nombre es " + nombre)

// 2. Crea una variable llamada edad y asígnale tu edad.
let edad = 18
console.log("Yo tengo " + edad + " años")

// 3. Declara una variable ‘esEstudiante’ y asígnale un valor booleano.
let esEstudiante = true
console.log("¿Es estudiante? " + esEstudiante)

// 4. Utiliza un if para verificar si un número es positivo, negativo o cero e 
// imprime el resultado. 
let num = 18
if(num > 0){
    console.log("El número es positivo")
} else if (num < 0){
    console.log("El numero es negativo")
} else{
    console.log("El número es cero")
}

// 5. Declara una variable hobbies que contenga un array con tus hobbies.
let hobbies = ["dormir", "escuchar música", "cocinar", "programar"];
console.log(hobbies)

// 6. Crea un objeto persona que contenga tres propiedades: nombre, edad y esEstudiante. 
let persona = {
    nombre: "Alejandra Garcia",
    edad: 18,
    esEstudiante: true
};
console.log(persona)

// 7. Declara una variable nullVar y asígnale el valor null.
let nullVar = null;
console.log(nullVar)

// 8. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos 
// los años que ha cumplido (desde 1 hasta su edad). 
// Preguntar al usuario su edad
console.log("Has cumplido los siguientes años:");
for (let i = 1; i <= edad; i++) {
    console.log(i);
}

// 9. Declara una variable numeroHex que contenga un número hexadecimal. 
let numeroHex = 0x1A3F;
console.log("El número se puede ver asi " + numeroHex)

// 10. Crea una variable nombreCompleto que concatene tu nombre y tu apellido. 
let apellido = "Garcia"
let nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)

// 11. Suma dos números y almacena el resultado en una variable suma. 
let num2 = 20, num3 = 2
let suma = num2 + num3
console.log("La respuesta es " + suma)

// 12. Resta dos números y guarda el resultado en una variable resta. 
let resta = num2 - num3
console.log("La respuesta es " + resta)

// 13. Multiplica dos números y asigna el resultado a una variable multiplicacion. 
let multiplicacion = num2 * num3
console.log("La respuesta es " + multiplicacion)

// 14. Divide dos números y almacena el resultado en una variable division. 
let division = num2/num3
console.log("La respuesta es " + division)

// 15. Usa el operador de módulo para encontrar el residuo de 10 dividido por 3 y almacena 
// el resultado en una variable modulo.
let modulo = 10 % 3
console.log("El resultado es " + modulo)

// 16. Incrementa el valor de una variable contador en 1 usando el operador de incremento. 
let contador = 0; 
contador++; 
console.log(contador); 

// 17. Decrementa el valor de una variable contadorDec en 1 usando el operador de 
// decremento. 
let contadorDec = 15; 
contadorDec--; 
console.log(contadorDec);

// 18. Crea una lista con al menos 5 elementos y luego imprime toda la lista. 
// Crear una lista con 5 elementos
let lista = ["cuaderno", "laptop", "cartuchera", "monedero", "carpeta"];
console.log(lista);

// 19. Verifica si un valor está presente en una lista. 
let valorPresente = lista.includes("cartuchera");
console.log(valorPresente); 

valorPresente = lista.includes("teclado");
console.log(valorPresente);

// 20. Añade un elemento al final de la lista y otro en una posición específica.
lista.push("audifonos");
console.log(lista);

lista.splice(4, 0,  "calculadora");
console.log(lista);

// 21. Elimina un elemento de la lista por su valor y otro por su índice. 
let indice = lista.indexOf("calculadora")
lista.splice(indice, 1); 
console.log(lista);

// Eliminar un elemento por su índice
lista.splice(5, 1);
console.log(lista);

// 22. Compara dos números para ver si son iguales y almacena el resultado (booleano) en 
// una variable sonIguales.
let num4 = 10;
let num5 = 10;
let sonIguales = (num4 === num5);
console.log(sonIguales);

sonIguales = (num === num3);
console.log(sonIguales);

// 23. Comprueba si un número es mayor que otro y guarda el resultado (booleano) en una 
// variable esMayor.
let esMayor = (num2 > num5);
console.log(esMayor); 

esMayor = (num3 > num2);
console.log(esMayor);

// 24. Escribir un programa que almacene la cadena de caracteres contraseña en una 
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la 
// contraseña  introducida por el usuario coincide con la guardada en la variable sin 
// tener en cuenta mayúsculas y minúsculas.
let contrasenaGuardada = "Manchas_3616"; 
let contrasenaIntroducida = "MANCHAS_3616";

if (contrasenaGuardada.toLowerCase() === contrasenaIntroducida.toLowerCase()) {
    console.log("La contraseña es correcta.");
} else {
    console.log("La contraseña es incorrecta.");
}

// 25. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos 
// ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte 
// al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario 
// tiene que tributar o no.
let edad2 = 20
let ingresos = 2535; 

if (edad2 > 16 && ingresos >= 1000) {
    console.log("Debes tributar.");
} else {
    console.log("No necesitas tributar.");
}

