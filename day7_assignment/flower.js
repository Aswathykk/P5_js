class Flower{
     constructor(x,y,noPetals,xSpeed,ySpeed,size){
        this.x = x;
        this.y = y;
        this.noPetals = noPetals;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.swayCurrent = 0;      
        this.swayDirection = 1;   
        this.swayDistance = 80;  
        this.size = size; 
         this.flowerMax = false;  
    }
    drawFlower(){
        
        push();
        noStroke();
        translate(this.x + this.swayCurrent, this.y);
        rotate(frameCount * 0.5);
        // rotate(frameCount); // to roate the flower
        for(let i=0; i<this.noPetals ; i++){
            push(); 
            rotate((360 / this.noPetals) * i); 
           // translate(60, 0);
            fill(color(220, 138, 120, 170));
            ellipse(0, 0 , this.size + 100, this.size/4+20);
           // rotate(360/this.noPetals);
            pop();
        }
         fill(color(240, 130, 132));
        ellipse(0, 0, 30);
        pop();

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
    // swayFlower(){
    //  let d = dist(mouseX, mouseY, this.x, this.y);
    // if (d < 30) {
    //   this.swayCurrent += this.swayDirection * 4; 

    // if (this.swayCurrent > this.swayDistance || this.swayCurrent < -this.swayDistance) {
    //     this.swayDirection *= -1; 
    //   }

    // } else {
    //   this.swayCurrent *= 0.9;
    // }
    // }
 

    growFlower(){
        if(!this.flowerMax){
           this.size = this.size+1; 
           if (this.size >= 250) {
            this.flowerMax = true;
           }
           
        }
        else{
           this.size = this.size-1; 
           if (this.size <= 50) {
            this.flowerMax = false;
           }
        }
    
        
    }
}



// growFlower(){
//         if(this.size<250){
//            this.size = this.size+1; 
//            if (this.size == 249) {
//             this.flowerMax = true;
//            }
           
//         }
//         if(this.flowerMax == true){
//            this.size = this.size-1; 
//            if (this.size == 50) {
//             this.flowerMax = false;
//            }
//         }
    
        
//     }
// }