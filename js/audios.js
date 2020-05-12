// audios::
let auBtNormal   = new Audio('./audios/boton.mp3');
let auDificultad = new Audio('./audios/dificultad.mp3');
let auGuias      = new Audio('./audios/caras.mp3');
let auGanaste    = new Audio('./audios/ganaste.mp3');
let auPerdiste   = new Audio('./audios/perdiste.mp3');
let auPremio     = new Audio('./audios/premio cartas.mp3');

let vol = 0.2;

function sonido(audio){
    audio.volume = vol;
    audio.play();
}
