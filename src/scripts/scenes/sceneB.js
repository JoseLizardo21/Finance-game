let eleccionBanco = false;
function sceneB(){
    const fondo = document.createElement('img');
    fondo.src = './src/assets/scenes/sceneB.png';
    fondo.addEventListener('load', ()=>{
        canvas.drawImage(fondo, 0, 0);
    });
    const personaje = document.createElement('img');
    personaje.src = jugador.img;
    personaje.addEventListener('click', ()=>{console.log("Hola")});
    personaje.addEventListener('load',()=>{
        canvas.drawImage(personaje, jugador.posx, 380, 60, 70);
    });  
    if(jugador.posx < 0){
        jugador.posx = 640;
        scenes = "sceneA"
    } 
    if(jugador.posx >= 375 && jugador.posx <= 432 && map.e == true){
        eleccionBanco = true;
    }
    if(eleccionBanco == true){
        const btnsBanco = document.getElementById('eleccionBanco');
        btnsBanco.style.visibility = 'visible';
    }
}
const btnAhorrar = document.getElementById('ahorrar');
btnAhorrar.addEventListener('click', ()=>{
    const ventAhorros = document.getElementById('ingresarAhorros');
    ventAhorros.style.visibility =  'visible';
    const btnSalir = document.getElementById('salirAhorros');
    btnSalir.addEventListener('click', ()=>{
        ventAhorros.style.visibility = 'hidden';
    });
});
const guardarAhorros = document.getElementById('btn-ahorrar');
guardarAhorros.addEventListener('click', ()=>{
    const inpuAho = document.getElementById('inpAhorro').value;
    let aux = parseFloat(localStorage.getItem("cuentaAhorro"));
    aux += parseFloat(inpuAho);
    localStorage.setItem("cuentaAhorro", aux);
    const ventAhorros = document.getElementById('ingresarAhorros');
    ventAhorros.style.visibility = 'hidden';
});
const mostVentRetirar = document.getElementById('retirar');
mostVentRetirar.addEventListener('click', ()=>{
    const ventReirar = document.getElementById('retirarAhorros'); 
    ventReirar.style.visibility = 'visible';
});
const salirRetirar = document.getElementById('salirRetirar');
salirRetirar.addEventListener('click', ()=>{
    const ventReirar = document.getElementById('retirarAhorros'); 
    ventReirar.style.visibility = 'hidden';
});
const btn_retirar = document.getElementById('btn-retirar');
btn_retirar.addEventListener('click', ()=>{
    const inpuAho = document.getElementById('inpRetirarAhorro').value;
    let aux = parseFloat(localStorage.getItem("cuentaAhorro"));
    aux -= parseFloat(inpuAho);
    localStorage.setItem("cuentaAhorro", aux);
    const ventReirar = document.getElementById('retirarAhorros'); 
    ventReirar.style.visibility = 'hidden';
});