var database,gameState,form,player,game;
var playerCount=0;
var title;
gameState=0;

function setup(){
    createCanvas(500,500);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){
   
    drawSprites();
}

