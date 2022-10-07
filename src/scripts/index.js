let canvas, scenes = 'sceneA';
if(localStorage.getItem("cuentaAhorro")==null){
    localStorage.setItem("cuentaAhorro", 0);
}
const map = {};
function iniciar(){
    const elemento = document.getElementById("canvas");
    canvas = elemento.getContext("2d");
    botones();
    onkeydown = onkeyup = (e)=> leerEntradas(e);
    loop();
}
function botones(){
    const btnSalir = document.getElementById("salir");
    btnSalir.addEventListener('click', ()=>{
        const btnsBanco = document.getElementById('eleccionBanco');
        btnsBanco.style.visibility = 'hidden';
        eleccionBanco = false;
    });
}

function leerEntradas(e){
    map[e.key] = e.type == 'keydown';
}
function dibujar(){
    if(scenes == "sceneA"){
        sceneA();
    }else if(scenes == "sceneB"){
        sceneB();
    }else if(scenes == "sceneC"){
        sceneC();
    }
}
function moverPersonaje(){
    if(map.d == true){
        jugador.posx += 3;
    }else if(map.a == true){
        jugador.posx -= 3;
    }else{
        return;
    }
}
function loop(){
    moverPersonaje();
    dibujar();
    animacion = requestAnimationFrame(loop);
}
window.addEventListener("load", iniciar);