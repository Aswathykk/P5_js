class Flower{

    constructor(x,y, xSpeed, ySpeed){
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size = 20;
    }

    drawFlower(){
        // let z = random(15, 55);
        // let t

        if(this.selected == true){
            fill("red");
        }
        else{
            fill("white");
        }
        ellipse(this.x, this.y, 20, 50);
        ellipse(this.x, this.y, 50, 20);
        ellipse(this.x, this.y, 20);
        //  ellipse(this.x, this.y, z, t);
        // ellipse(this.x, this.y, t, z);
        // ellipse(this.x, this.y, z);

    }

    moveFlower(){
        this.x +=this.xSpeed;
        this.y += this.ySpeed;
        if(this.y>height||this.y<0){
            this.ySpeed = -this.ySpeed;
        }

        if(this.x>width||this.x<0){
            this.xSpeed = -this.xSpeed;
        }
    }
    checkPosition(mX,mY){
        ///if mX and mY are close to this.x and this.y make the flower eed otherwise white
        let distance = dist(mX, mY, this.x, this.y);
        if(distance<this.size/2){
           // fill(255, 0, 0);
            this.selected = true;
        }
        else{
           // fill(255);
            //this.selected = false;
        }

    }

}