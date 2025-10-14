class Car{
    constructor(x, y, size, speed){
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    move(){
        this.x = this.x + this.speed;
        if(this.x > width){
            this.x = 0;
        }
    }

    show(redColour){
       fill(redColour, 0, 0);
       rect(this.x, this.y, this.size, 20);
       ellipse(this.x + 10, this.y+20,10);
       ellipse(this.x + this.size - 10, this.y+20,10);
    }

    grow(){
        if(this.size<200){
           this.size = this.size+1;  
        }
       
    }
}

class train{
    constructor(x, y, size, speed){
        this.x = x;
        this.y = y;
        this.size = 2*size;
        this.speed = speed;
    }

    move(){
        this.x = this.x + this.speed;
        if(this.x > width){
            this.x = 0;
        }
    }

    show(blueColour){
       fill(blueColour, 0, 0);
       rect(this.x, this.y, this.size, 20);
       ellipse(this.x + 10, this.y+20,10);
       ellipse(this.x + this.size - 10, this.y+20,10);
       ellipse(this.x + 20, this.y+20,10);
       ellipse(this.x + this.size - 20, this.y+20,10);
    }
}