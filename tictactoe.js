// winners
// [topl, topm, topr]
// [midl, midm, midr]
// [botl, botm, botr]
// [topl, midm, botr]
// [botl, midm, topr]
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

// Is there a winner? 
function isThereAWinner(){
    if (topL.textContent === currentPlayer && topM.textContent === currentPlayer && topR.textContent === currentPlayer ||midL.textContent === currentPlayer && midM.textContent === currentPlayer && midR.textContent === currentPlayer || botL.textContent === currentPlayer && botM.textContent === currentPlayer && botR.textContent === currentPlayer || topL.textContent === currentPlayer && midM.textContent === currentPlayer && botR.textContent === currentPlayer ||botL.textContent === currentPlayer && midM.textContent === currentPlayer && topR.textContent === currentPlayer){
        inputresponse.textContent = `Player ${allPlayers.indexOf(currentPlayer) + 1} wins`
    }
}
// which box has been clicked
function boxClicked (event) {
    var thisBox = event.target
    // TODO should I use includes or indexOf
    if(allPlayers.includes(thisBox.textContent)){
        inputresponse.textContent = "Pick another box pls"
    }
    else {
        inputresponse.textContent = "Nice spot"
        thisBox.textContent = currentPlayer
        isThereAWinner(currentPlayer)
        togglePlayer()
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
// Restart game button 
// function RestartGame(){
    restartButton.addEventListener("click", function (){
        // reset all divs to have nothing in them. 
    var allBoxes = document.querySelectorAll(".boxes").textContent = ""
    })
// }