const particlesArray = [];

class Particle{
    constructor(){
        this.x = character.x;
        this.y = character.y;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color ='hsla(' + hue +', 100%, 95%, 0.8)'; //changing colors
    }
    update(){
        this.x -= gameSpeed;
        this.y += this.speedY;
    }
    draw(){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
}

function handleParticles(){
    particlesArray.unshift(new Particle); // new blank object
    for(let i= 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    //if more than 150, remove 20
    if(particlesArray.length > 150){
        for(let i= 0; i < 20; i++) {
            particlesArray.pop(particlesArray[i]);
        }
    }
}
