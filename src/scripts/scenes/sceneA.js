function sceneA(){
    const fondo = document.createElement('img');
    fondo.src = './src/assets/scenes/sceneA.png';
    fondo.addEventListener('load', ()=>{
        canvas.drawImage(fondo, 0, 0);
    });
    const personaje = document.createElement('img');
    personaje.src = jugador.img;
    personaje.addEventListener('load',()=>{
        canvas.drawImage(personaje, jugador.posx, 380, 60, 70);
    });  
    if(jugador.posx > 700){
        jugador.posx = 0;
        scenes = "sceneB"
    }
    if(jugador.posx < 0){
        jugador.posx = 640;
        scenes = "sceneC"
    }    
}