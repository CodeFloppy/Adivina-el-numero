let btExit =       document.getElementById('salir');
let btSalirJuego = document.getElementById('btSalir');
let btContinuar =  document.getElementById('btContinuar');
let btResponder =  document.getElementById('btResponder');

let campoRes = document.getElementById('campoRespuesta');

let btIntentar =  document.getElementById('bt-pierde-intentar');
let btMenu =  document.getElementById('btMenu');

let btPremio =  document.getElementById('btPremio');


// acciones de botones::
btExit.addEventListener('click',()=>{

    sonido(auBtNormal);
    
    viewExit.style.display = "block";
});

btContinuar.addEventListener('click',()=>{

    sonido(auBtNormal);

    viewExit.style.display = "none";
});

btSalirJuego.addEventListener('click',()=>{

    sonido(auBtNormal);

    viewExit.style.display =  "none";
    viewJuego.style.display = "none";
    viewMenu.style.display =  "block";
});


btResponder.addEventListener('click',()=>{

    let resp = parseInt(campoRes.value);

    if(resp == numGanador){

        sonido(auGanaste);

        starsEarned();
        document.getElementById('gNumGanador').innerHTML = numGanador;
        viewGanaste.style.display ="block";
        
        return;

    }else if((resp + 3) > numGanador && (resp - 3) < numGanador){
            
        mostrarGuia('caliente');
    }else{
        mostrarGuia('frio');
    }

    sonido(auGuias);

    oportunidades --;
    campoRes.value = "";
    infjugadas();
    

    if(oportunidades == 0){

        sonido(auPerdiste);

        document.getElementById('pNumGanador').innerHTML = numGanador;
        viewPerdiste.style.display ="block";
        console.log(oportunidades);
    }

});

btIntentar.addEventListener('click',()=>{

    sonido(auBtNormal);
    dificultad();
    viewPerdiste.style.display = "none";
});

btMenu.addEventListener('click',()=>{

    sonido(auBtNormal);
    viewPerdiste.style.display = "none";
    viewJuego.style.display    = "none";
    viewMenu.style.display     = "block";
});

btPremio.addEventListener('click',()=>{

    sonido(auBtNormal);
    viewJuegoCartas.style.display ='block';
});


function starsEarned(){

    let stars = Math.ceil(oportunidades/2);
    let puntEstrellas = document.getElementById('punt-estrellas');

    puntEstrellas.innerHTML ="";

    for(let i = 0; i < 3 ;i++){

        if(stars > i){
            puntEstrellas.innerHTML += '<img src="./img/estrella on.png"  class="estrella-off" id="star1">';
        }else{
            puntEstrellas.innerHTML += '<img src="./img/estrella off.png"  class="estrella-off" id="star1">';
        }
    }
}


function mostrarGuia(emoji){
    document.getElementById('emojiGuia').innerHTML = `<img src="./img/emoji_${emoji}.png" alt="" class="emoji-guia">`;
    document.getElementById('emojiGuia').style.display = "block";

    setTimeout(()=>{
        document.getElementById('emojiGuia').style.display = "none";
    }, 800);
}
