const ctx = document.getElementById('canvass').getContext('2d');
var img1;
var img2;
var ant; 
var antX = 0;
var antY = 0;
var man; 
var manX = 550; 
var manY = 250;
var timeForChangeScreen = 0; 
var time = 0; 
var speedMan = 1;
var imgStart;
var coinX = getRandomArbitrary(0, 500);
var coinY = getRandomArbitrary(0, 200);
var coin;   
var numberCoins = 0; 
var pNumberCoins; 

window.onload = function() {
    startAssets();
    ctx.drawImage(imgStart, 0 ,0);
};

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

function startAssets() {    
    imgStart = new Image();
    imgStart.src = 'assets/game/drawingopp.png';
    
    img1 = new Image();
    img1.src = 'assets/game/grown.png';

    img2 = new Image();
    img2.src = 'assets/game/grown2.png';

    ant = new Image();
    ant.src = "assets/game/ant.png";

    man = new Image();
    man.src = "assets/game/man.png";

    coin = new Image();
    coin.src = "assets/game/coin.png";

}

function draw() {
    document.querySelector('#button--start').disabled = true;

    disableScroll(); 
    ctx.clearRect(0,0,600,300);
        dibujarFondo();
        drawAnt();
        drawMen();
        drawCoin();
        time++; 
    setTimeout(draw, 20);
}

function drawCoin(){
    if(coinX >= antX-10 &&  coinX <= antX  + 60 ){
        if(coinY >= antY-10 && coinY <=  antY+35){
            numberCoins++; 
            
            pNumberCoins = document.getElementById("points-id");
            pNumberCoins.innerText = numberCoins; 

            coinX = getRandomArbitrary(0, 500);
            coinY = getRandomArbitrary(0, 200);
        }
    }
    ctx.drawImage(coin, coinX, coinY);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function dibujarFondo() {
    if(timeForChangeScreen <= 25){
        ctx.drawImage(img1, 0, 0);

    }else if(timeForChangeScreen <= 50){
        ctx.drawImage(img2, 0, 0);

    }else {
        ctx.drawImage(img1, 0, 0);
        timeForChangeScreen = 0; 
    }
    timeForChangeScreen++; 
    console.log(timeForChangeScreen);
}

function drawAnt(){
    ctx.drawImage(ant, antX, antY)
}

function drawMen(){
    speedMan = Math.random() + 1;
    if(manX < antX){
        manX = manX + speedMan;  
    }
    if(manX > antX){
        manX = manX - speedMan;  
    }
    if(manY < antY){
        manY = manY + speedMan;  
    }
    if(manY > antY){
        manY = manY - speedMan;  
    }
    
    if(manX >= antX - 50 && manX <= antX  +50 ){
        if(manY >= antY - 50 && manY <= antY+50){
            location.reload();
        }
    }

    ctx.drawImage(man, manX, manY);
}

document.addEventListener("keyup", changeAntPosition);

function changeAntPosition(evento){
    switch(evento.keyCode){
        case teclas.UP:
            antY = antY - 20 ; 
            break; 
        case teclas.DOWN:
            antY = antY + 20 ; 
            break;
        case teclas.LEFT:
            antX = antX - 20 ; 
            break;
        case teclas.RIGHT:
            antX = antX + 20 ; 
            break;
        default:
    }
    if(antX<0){
        antX = 550;
    }
    if(antX>550){
        antX=0;
    }
    if(antY<0){
        antY=0;
    }
    if(antY>250){
        antY=250;
    }
}

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}
