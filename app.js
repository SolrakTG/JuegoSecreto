let intentos = 1;
let intentosMaximos = 5;
let listaNumSorteados = [];
let numeroMaximo = 50;
let numeroSecreto = generarNumeroAleatorio();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p","¡Felicidades! Adivinaste el número secreto. en " + intentos + (intentos==1? " intento" : " intentos"));
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled", "");

    } else {
        numeroDeUsuario > numeroSecreto ?    asignarTextoElemento("p", "Intentalo de nuevo, El número secreto es menor. te quedan " + (intentosMaximos - intentos) + ((intentosMaximos - intentos==1)? " intento" : " intentos")) : asignarTextoElemento("p", "Intentalo de nuevo, El número secreto es mayor. te quedan " + (intentosMaximos - intentos) + ((intentosMaximos - intentos==1)? " intento" : " intentos"));
   
        intentos++;
    
    }

    if (intentos > intentosMaximos) {

        asignarTextoElemento("p", "¡Perdiste! El número secreto era " + numeroSecreto);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled", "");
    }
    limpiarcaja();
    return;
}

function limpiarcaja() {
    document.querySelector("#valorUsuario").value = "";
}


function condicionesIniciales() {
    asignarTextoElemento("h1", "juego del número secreto");
    asignarTextoElemento("p", "Adivina el número secreto que está entre 1 y "+numeroMaximo); 
    intentos = 1;
    return;
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*(numeroMaximo)) + 1;

    if (listaNumSorteados.length === numeroMaximo) {
        asignarTextoElemento("p", "No hay más números para adivinar");
        document.getElementById("intentar").setAttribute("disabled", "");
        document.getElementById("reiniciar").setAttribute("disabled", "");

    } else {
        
        if (listaNumSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();

        } else {
            listaNumSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    if (listaNumSorteados.length === numeroMaximo) {
        asignarTextoElemento("p", "¡Felicidades! Has adivinado todos los números posibles.");
        document.getElementById("reiniciar").setAttribute("disabled", "");
        document.getElementById("intentar").setAttribute("disabled", "");
    } else {
        numeroSecreto = generarNumeroAleatorio();
        console.log(numeroSecreto);
        intentos = 1;
        document.getElementById("reiniciar").setAttribute("disabled", "");
        document.getElementById("intentar").removeAttribute("disabled");
        asignarTextoElemento("p", "Adivina el número secreto que está entre 1 y " + numeroMaximo);
        limpiarcaja();
    }
    return;
}

condicionesIniciales();