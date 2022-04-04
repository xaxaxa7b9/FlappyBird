document.addEventListener('DOMContentLoaded', () => {

    
    const ground = document.querySelector('.ground-moving')
    const bird = document.querySelector('.bird')
    const game = document.querySelector('.game-container')
 

    
    let gravity = 1
    let isGameOver = false
    let gap = 430
    let acceleration = 0.2
    let birdLeft = 220
    let birdBottom = 100


    var sound = new Audio("/Users/xaxaxa/source/repos/FlappyBird/sounds/song.mp3")
    var sound1 = new Audio("/Users/xaxaxa/source/repos/FlappyBird/sounds/gameOver.mp3")


  
      

    

    function startGame() {


      
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
        gravity += acceleration
        console.log(birdBottom)
      
    }
        let timerGame = setInterval(startGame, 20)


    function lift(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (birdBottom < 500) birdBottom += 30
        bird.style.bottom = birdBottom + 'px'
        gravity = 1
        sound.play();
    }
    document.addEventListener('keyup', lift)


    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 80
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if (!isGameOver) {
            obstacle.classList.add("obstacle")
            topObstacle.classList.add("topObstacle")
        }
        game.appendChild(obstacle)
        game.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function obsMovement() {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -60) {
                clearInterval(timer)
                game.removeChild(obstacle)
                game.removeChild(topObstacle)
            }
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 150 || birdBottom > obstacleBottom + gap - 200) ||
                birdBottom === 0 || birdBottom < 0
            ) {
                gameOver()
                clearInterval(timer)
            }
        }
        let timer = setInterval(obsMovement, 20)
        if (!isGameOver) setTimeout(generateObstacle, 3000)

    }
    generateObstacle()


    function gameOver() {
        sound1.play();
       
        sound.pause();
        sound.currentTime = 0;
        clearInterval(timerGame)
        isGameOver = true
        document.removeEventListener('keyup', lift)
        ground.classList.add('ground')
        ground.classList.remove('ground-moving')
        
    }

   
        
       
    

})