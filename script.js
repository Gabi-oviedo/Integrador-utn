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

function mostrarConsejos() {

    const lista = document.getElementById("listaConsejos");

    consejos.forEach(function(consejo){

        const li = document.createElement("li");

        li.textContent = consejo;

        lista.appendChild(li);

    });

}

mostrarConsejos();

const input = document.getElementById("buscarConsejo");
const botonBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

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

botonBuscar.addEventListener("click", buscarConsejo);