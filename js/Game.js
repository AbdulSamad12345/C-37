class Game{
    constructor(){
         
    }

    getState(){
       var gameStateRef = database.ref("GameState");
       gameStateRef.on("value",function(data){
           GameState = data.val();

       });
    }
    
    update(state){
        database.ref("/").update({
            GameState:state
        });
    }
     
    async start(){
        if(GameState===0){
            player = new Player();
            var playerCountRef = await database.ref("PlayerCount").once("value")
            if(playerCountRef.exists()){
                PlayerCount = playerCountRef.val();
                player.getCount();
            }
            
            
            form = new Form();
            form.display();

        }
       
}
    play(){
       form.hide();
       textSize(30);
       text("Game Start",100,100);
       Player.getPlayerInfo();

       if(allPlayers!==undefined){
           var displayPosition = 130;
           for(var plr in allPlayers){
               if(plr==="player"+player.index){
                   fill("red");

               }else{
                   fill("black");
               }

               displayPosition += 20;
               textSize(15);
               text(allPlayers[plr].Name+": "+allPlayers[plr].Distance,120,displayPosition)
           }
           
       }

       if(keyIsDown(UP_ARROW)&&player.index!==null){
           player.distance+=50;
           player.update();
       }
   }
}