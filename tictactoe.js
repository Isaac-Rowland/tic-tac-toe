// vars
var inputresponse = document.querySelector(".inputMessage")
var allPlayers = ["X","O"]
var currentPlayer = allPlayers[0]
var gameInProgress = true 
var button = document.querySelector(".button")
var howManyTurns = 0
var displayedText = document.querySelector(".player")


//whose turn is it
var whoseTurn = 0
function playersName(){
    if (currentPlayer == "X"){
    whoseTurn = "Player one's turn"
    }
    else if(currentPlayer == "O"){
        whoseTurn = "Player two's turn"
    }
    return whoseTurn
} 


// Whose turn is it
function togglePlayer(){
    if (currentPlayer === allPlayers[0]){
        currentPlayer = allPlayers[1]
    }
    else {
        currentPlayer = allPlayers[0]
    }
}

// display message pause
// setTimeout (function(){
//     inputresponse.textContent = `Player ${currentPlayer} turn`
// }, 2000)

// Is there a winner? 
function isThereAWinner(){
    if (topL.textContent === currentPlayer && topM.textContent === currentPlayer && topR.textContent === currentPlayer ||midL.textContent === currentPlayer && midM.textContent === currentPlayer && midR.textContent === currentPlayer || botL.textContent === currentPlayer && botM.textContent === currentPlayer && botR.textContent === currentPlayer || topL.textContent === currentPlayer && midM.textContent === currentPlayer && botR.textContent === currentPlayer ||botL.textContent === currentPlayer && midM.textContent === currentPlayer && topR.textContent === currentPlayer || topL.textContent === currentPlayer && midL.textContent === currentPlayer && botL.textContent === currentPlayer || topM.textContent === currentPlayer && midM.textContent === currentPlayer && botM.textContent === currentPlayer || topR.textContent === currentPlayer && midR.textContent === currentPlayer && botR.textContent === currentPlayer ){
        inputresponse.textContent = `Player ${allPlayers.indexOf(currentPlayer) + 1} wins`
        // add return in here to check to see if winner
        return true
    } 
    return false
}
// which box has been clicked
function boxClicked (event) {
    var thisBox = event.target
    if(gameInProgress){
        if(allPlayers.includes(thisBox.textContent)){
            inputresponse.textContent = "Pick another spot pls"
        }
        else {
            inputresponse.textContent = "Nice spot"
            thisBox.textContent = currentPlayer
            if (!isThereAWinner(currentPlayer)){
                howManyTurns++
                if(howManyTurns == 9){
                    inputresponse.textContent = "Its a draw"
                    button.style.backgroundImage = "url(Restart.gif)"
                }
                else {
                    togglePlayer();
                    setTimeout (function(){
                    inputresponse.textContent = `${playersName()}`
                    }, 600)
                }
            }
            else {
                inputresponse.textContent = "Good job on winning"
                button.style.backgroundImage = "url(Restart.gif)"
                gameInProgress = false
            }
        }
    }
}


var topL = document.querySelector("#topL")
topL.addEventListener("click", boxClicked)
var topM = document.querySelector("#topM")
topM.addEventListener("click", boxClicked)
var topR = document.querySelector("#topR")
topR.addEventListener("click", boxClicked)
var midL = document.querySelector("#midL")
midL.addEventListener("click", boxClicked)
var midM = document.querySelector("#midM")
midM.addEventListener("click", boxClicked)
var midR = document.querySelector("#midR")
midR.addEventListener("click", boxClicked)
var botL = document.querySelector("#botL")
botL.addEventListener("click", boxClicked)
var botM = document.querySelector("#botM")
botM.addEventListener("click", boxClicked)
var botR = document.querySelector("#botR")
botR.addEventListener("click", boxClicked)

var restartButton = document.querySelector(".resetbutton")
var allBoxes = document.querySelectorAll(".boxes")
// Restart game button 
function restartGame(){
    // reset all divs to have nothing in them. 
    for(i = 0; i < allBoxes.length; i++){
        allBoxes[i].textContent = ""
    }

    inputresponse.textContent = `Game restarted`
    setTimeout (function(){
        inputresponse.textContent = `Go again!`}, 2000
    )
    setTimeout (function(){
        inputresponse.textContent =`${playersName()}`}, 4000
    )
    button.style = ""
    gameInProgress = true
}
restartButton.addEventListener("click", restartGame)
