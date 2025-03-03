const bubbleContainer=document.querySelector(".bubble_container");
const timerDisplay = document.getElementById("timer");
let targetDisplay = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const originalTime = 60;
let leftTime = originalTime;
let score = 0;
let bubbleCount = 100;



function generateTarget()
{
target = Math.floor(Math.random()*10);
targetDisplay.textContent = target;
}



function createBubbles(){

    bubbleContainer.innerHTML = ``;
    for(let i=1; i<=bubbleCount; i++){
        const bubble = document.createElement("div");
        bubble.classList.add("bubbles");
        bubble.textContent=Math.floor(Math.random()*10);
        bubbleContainer.appendChild(bubble);
        
    }
}





function startTimer(){
   const timeInterval = setInterval(() =>{
       leftTime--;
       if(leftTime%10 === 0){
        
        createBubbles();
       }
       if(leftTime===0){
           clearInterval(timeInterval);
           bubbleContainer.innerHTML = `
           <div class="feature">

    <div class="append_conatainer">
        <div class="game_over">Game Over</div>
        <div class="final_score">Score: ${score}</div>
        <button class="reset_button" onclick="restartGame()">Restart</button>
    </div>
    <div class="level">
        <h1>Choose Level</h1>
        <button class="easy" onclick="easy()">Easy</button>
        <button class="medium" onclick="medium()">Medium</button>
        <button class="hard" onclick="hard()">Hard</button>
    </div>

   </div>

           `
       }
      timerDisplay.textContent = leftTime;
     
    },1000)

}

function restartGame(){
    leftTime = originalTime
    score = 0
    scoreDisplay.textContent = 0;

    startGame();
   
}
function startGame(){
    generateTarget();
    createBubbles();
    startTimer() ;
}


bubbleContainer.addEventListener("click", event => {
    if(event.target.classList.contains("bubbles")){
        if(event.target.textContent === targetDisplay.textContent){
            score += 10;
        }
        else{
            score -=5;
        }
        scoreDisplay.textContent = score;
        
    }
    generateTarget();
    
})



// generateTarget()
// createBubbles();
// startTimer() 





function easy(){
      bubbleContainer.innerHTML = ``;
    bubbleCount = 10;
    
    restartGame();
}
function hard(){
    bubbleCount = 100;
    restartGame();
}
function medium(){
    bubbleCount = 50;
    restartGame();
}

