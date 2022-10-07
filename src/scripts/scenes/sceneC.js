let puntero = "";
function sceneC(){
    const ventSembrar = document.getElementById('ventSembrar');
    ventSembrar.style.visibility = "visible";
    ventSembrar.style.backdropFilter = "blur(100px)"
}
const suelo1 = document.getElementById("suelo1");
const suelo2 = document.getElementById("suelo2");
const suelo3 = document.getElementById("suelo3");
const suelo4 = document.getElementById("suelo4");
const suelo5 = document.getElementById("suelo5");
const suelo6 = document.getElementById("suelo6");
for (let index = 0; index < 7; index++) {
    if(localStorage.getItem(`suelo${index}`) == null){
        localStorage.setItem(`suelo${index}`, 0);
    }
}    
suelo1.addEventListener('click', ()=>{
    suelo1.style.backgroundImage = "url('./src/assets/suelos/tierravolteada.png')"
});
const pico = document.getElementById('pico');
pico.addEventListener('click', ()=>{
    const ventSembrar = document.getElementById('ventSembrar');
    ventSembrar.style.cursor = "url('./src/assets/punteros/pico.png'), auto";
    puntero = "pico";
});
const regadera = document.getElementById('regadera');
regadera.addEventListener('click', ()=>{
    const ventSembrar = document.getElementById('ventSembrar');
    ventSembrar.style.cursor = "url('./src/assets/punteros/regadera.png'), auto";
    puntero = "regadera";
});
const pala = document.getElementById('pala');
pala.addEventListener('click', ()=>{
    const ventSembrar = document.getElementById('ventSembrar');
    ventSembrar.style.cursor = "url('./src/assets/punteros/pala.png'), auto";
    puntero = "pala";
});
const semillas= document.getElementById('semillas');
semillas.addEventListener('click', ()=>{
    const ventSembrar = document.getElementById('ventSembrar');
    ventSembrar.style.cursor = "url('./src/assets/punteros/semillas.png'), auto";
    puntero = "semillas";
});
const hogar= document.getElementById('hogar');
hogar.addEventListener('click', ()=>{
    const ventSembrar = document.getElementById('ventSembrar');
    ventSembrar.style.visibility = 'hidden';
    scenes = 'sceneA';
    jugador.posx = 60;
});