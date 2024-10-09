class Skin{
    constructor(nombre, rareza, precio){
        this.nombre =  nombre
        this.rareza = rareza
        this._precio = precio
    }
    // protege la propiedad y me da el valor de esta
    get precio(){
        return this._precio
    }

    // permite realizar cambios
    set precio(nuevo_precio){
        this._precio = nuevo_precio
    }

    activeHability(){
        return 'habilidad activada'
    }
    desactiveHability(){
        return 'habilidad desactivada'
    }
}

skin_rubius = new Skin('rubius', 'especial', 100)
console.log(skin_rubius.precio)
skin_rubius.precio = 200
console.log(skin_rubius.precio)

class Escenarios{
    constructor(tamaño, ambiente){
        this.tamaño = tamaño
        this.ambiente = ambiente
    }
    activeEvent(){
        return 'Evento activado'
    }
}

class Personaje{
    constructor(nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    conversar(){
        return 'conversacion iniciada'
    }
}

class Npc extends Personaje{
    constructor(nombre, tipo, diseño){
        super(nombre, tipo)
        this._diseño = diseño
    }
    intercambiarObjetos(){
        return 'el personaje ha intercambiado objetos'
    }
    conversar(){
        return 'conversacion de npc iniaclizada'
    }

    get diseño(){
        return this._diseño
    }
    set diseño(nuevo_diseño){
        this._diseño = nuevo_diseño
    }

}

haru_diseño = new Npc('haru', 'normal', 'pequeño')
console.log(haru_diseño.diseño)
haru_diseño.diseño = 'grande'
console.log(haru_diseño.diseño)

haru_npc = new Npc('haru', 'aliado', 'interactivo')
console.log(haru_npc.conversar())

class Avatar extends Personaje{
    constructor(nombre, tipo, skin, habilidad){
        super(nombre, tipo)
        this.skin = skin
        this.habilidad = habilidad
    }
    moverse(){
        return 'El avatar se esta moviendo'
    }
}