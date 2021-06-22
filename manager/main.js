const canvas = document.getElementById('canva-1');
const context = canvas.getContext('2d'); // permet de récuperer toutes les possiblités qu'offre canvas

// Canva object
canvas.width = 600                                                 ;
canvas.height = 400;

//Settings
let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;                                 
let gameSpeed = 2; // for parralax effect

const gradient = context.createLinearGradient(0,0,0,70);
gradient.addColorStop('0.4','#fff');
gradient.addColorStop('0.5','#fafafa');
gradient.addColorStop('0.9','#bcd1db');

// Background layer

const background = new Image();
background.src = "img/forest-landscape.png"; 

const Background = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width, 
    height: canvas.height
} 

function handleBackground() {
    //Slide to the left again
    if(Background.x1 <= -Background.width + gameSpeed) Background.x1 = Background.width; 
    else Background.x1 -= gameSpeed;
    context.drawImage(background, Background.x1, Background.y, Background.width, Background.height);
    
    if(Background.x2 <= -Background.width + gameSpeed) Background.x2 = Background.width;
    else Background.x2 -= gameSpeed;
    context.drawImage(background, Background.x2, Background.y, Background.width, Background.height);
} 

// Animate functions

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height); 
    //context.fillRect(10, temp, 50, 50);
    handleBackground();
    handleObstacles();
    handleParticles();
    character.update();
    character.draw();
    context.fillStyle = gradient;
    context.font = '90px Inconsolata';
    context.fillText(score, 450, 70);
    handleCollisions();
    if(handleCollisions() === true ) return;
    requestAnimationFrame(animate);
    angle+=0.12; 
    hue++;
    frame++;
}
animate();

// Keydown events

window.addEventListener('keydown', function(e)
{
    // display name of key :
    // console.log(e.code); 
    // if space is pressed :
    if(e.code === 'Space') spacePressed = true;
});

window.addEventListener('keyup', function(e)
{
    // display name of key :
    // console.log(e.code); 
    if(e.code === 'Space') spacePressed = false;
});

// Collisions

const bang = new Image();
bang.src = 'img/bang.png';
function handleCollisions(){
    for(let i = 0; i < obstaclesArray.length; i++){
        if(character.x < obstaclesArray[i].x + obstaclesArray[i].width
        && character.x + character.width > obstaclesArray[i].x 
        && ((character.y < 0 + obstaclesArray[i].top 
            && character.y + character.height > 0) 
            || (character.y > canvas.height - obstaclesArray[i].bottom
            && character.y + character.height < canvas.height))){
                //collision start
                context.drawImage(bang, character.x, character.y, 50, 50);
                context.font = '30px Inconsolata';
                context.fillStyle = '#fAfAfA';
                context.fillText('GAME OVER. Score : '+ score, 160, canvas.height/2);
                return true;
            }
    }
}


