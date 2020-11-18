const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');

//funcionamento e tiro da nave
function flyShip(event){
    if(event.key === 'ArrowUp'){
        event.preventDefault() //Previne o comportamento padrão do browser
        moveUp;
    } else if (event.key === 'ArrowDown'){
        event.preventDefault()
        moveDown();

    } else if (event.key === " "){
        event.preventDefault();
        fireLaser();
    }
    
}