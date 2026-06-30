const consejos = [
    "Recolectá madera apenas comiences.",
    "Construí una mesa de crafteo.",
    "Fabricá un pico de piedra.",
    "Construí un refugio antes de la noche.",
    "Llevá siempre antorchas.",
    "No caves hacia abajo.",
    "Cociná la comida antes de comerla.",
    "Guardá los diamantes para herramientas importantes.",
    "No Golpees a los Pigmans.",
    "No Intentes Nadar en lava.",
    "Guarda siempre las coordenadas de tu Casa."
];

const input = document.getElementById("buscarConsejo");
const botonBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");
const btnAleatorio = document.getElementById("btnAleatorio");
const formulario = document.getElementById("formContacto");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const error = document.getElementById("error");
const contador = document.getElementById("contador");

function mostrarConsejos() {

    const lista = document.getElementById("listaConsejos");

    consejos.forEach(function(consejo){

        const li = document.createElement("li");

        li.textContent = consejo;

        lista.appendChild(li);

    });

}

function buscarConsejo() {

    const texto = input.value.toLowerCase();

    let encontrado = false;

    for(let i = 0; i < consejos.length; i++){

        if(consejos[i].toLowerCase().includes(texto)){

            resultado.textContent = consejos[i];

            encontrado = true;

            break;
        }

    }

    if(!encontrado){

        resultado.textContent = "No se encontró ningún consejo.";

    }

}

function consejoAleatorio(){

    const indice = Math.floor(Math.random() * consejos.length);

    resultado.textContent = consejos[indice];

}

function validarFormulario(event){

    event.preventDefault();

    error.textContent = "";

    try{

        if(nombre.value.trim() === ""){
            throw new Error("Debe ingresar un nombre.");
        }

        if(email.value.trim() === ""){
            throw new Error("Debe ingresar un email.");
        }

        if(mensaje.value.trim() === ""){
            throw new Error("Debe ingresar un mensaje.");
        }

        error.style.color = "green";
        error.textContent = "Formulario enviado correctamente.";

    }

    catch(err){

        error.style.color = "red";
        error.textContent = err.message;

    }

}

btnAleatorio.addEventListener("click", consejoAleatorio);
botonBuscar.addEventListener("click", buscarConsejo);
formulario.addEventListener("submit", validarFormulario);
mensaje.addEventListener("input", function(){

    contador.textContent = "Caracteres: " + mensaje.value.length;

});