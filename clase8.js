// Booleanos
x = true
y = false
if(y){
    console.log("es verdadero")
} else{
    console.log("es falso")
}

// ARRAYS
let z = [1,2,3,4,5]
console.log(z[2])
z[2] = 10
console.log(z)
z.push(6)
console.log(z)


//funcion que multiplique array
// funcion flecha
numbers = [1,2,3,4,5]

const duplo = (lista) =>{
    let nueva_lista = []
    for(let i = 0; i < lista.lenght; i++){
        nueva_lista.push(lista[i]*2)
    }
    return nueva_lista
}

console.log(duplo(numbers))

// aplicacion de funciones de orden superior
const triplo = (elemento) => elemento*3
console.log(numbers.map(triplo))

// funcion recursiva
function factorial(n){
    if(n == 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
console.log(factorial(3))

// funcion constructora
let auto = {
    color :'azul',
    marca : 'mazda',
    rueda : 4
}
console.log(auto)
console.log(auto.color)
auto.color ='rojo'
console.log(auto)
auto.anio = 2024
console.log(auto)

let auto2 = {
    color :'azul',
    marca : 'mazda',
    rueda : 4
}
let auto3 = {
    color :'azul',
    marca : 'mazda',
    rueda : 4
}
let auto4 = {
    color :'azul',
    marca : 'mazda',
    rueda : 4
}
console.log(auto2)

function autos(color, marca, ruedas){
    this.color = color
    this.marca = marca
    this.ruedas = ruedas
}
carro1 = new autos('rojo', 'mazda', 4)

// funcion contructora para simular una libreria - libros - clientes
function libros(genero, autor, titulo){
    this.genero = genero
    this.autor = autor
    this.titulo = titulo
}
libro1 = new libros('romance', 'Jane Austen', 'Orgullo y prejuicio')
console.log(libro1)

function empleados(nombre, salario){
    this.nombre = nombre
    this.salario = salario
}
empleado1 = new empleados('juan', 1000)
console.log(empleado1)

function factorial1(n){
    acu = 1
    for(let i = acu;i <= n; i++){
        acu *= n
    }
}
console.log(factorial1(3))

numeros3 = (1,2,3,4,5)
numeros4 = new Array(1,2,3,4,5)
console.log(numeros4)

const numeros5 = new Array(5)
console.log(numeros5)
numeros5[0] = "pedro"
console.log(numeros5)
numeros5[1] = "juan"
console.log(numeros5)

class classautos{
    constructor(color, marca, ruedas, anio_ensamblaje){
        this.color = color
        this.marca = marca
        this.ruedas = ruedas
        this.anio_ensamblaje = anio_ensamblaje
    }

    acelar(){
        return 'el auto esta acelerando'
    }

    anio_uso(){
        return 2024 - this.anio_ensamblaje
    }
}

coche1 = new classautos('verde', 'toyota', 4, 1970)
console.log(coche1)
console.log(coche1.acelar())
console.log(coche1.anio_uso())

class classlibros{
    constructor(genero, autor, titulo){
        this.genero = genero
        this.autor = autor
        this.titulo = titulo
    }
}
libro1 = new classlibros('romance', 'Jane Austen', 'Orgullo y prejuicio')
console.log(libro1)
