class BruceWayne{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x+10,y-50,60,options);
        World.add(world,this.body);
        this.img = loadImage("brucewayne.png");
        this.x = x;
        this.y = y;
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.img,this.x,this.y,400,300);
        pop();
    }
}