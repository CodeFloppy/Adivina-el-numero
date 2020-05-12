
let premiosFacil = [
    {id:"01" , descripcion:"Una bota"},
    {id:"02" , descripcion:"Unos platanos"},
    {id:"03" , descripcion:"Una campana"},
    {id:"04" , descripcion:"Una pelota"},
    {id:"05" , descripcion:"Una roca"},
    {id:"06" , descripcion:"Una manzana"},
    {id:"07" , descripcion:"Un reloj"},
    {id:"08" , descripcion:"El Santo Graal"},
    {id:"10" , descripcion:"Un auto lujoso"},
    {id:"11" , descripcion:"Las esferas del dragon"}
];

let premiosNormal = [
    {id:"01" , descripcion:"Una bota"},
    {id:"02" , descripcion:"Unos platanos"},
    {id:"03" , descripcion:"Una campana"},
    {id:"04" , descripcion:"Una pelota"},
    {id:"13" , descripcion:"El traje de airon man"},
    {id:"06" , descripcion:"Una manzana"},
    {id:"07" , descripcion:"Un reloj"},
    {id:"08" , descripcion:"El Santo Graal"},
    {id:"10" , descripcion:"Un auto lujoso"},
    {id:"11" , descripcion:"Las esferas del dragon"}
];

let premiosDificil = [
    {id:"09" , descripcion:"El martillo de thor"},
    {id:"12" , descripcion:"El auto fantastico"},
    {id:"03" , descripcion:"Una campana"},
    {id:"04" , descripcion:"Una pelota"},
    {id:"13" , descripcion:"El traje de airon man"},
    {id:"06" , descripcion:"Una manzana"},
    {id:"07" , descripcion:"Un reloj"},
    {id:"08" , descripcion:"El Santo Graal"},
    {id:"10" , descripcion:"Un auto lujoso"},
    {id:"11" , descripcion:"Las esferas del dragon"}
];

// cartas::
document.getElementById('carta01').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta02').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta03').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta04').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta05').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta06').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta07').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta08').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta09').addEventListener('click' ,()=> randomPrize());
document.getElementById('carta10').addEventListener('click' ,()=> randomPrize());

// botones volver a intentar y menu::
document.getElementById('bt-gana-intentar').addEventListener('click' ,()=>{

    sonido(auBtNormal);
    dificultad();

    viewPremio.style.display  = "none";
    viewGanaste.style.display = "none";
});

document.getElementById('bt-gana-Menu').addEventListener('click' ,()=>{

    sonido(auBtNormal);
    
    viewPremio.style.display  = "none";
    viewGanaste.style.display = "none";
    viewJuego.style.display   = "none"
    viewMenu.style.display    = "block"
});

// funcion de premio aleatorio::
function randomPrize(){

    sonido(auPremio);
    let premio;

    if(dFacil.checked == true){

        premio = premiosFacil[valRandom(0 , 9)];

    }else if(dNormal.checked == true){

        premio = premiosNormal[valRandom(0 , 9)];
    
    }else{

        premio = premiosDificil[valRandom(0 , 9)];
    }

    document.getElementById('nom-premio').innerHTML = `${premio.descripcion}`;
    document.getElementById('img-premio').innerHTML = `<img src="./img/premios/${premio.id}.jpg">`;
    viewJuegoCartas.style.display = "none";
    viewPremio.style.display      = "block";
}

