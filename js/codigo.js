function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
            if(jugada == 1) {
    resultado = "seleccion piedra "
    } else if(jugada == 2) {
    resultado ="seleccionastes papel"
    } else if(jugada == 3) {
    resultado = "seleccionastes tijeras"
    } else {
    resultado = "nulo"
    }
    return resultado

}



let jugador = 0
let pc = 0
let triunfo = 0
let derrota = 0 

while (triunfo < 3 && derrota < 3) {
pc = aleatorio(1, 3) 
jugador = prompt("elige 1 para piedra, 2 para papel, 3 para tijeras")

alert("seleccionastes" + eleccion(jugador))
alert("pc selecciono" + eleccion(pc))

//combate
if(pc == jugador) {
alert("empate")
} else if(jugador == 1 && pc == 3) {
alert("ganaste")
triunfo = triunfo + 1
} else if(jugador == 2 && pc == 1 ) {
alert("ganaste")
triunfo = triunfo + 1
} else if(jugador == 3 && pc == 1 ) {
alert("ganaste")
triunfo = triunfo + 1
}else {
alert("perdiste")
derrota = derrota + 1
}

}

alert("ganaste " + triunfo + " perdiste " + derrota + " vecesss")