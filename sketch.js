
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;
var distance = 0;
var database;
var car1, car2, car3, car4, cars;
var track, car1_image, car2_image, car3_image, car4_image,ground;

function preload(){
    track = loadImage("images/track.jpg");
    car1_image = loadImage("images/car1.png");
    car2_image = loadImage("images/car2.png");
    car3_image = loadImage("images/car3.png");
    car4_image = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-20);

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if (playerCount === 4){
        game.update(1);
    }
    if (gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}

