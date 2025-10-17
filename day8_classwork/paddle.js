class paddle{
    constructor(x, y, height, width, speed){

        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        

    }
    show(){
        rect(this.x, this.y, this.width, this.height);

    }
    moveUp(){

        if(this.y>0)
        {
           this.y -=this.speed;
        }

    }
    moveDown(){
        if(this.y<height-this.height)
        {
           this.y +=this.speed;
        }

    }
}