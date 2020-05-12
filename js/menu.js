
let dFacil   = document.getElementById('check1');
let dNormal  = document.getElementById('check2');
let dDificil = document.getElementById('check3');

// accion de botones::
document.getElementById('bt-instrucciones').addEventListener('click' , ()=>{

    sonido(auBtNormal);
    viewInst.style.display = "block";
});

document.getElementById('bt-entendido').addEventListener('click' , ()=>{

    sonido(auBtNormal);
    viewInst.style.display = "none";
});

document.getElementById('bt-jugar').addEventListener('click' , ()=>{
    
    sonido(auBtNormal);

    viewJuego.style.display = "block";
    viewMenu.style.display  = "none";

    dificultad();

});

// opciones de dificultad::

dFacil.addEventListener('click', ()=>{

    sonido(auDificultad);

    dFacil.checked = true;
    dNormal.checked = false;
    dDificil.checked = false;
});

dNormal.addEventListener('click', ()=>{

    sonido(auDificultad);

    dFacil.checked = false;
    dNormal.checked = true;
    dDificil.checked = false;
});

dDificil.addEventListener('click', ()=>{

    sonido(auDificultad);

    dFacil.checked = false;
    dNormal.checked = false;
    dDificil.checked = true;
});


// funcion para generar valor aleatorio::
function valRandom(min , max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function infjugadas(){
    document.getElementById('oporRestantes').innerHTML = oportunidades;
}


//control de dificultad::
function dificultad(){

    oportunidades = 6;

    if(dFacil.checked == true){

        numGanador = valRandom(1 , 15);
        // console.log("facil");
        document.getElementById('rango').innerHTML = "Del 1 al 15";

    }else if(dNormal.checked == true){

        numGanador = valRandom(1 , 25);
        // console.log("normal");
        document.getElementById('rango').innerHTML = "Del 1 al 25";
    }else{

        numGanador = valRandom(1 , 35);
        // console.log("dificil");
        document.getElementById('rango').innerHTML = "Del 1 al 35";
    }

    infjugadas();

    campoRes.value = "";
    // console.log(numGanador);
}
