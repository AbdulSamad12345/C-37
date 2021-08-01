var database;
var GameState = 0;
var PlayerCount;

var allPlayers;

var form, game, player;
 
function setup(){

    createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    


}


function draw(){

    if(PlayerCount===4){
        game.update(1);

    }
     
    if(GameState===1){
        clear();
        game.play();
    }
}







