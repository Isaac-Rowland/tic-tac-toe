// vars
var inputresponse = document.querySelector(".inputMessage")
var allPlayers = ["X","O"]
var currentPlayer = allPlayers[0]



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
    }
}
// which box has been clicked
function boxClicked (event) {
    var thisBox = event.target
    // TODO should I use includes or indexOf
    if(allPlayers.includes(thisBox.textContent)){
        inputresponse.textContent = "Pick another spot pls"
    }
    else {
        inputresponse.textContent = "Nice spot"
        thisBox.textContent = currentPlayer
        if (isThereAWinner(currentPlayer) == true || isThereAWinner(currentPlayer) != "O"){
        togglePlayer();
        setTimeout (function(){
            inputresponse.textContent = `Player ${allPlayers.indexOf(currentPlayer) + 1}s turn`
        }, 1000)
        } 
        else {
            inputresponse.textContent = "good job on winning"
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
    inputresponse.textContent = "Game restarted"
    }
}
restartButton.addEventListener("click", restartGame)
