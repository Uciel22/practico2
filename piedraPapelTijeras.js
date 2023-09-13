// declarando variables
let puntosUsuario = 0;
let puntosPC = 0;


let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");
let elegiTuArma = document.querySelector("#elegi-tu-arma");
let botonesArmas = document.querySelectorAll(".arma");

//Solicitud para que el usuario ingrese su nombre o el juego no comienza
let nombreUsuario = prompt("Ingresa tu nombre");

while(nombreUsuario === ""){
    alert("Este campo no puede estar vacio");
nombreUsuario = prompt("por favor, ingresa tu nombre");
}
    
// al presionar algunos de los botones clase arma, se llama la funcion comenzarJugada

botonesArmas.forEach(boton => {
    boton.addEventListener("click", comenzarJugada);
})

// funcion para iniciar el juego

function comenzarJugada(e){
    //la computadora elige un numero random
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    // eleccion de PC: piedra = 0, papel = 1 y tijera = 2

    if(eleccionPC === 0){
        eleccionPC = "piedra✊";
    } else if(eleccionPC === 1){
        eleccionPC = "papel✋";
    } else {
        eleccionPC = "tijera✌";
    }
    
    // piedra vence a tijera, tijera vence a papel, papel vence a piedra, 
    //si son iguales es empate.
    if(
        (eleccionUsuario === "piedra✊" && eleccionPC === "tijera✌")|| 
        (eleccionUsuario === "tijera✌" && eleccionPC === "papel✋")||
        (eleccionUsuario === "papel✋" && eleccionPC==="piedra✊")
        ) {
        ganaUsuario();
    } else if(
        (eleccionPC === "piedra✊" && eleccionUsuario === "tijera✌")|| 
        (eleccionPC === "tijera✌" && eleccionUsuario === "papel✋")||
        (eleccionPC === "papel✋" && eleccionUsuario==="piedra✊")
        ){
        ganaComputadora();
    } else {
        empate();
    }

    mensaje.classList.remove("disable");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

 // el primero que llegue a 3 puntos gana el juego, sin contar los empates   
 if(puntosUsuario === 3 || puntosPC === 3){
    if (puntosUsuario === 3){
        instrucciones.innerText = nombreUsuario + " 🔥 ¡Ganaste el juego! 🔥";
    }
    if (puntosPC === 3){
        instrucciones.innerText = "😭 ¡La computadora ganó el juego! 😭";
    }
    
    elegiTuArma.classList.add("disable");
    reiniciar.classList.remove("disable");
    reiniciar.addEventListener("click", reiniciarPartida);
 }
}

//funciones que modifican la puntuacion
function ganaUsuario(){
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = nombreUsuario + " ¡Ganaste un punto! 🔥";
}
function ganaComputadora(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭";
}
function empate(){
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}
function reiniciarPartida(){
    reiniciar.classList.add("disable");
    elegiTuArma.classList.remove("disable");
    mensaje.classList.add("disable");
    puntosUsuario = 0;
    puntosPC = 0;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;
    instrucciones.innerText = "El primero en llegar a 3 puntos gana."
}