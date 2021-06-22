class Character {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;     // velocity y ---- speed vector y
        this.width = 20;
        this.height = 20; 
        this.gravity = 0.5; // put character down
    }
    update(){
        let curve = Math.sin(angle) * 20; // Up & down

        if(this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        }
        else {
            this.vy += this.gravity;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if(this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if(spacePressed && this.y > this.height * 3) this.flap();
    // Calculate position and speed of chatacter for each frame animation :
        this.vy += this.gravity;
        this.y += this.vy;
    }
    // Style of character
    draw(){
        // color:
        context.fillStyle = 'hsla(' + hue +', 100%, 95%, 0.8)';
        // position & shape :
        context.beginPath();
        context.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        context.fill();
    }
    flap(){ 
        // Each time character flap 
        this.vy -= 1.3;
    }
}

const character = new Character();

