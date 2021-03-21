class Lightning{
    constructor(){
        this.img = loadImage("lightning.png");
    }
    display(){
        image(this.img,random(50,350),-50,random(200,250),random(250,350));
    }
}