const obstaclesArray = [];

class Obstacle {
    constructor (){
        this.top = (Math.random() * canvas.height/3) + 20; // height of the top obstacle
        this.bottom = (Math.random() * canvas.height/3) + 20; // height of the bottom obstacle
        this.x = canvas.width;
        this.width = 35;
        this.color = 'hsla(' + hue + ', 50%, 90%, 1)';
        this.counter = false;
    }
    draw(){
        context.fillStyle = this.color;
        context.fillRect(this.x, 0, this.width, this.top); // x/y/width/height
        context.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update(){
        this.x -= gameSpeed;
        //counter
        if(!this.counter && this.x < character.x){
            score++;
            this.counter = true;
        }
        this.draw();
    }
}

function handleObstacles() {
    //every 50% of canva
    if(frame%70 === 0){           
        obstaclesArray.unshift(new Obstacle);
    }
    for(let i= 0 ;i < obstaclesArray.length; i++){
        obstaclesArray[i].update();
    }
    if(obstaclesArray.lenght > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}