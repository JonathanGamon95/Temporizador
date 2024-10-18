const temporizador = document.getElementById("temporizador");
//botones:
const stop = document.getElementById("stop");
const play_pause = document.getElementById("play-pause");
const icon_play_pause = document.getElementById("icon-play-pause");


let minutos = 0;
let segundos = 0;

let minString;
let segString;

let unionIndices;
let estado_intervalo;


function eventoTemporizador() {
    estado_intervalo = setInterval(() => {
        segundos++;
        if (segundos > 59) {
            segundos = 0;
            minutos++;
        }

        if (segundos < 10) { segString = "0" + String(segundos) } else { segString = String(segundos); }
        if (minutos < 10) { minString = "0" + String(minutos) } else { minString = String(minutos); }

        unionIndices = minString + ":" + segString
        temporizador.innerText = unionIndices;
    }, 1000);
};



play_pause.addEventListener("click", () => {
    if (estado_intervalo) {
        clearInterval(estado_intervalo);
        estado_intervalo = null;
        
        icon_play_pause.setAttribute("class", "bi bi-play-fill");
    } else {
        eventoTemporizador();
        icon_play_pause.setAttribute("class", "bi bi-pause-fill");
    }
});



stop.addEventListener("click", () => {
    clearInterval(estado_intervalo);
    estado_intervalo = null;
    temporizador.innerText = "00:00";
    segundos = 0;
    minutos = 0;
    icon_play_pause.setAttribute("class", "bi bi-play-fill");
});