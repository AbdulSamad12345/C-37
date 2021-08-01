class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");

    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

    }


    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(110,0);

       
        this.input.position(130,160);
        this.button.position(150,180);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            PlayerCount = PlayerCount+1;
            player.index = PlayerCount;
            
           
            player.update();
            player.updateCount(PlayerCount);

            
            this.greeting.html("Hello "+player.name);
            this.greeting.position(150,200);
   
        });


    }
}