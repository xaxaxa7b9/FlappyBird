// JavaScript source code
document.addEventListener('DOMContentLoaded', () => {

    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground');

    let birdLeft = 100;
    let birdBottom = 100;
    let gravity = 1.5;

    function startGame() {


       
            birdBottom -= gravity;
            bird.style.bottom = birdBottom + 'px';
            bird.style.left = birdLeft + 'px';
            //gravity += 0.15;
        
    }
    let timer = setInterval(startGame, 20);
            
       
    function control(e) {
        if (e.keyCode === 32) {
            jump();
        }
    }

     

        function jump()
        {
            if (birdBottom < 490) {

                birdBottom += 50;
                bird.style.bottom = birdBottom + 'px';
                gravity = 1.5;
            }
        }
        document.addEventListener('keyup', control);

 
    function generateObstacle() {
        let obstacleLeft = 500;
        let randomHeight = Math.random() * 60;
        let obstacleBottom = randomHeight;
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        gameDisplay.appendChild(obstacle);
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';


    }
    generateObstacle();

})